import * as React from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Avatar,
  Divider,
  Link,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import Anna from "./images/Anna.jpg";
import Levi from "./images/Levi.jpg";
import JayD from "./images/JayD.jpg";
import JayS from "./images/JayS.jpg";
import Jordan from "./images/Jordan.jpg";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const team = [
  {
    name: "Anna Liner",
    role: "Front End & UI/UX Design",
    image: Anna,
  },
  {
    name: "Levi Cheney",
    role: "Front End Development",
    image: Levi,
  },
  {
    name: "Jay Sakabu",
    role: "Full Stack Development",
    image: JayS,
  },

  {
    name: "Jay Dolan",
    role: "Full Stack Develoment",
    image: JayD,
  },
  {
    name: "Jordan Hayden",
    role: "Back End & Database",
    image: Jordan,
  },
];

export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          align="center"
          margin="4.5rem"
          marginBottom="2rem"
          variant="h3"
          sx={{
            fontWeight: 100,
          }}
        >
          ABOUT MIZFIT
        </Typography>
        <Paper sx={{ p: 2, borderRadius: 2 }}>
          <Typography variant="body1" align="center">
            MizFits is a fitness tracker and social platform for University of
            Missouri-Columbia students. The purpose of MizFits is to serve as a
            hub for logging and maintaing exercises at the gym, as well as
            sharing your tracked activities with others in the Mizzou community.
            MizFits intends to solve the problem behind why maintaining
            consistent fitness and understanding different workout
            routines/methods is often difficult for young adults by providing
            information and habit tracking capabilities.
          </Typography>
        </Paper>
        <Typography
          variant="h4"
          align="center"
          margin="3.5rem"
          marginBottom="1rem"
        >
          Meet the Team
        </Typography>
        <Divider
          color="black"
          sx={{ borderBottomWidth: "10", margin: "1rem" }}
        ></Divider>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {team.map((member) => (
            <Grid item key={member.name} xs={12} sm={4}>
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Avatar
                  src={member.image}
                  sx={{ width: 150, height: 150, margin: "auto" }}
                />
                <Typography variant="h5" align="center" margin="0.5rem">
                  {member.name}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                >
                  {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h4"
          align="center"
          margin="3.5rem"
          marginBottom="1rem"
        >
          Contact Us
        </Typography>
        <Divider
          color="black"
          sx={{ borderBottomWidth: "10", margin: "1rem" }}
        ></Divider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link
            href="mailto:mizfits@gmail.com"
            underline="none"
            color="inherit"
            width="90%"
          >
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                margin: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  bgcolor: "#f1f1f1",
                },
              }}
            >
              <Link
                href="mailto:mizfitdevs@gmail.com"
                underline="none"
                color="inherit"
              >
                <EmailIcon sx={{ marginBottom: 0 }} />
              </Link>
              <Link
                href="mailto:mizfits@gmail.com"
                underline="none"
                color="inherit"
                padding="1rem"
              >
                mizfits@gmail.com
              </Link>
            </Paper>
          </Link>

          <Link
            href="mailto:mizfits@gmail.com"
            underline="none"
            color="inherit"
            width="90%"
          >
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                margin: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  bgcolor: "#f1f1f1",
                },
              }}
            >
              <Link
                href="mailto:mizfits@gmail.com"
                underline="none"
                color="inherit"
              >
                <GitHubIcon sx={{ marginBottom: 0 }} />
              </Link>
              <Link
                href="https://github.com/jdolan00/MizFits/"
                underline="none"
                color="inherit"
                padding="1rem"
              >
                MizFits GitHub Repository
              </Link>
            </Paper>
          </Link>
        </Box>
        <div style={{ height: "80px" }}></div>
      </Container>
      {/* <Footer></Footer> */}
    </ThemeProvider>
  );
}
