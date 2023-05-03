import * as React from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Footer } from "components/Footer";
import { theme } from "theme";
import { MainHeading } from "typography";
import FlexBetween from "components/FlexBetween";
import { colors } from "colors";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

// import your own image here
const avatarImage =
  "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg";
const iconSize = 64;
const FeatureCard = ({ icon, caption }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 5,
        p: 2,
        height: "100%",
        maxWidth: "300px",
        padding: "2rem",
        "&:hover": {
          cursor: "pointer",
          bgcolor: "#f1f1f1",
        },
      }}
    >
      {icon}
      <Typography variant="h6" align="center" sx={{ my: 2 }}>
        {caption}
      </Typography>
    </Paper>
  );
};
// const bpTheme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//       xxl: 2560,
//       // add a new breakpoint for stacking at 800px width
//       stacking: 800,
//     },
//   },
// });

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container maxWidth="md">
          {/* box for two main items */}
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              height: "50rem",
            }}
          >
            <Grid item xs={12} sm={6}>
              <Box margin="2.5rem">
                {/* Content of first column */}
                <Typography variant="h4" margin="1rem" marginLeft="0">
                  Welcome to MizFit!
                </Typography>
                <Typography variant="h6">
                  Start tracking your activity today.
                </Typography>
                <Button
                  sx={{
                    width: "60%",
                    bgcolor: "white",
                    color: "black",
                    margin: "2rem",
                    marginLeft: "0",
                  }}
                >
                  Create an account
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box margin="2.5rem">
                {/* Content of second column */}
                <Avatar
                  alt="homepage image"
                  src={avatarImage}
                  sx={{
                    width: 350,
                    height: 350,
                  }}
                ></Avatar>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginBottom: "10rem",
              my: "4",
            }}
            justifyContent="center"
          >
            <Grid item xs={12} md={4}>
              <FeatureCard
                icon={<CalendarTodayIcon sx={{ fontSize: iconSize }} />}
                caption="Plan your workouts and track your progress."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard
                icon={<GroupIcon sx={{ fontSize: iconSize }} />}
                caption="Connect with friends and share your workouts."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard
                icon={<FitnessCenterIcon sx={{ fontSize: iconSize }} />}
                caption="Discover new workouts and keep your routine fresh."
              />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer></Footer>
    </ThemeProvider>
  );
}
