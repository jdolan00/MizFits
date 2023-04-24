import * as React from "react";
import {
  AppBar,
  CssBaseline,
  Box,
  Toolbar,
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

export default function HomePage() {
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
