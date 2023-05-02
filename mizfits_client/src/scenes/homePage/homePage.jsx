import * as React from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Footer } from "components/Footer";
import { theme } from "theme";
// import your own image here
const avatarImage =
  "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg";

  export default function HomePage() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Container maxWidth="sm">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="left"
                    gutterBottom
                  >
                    Welcome!
                  </Typography>
                  <Typography variant="h5" align="left" paragraph>
                    Start tracking your activity today.
                  </Typography>
                </Container>
              </Grid>
              <Grid item>
                <Avatar
                  alt="Avatar"
                  src={avatarImage}
                  sx={{ width: 200, height: 200 }}
                />
              </Grid>
            </Grid>
          </Box>
          <Container maxWidth="md">{/* End hero unit */}</Container>
        </main>
        <Footer></Footer>
      </ThemeProvider>
    );
  }