// import {
//   AppBar,
//   CssBaseline,
//   Box,
//   Toolbar,
//   Typography,
//   Container,
// } from "@mui/material";
import { CssBaseline, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "components/Footer";
import { useEffect, useState, setUser } from "react";
import{ useHistory } from "react-router-dom";
import TrackInfo from "components/TrackInfo";
import TrackForm from "./TrackForm";
import {Box} from "@mui/material";
import UserDetails from "components/UserDetails";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
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
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    useEffect(() => {
        const fetchTracks = async () => {
          const token = localStorage.getItem("token");
          const decoded = jwt_decode(token);
          const userId = decoded.id;
          const year = selectedDate.getFullYear();
          const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
          const day = String(selectedDate.getDate()).padStart(2, "0");
          const dateString = `${year}-${month}-${day}`;

          try {
            console.log("Selected date:", selectedDate);
            console.log("Date string:", dateString);
            const response = await fetch(`http://localhost:3001/api/tracks/user/${userId}?date=${dateString}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
    
            const data = await response.json();
            console.log("Tracks fetched:", data); //TODO remove test
            setTracks(data);
          } catch (error) {
            console.error("Error fetching tracks:", error);
          }
        };
    
        fetchTracks();
      }, [selectedDate]);
    
      const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
     <div className="tracks">
     {tracks && tracks.map((track) => (
        <TrackInfo track={track} key={track._id} />
     ))}
     </div>

    const refreshTracks = () => {
        setSelectedDate(new Date());
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
     <UserDetails
          render={(user) => (
            <p>
              Logged in as {user.firstName} {user.lastName} 
            </p>
          )}
        />
      </Box>
      <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <div className="track">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>

            <div className="tracks">
            {tracks && tracks.map((track) => (
                <Box key={track._id} sx={{ padding: '16px', marginBottom: '16px', border: '1px solid #ddd' }}>
                    <TrackInfo track={track} />
                </Box>
            ))}
        </div>
    </Box>


     <UserDetails
        render={(user) => (
            <TrackForm userId={user._id} onSubmit={refreshTracks} />
         )}
     />

        
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default TrackPage
