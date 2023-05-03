// import {
//   AppBar,
//   CssBaseline,
//   Box,
//   Toolbar,
//   Typography,
//   Container,
// } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "components/Footer";
import { useEffect, useState, setUser } from "react";
import{ useHistory } from "react-router-dom";
import TrackInfo from "components/TrackInfo";
import TrackForm from "./TrackForm";
import {Box} from "@mui/material";
import jwt_decode from "jwt-decode";




const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(90deg, #FE6969, #FFAE4F , #FFE793 )`,
        },
      },
    },
  },
});

const TrackPage = () => {
  const [tracks, setTracks] = useState(null)
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        const userId = decoded.id;

        const response = await fetch(`http://localhost:3001/api/user/${userId}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});

if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}

const json = await response.json();
console.log("json:", json);
setUser(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
      {user ? (
        <p>
          Logged in as {user.firstName} {user.lastName}
          <button onClick={handleLogout}>Logout</button>
        </p>
      ) : (
        <p>Not logged in
            <button onClick={handleLogout}>Logout</button>
        </p>
        
        
      )}
      </Box>
    <div className="track">
      <div className="tracks">
        {tracks && tracks.map(track => (
          <TrackInfo track={track} key={track._id} />
        ))}
      </div>
      <TrackForm />  
      <Footer></Footer>
    </div>
    </ThemeProvider>
  )
}

export default TrackPage
