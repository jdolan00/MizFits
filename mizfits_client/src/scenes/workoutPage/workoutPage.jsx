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
import { Link } from 'react-router-dom';

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
            <CardBase
              img="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg"
              days="3 days a week"
              subtext="Please select which workout focus you would like to follow."
              button1="Cardio"
              button2="Weightlifting"
            ></CardBase>
            <CardBase
              img="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1600"
              days="4 days a week"
              subtext="Please select which workout focus you would like to follow."
              button1="Cardio"
              button2="Weightlifting"
            ></CardBase>
            <CardBase
              img="https://images.pexels.com/photos/39671/physiotherapy-weight-training-dumbbell-exercise-balls-39671.jpeg?auto=compress&cs=tinysrgb&w=1600"
              days="Build your own"
              subtext="Skip the recommended workouts"
              button1="Create"
              button2="Browse"
            ></CardBase>
          </Grid>
        </Container>
      </main>
      <Footer></Footer>
    </ThemeProvider>
  );
}
