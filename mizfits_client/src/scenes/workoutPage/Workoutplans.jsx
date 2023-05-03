import * as React from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Footer } from "components/Footer";
import "./workoutplans.css";
import { theme } from "theme";

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              3 Day Cardio Focus
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              This is an example of a cardio focused workout for 3 days a week.
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="sm" >
          {/* End hero unit */}
          <Typography component="h2" variant="h4" align="center">
            Day 1
          </Typography>
          <table align="center">
            <thead>
              <tr>
                <th>Workout</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Treadmill Run</td>
                <td>1</td>
                <td>15-min</td>
              </tr>
              <tr>
                <td>Dumbbell Lateral Raises</td>
                <td>3</td>
                <td>8, 6, 6</td>
              </tr>
              <tr>
                <td>Barbell Upright Row</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td>Clean and Press</td>
                <td>3</td>
                <td>10, 8, 6</td>
              </tr>
              <tr>
                <td>Barbell Hip Thrust</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
            </tbody>
          </table>
          <Typography component="h2" variant="h4" align="center">
            Day 2
          </Typography>
          <table align="center">
            <thead>
              <tr>
                <th>Workout</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bicycling</td>
                <td>1</td>
                <td>10-min</td>
              </tr>
              <tr>
                <td>Deadlift</td>
                <td>4</td>
                <td>6, 4, 3, 2</td>
              </tr>
              <tr>
                <td>Lat Pulldown</td>
                <td>3</td>
                <td>15, 12, 10</td>
              </tr>
              <tr>
                <td>Military Press</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td>Face Pull</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td>Dumbbell Lunges</td>
                <td>3</td>
                <td>10, 8, 8</td>
              </tr>
            </tbody>
          </table>
          <Typography component="h2" variant="h4" align="center">
            Day 3
          </Typography>
          <table align="center">
            <thead>
              <tr>
                <th>Workout</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mountain Climbers</td>
                <td>2</td>
                <td>30-sec</td>
              </tr>
              <tr>
                <td>Heel Touch Crunches</td>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td>Bicycle Crunches</td>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td>Lying Leg Raise</td>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td>Russian Twist</td>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td>Barbell Back Squat</td>
                <td>3</td>
                <td>15, 12, 10</td>
              </tr>
              <tr>
                <td>Single-arm DB Rowing</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td>Dumbbell Pullover</td>
                <td>3</td>
                <td>10, 8, 8</td>
              </tr>
              <tr>
                <td>Incline Dumbbell Press</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
            </tbody>
          </table>
        </Container>
        <Box my={20}></Box>
      </main>
      <Footer></Footer>
    </ThemeProvider>
  );
}

