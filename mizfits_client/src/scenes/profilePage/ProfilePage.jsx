import { Avatar, Box, Container, Typography, Grid } from "@mui/material";
import { colors } from "../../colors";
import { Banner } from "components/Banner";
import Navbar from "components/Navbar";
import { Paragraph } from "typography";
import { MainHeading } from "typography";
import { Footer } from "components/Footer";

const ProfilePage = () => {
  return (
    <Container>
      <Banner></Banner>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "10rem",
          marginTop: { xs: "8.5rem" },
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: "white",
            color: "darkgrey",
            fontSize: "1.5rem",
          }}
        >
          AL
        </Avatar>
        <Typography variant="h1">@alth5</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: { xs: "5rem", sm: "10rem" },
        }}
      >
        <Typography variant="h6">Hello, Anna!</Typography>
      </Box>
      <Footer></Footer>
    </Container>
  );
};

export default ProfilePage;
