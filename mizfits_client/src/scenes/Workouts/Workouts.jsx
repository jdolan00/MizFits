import React, { useState, useEffect } from 'react';
import WorkoutLink from '../../components/WorkoutLink';
import {
  AppBar,
  CssBaseline,
  Box,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Footer } from 'components/Footer';
import "./Workouts.css"
import { theme } from "theme";


const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('https://mizfit.azurewebsites.net/api/workouts');
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        setError(error);
        return <div>Error: {error.message}</div>;
      }
    };
    fetchWorkouts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="relative"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <Typography variant="h6" color="black" noWrap>
            Mizfits
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              Workouts
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="md">
          <ul class="column-list">
            {workouts.map((workout) => (
              <WorkoutLink key={workout._id} workout={workout} />
            ))}
          </ul>
        </Container>
      </main>
      <div style={{ height: "80px" }}></div>
      <Footer />
    </ThemeProvider>
  );
};

export default Workouts;