import * as React from "react";
import {
  AppBar,
  // Button,
  // CardActions,
  // Card,
  // CardContent,
  // CardMedia,
  CssBaseline,
  Grid,
  Box,
  Toolbar,
  Typography,
  Container,
  // Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardBase } from "components/CardBase";
import { Footer } from "components/Footer";

const MondayTable = () => {
    const data = [
      {
        workout: "20-minutes Full Body HIIT (Workout #1)",
        reps: "-",
        rest: "5-minutes",
      },
      {
        workout: "Barbell Bench Press",
        reps: "15, 12, 10",
        rest: "2-3 min",
      },
      {
        workout: "Tricep Rope Pushdown",
        reps: "12, 10, 10",
        rest: "1-2 min",
      },
      {
        workout: "Barbell Bent-over Rowing",
        reps: "12, 10, 10",
        rest: "2-3 min",
      },
      {
        workout: "Barbell Romanian Deadlift",
        reps: "8, 6, 6",
        rest: "2-3 min",
      },
    ];
  
    return (
      <table>
        <thead>
          <tr>
            <th>Workout</th>
            <th>Reps</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.workout}</td>
              <td>{item.reps}</td>
              <td>{item.rest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

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

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="relative"
        style={{ background: "transparent", boxShadow: "none" }}
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
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Where to begin?
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              The purpose of this page is to help you decide what would be a
              fitting workout program based on your experience.
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid
            container
            spacing={4}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            <MondayTable></MondayTable>
          </Grid>
        </Container>
      </main>
      <Footer></Footer>
    </ThemeProvider>
  );
}
