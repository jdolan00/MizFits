import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  //AppBar,
  CssBaseline,
  Box,
  //Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "components/Footer";

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
  
  const Workout = () => {
    const { workoutName } = useParams();
    const [workout, setWorkout] = useState(null);
  
    useEffect(() => {
      const fetchWorkout = async () => {
        const response = await fetch(
          `http://localhost:3001/api/workouts?WorkoutName=${workoutName}`
        );
        const data = await response.json();
  
        for (let i = 0; i < data.length; i++) {
          if (data[i].WorkoutName === workoutName) {
            setWorkout(data[i]);
            break;
          }
        }
      };
  
      fetchWorkout();
    }, [workoutName]);
  
    if (!workout) {
      return (
        <ThemeProvider theme={theme}>
          <div>Loading...</div>
        </ThemeProvider>
      );
    }
  
    const { WorkoutName, WorkoutDescription, WorkoutURL } = workout;
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100vh - 64px)',
          }}
        >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              {WorkoutName}
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              {WorkoutDescription}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <iframe
                src={WorkoutURL}
                frameBorder="0"
                allow="autoplay; encrypted media"
                allowFullScreen
                title={WorkoutName}
                width="560"
                height="315"
              ></iframe>
            </Box>
          </Container>
        </Box>
        <Footer />
      </ThemeProvider>
    );
  };
  
  export default Workout;