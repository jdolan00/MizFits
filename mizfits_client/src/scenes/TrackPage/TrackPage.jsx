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
import UserDetails from "components/UserDetails";




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
     <UserDetails
          render={(user) => (
            <p>
              Logged in as {user.firstName} {user.lastName} 
            </p>
          )}
        />
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
