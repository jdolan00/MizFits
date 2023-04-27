import * as React from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
} from "@mui/material";
import {ThemeProvider } from "@mui/material/styles";
import { Footer } from "components/Footer";
import {theme} from "theme"


export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Welcome!
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Start tracking your activity today.
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="md">{/* End hero unit */}</Container>
      </main>
      <Footer></Footer>
    </ThemeProvider>
  );
}
