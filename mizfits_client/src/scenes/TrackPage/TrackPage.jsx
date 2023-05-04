import { Container } from "@mui/material";
import { CssBaseline, TextField, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "components/Footer";
import { useEffect, useState, setUser } from "react";
import { useHistory } from "react-router-dom";
import TrackInfo from "components/TrackInfo";
import TrackForm from "./TrackForm";
import { Box } from "@mui/material";
import UserDetails from "components/UserDetails";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import jwt_decode from "jwt-decode";
import { theme } from "theme";
import "./TrackPage.css";

const TrackPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const [tracks, setTracks] = useState(null);
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
        const response = await fetch(
          `http://localhost:3001/api/tracks/user/${userId}?date=${dateString}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

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
    {tracks &&
      tracks.map((track) => <TrackInfo track={track} key={track._id} />)}
  </div>;

  const refreshTracks = () => {
    setSelectedDate(new Date());
  };

  return (
    <>
      {isNonMobileScreens ? (
            <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "0rem",
              marginBottom: "16px",
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-8rem",
            }}
          >
            <UserDetails
              render={(user) => (
                <TrackForm userId={user._id} onSubmit={refreshTracks} />
              )}
            />
          </Box>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-7rem",
              marginBottom: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
                marginBottom: "16px",
                backgroundColor: "white",
                padding: "15px",
                border: "2px solid black",
                borderRadius: "16px",
              }}
            >
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
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "40%",
                margin: "0 auto",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#FE6969",
                  width: "30%",
                  height: "50px",
                  border: "1px solid black",
                  borderRadius: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                <p>Weights</p>
              </Box>
              <Box
                style={{
                  backgroundColor: "#FFE793",
                  width: "30%",
                  height: "50px",
                  border: "1px solid black",
                  borderRadius: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                <p>Cardio</p>
              </Box>
              <Box
                style={{
                  backgroundColor: "white",
                  width: "30%",
                  height: "50px",
                  border: "1px solid black",
                  borderRadius: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                <p>Custom</p>
              </Box>
            </div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
                marginBottom: "16px",
                width: "60%",
              }}
            >
              <div className="tracks">
                {tracks &&
                  tracks.map((track) => (
                    <TrackInfo key={track._id} track={track} />
                  ))}
              </div>
            </Box>
          </Container>
          <div style={{ height: "60px" }}></div>
          <Footer></Footer>
        </ThemeProvider>

        
      ) : (
          <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "0rem",
              width: "100%",
            }}
          >
            <UserDetails
              render={(user) => (
                <TrackForm userId={user._id} onSubmit={refreshTracks} />
              )}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-5rem",
              marginBottom: "16px",
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
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-2rem",
              marginBottom: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
                marginBottom: "16px",
                backgroundColor: "white",
                padding: "15px",
                border: "2px solid black",
                borderRadius: "16px",
              }}
            >
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
            </Box>
            <Container
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#FE6969",
                  width: "30%",
                  height: "50px",
                  border: "1px solid black",
                  borderRadius: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                <p>Weights</p>
              </Box>
              <Box
                style={{
                  backgroundColor: "#FFE793",
                  width: "30%",
                  height: "50px",
                  border: "1px solid black",
                  borderRadius: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                <p>Cardio</p>
              </Box>
              <Box
                style={{
                  backgroundColor: "white",
                  width: "30%",
                  height: "50px",
                  border: "1px solid black",
                  borderRadius: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                <p>Custom</p>
              </Box>
            </Container>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
                width: "110%",
              }}
            >
              <div className="tracks">
                {tracks &&
                  tracks.map((track) => (
                    <TrackInfo key={track._id} track={track} />
                  ))}
              </div>
            </Box>
          </Container>
          <div style={{ height: "60px" }}></div>
          <Footer></Footer>
        </ThemeProvider>
      )}
</>
  );
};
export default TrackPage;
