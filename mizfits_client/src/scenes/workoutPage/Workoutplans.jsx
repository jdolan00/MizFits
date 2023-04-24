import * as React from "react";
import {
  AppBar,
  CssBaseline,
  Grid,
  Box,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
      <table style={{ backgroundColor: "white", borderCollapse: "collapse", border: "0px solid black", borderRadius: "32pt" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px", borderRadius: "32pt" }}>Workout</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Reps</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Rest</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{item.workout}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{item.reps}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{item.rest}</td>
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
          <Container maxWidth="sm">
            {/* End hero unit */}
            <Grid
              container
              spacing={0}
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
  

