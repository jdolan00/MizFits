import React, { useState } from 'react';
import { CssBaseline, Grid, Box, Typography, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CardBase } from "components/CardBase";
import { Footer } from "components/Footer";
import { theme } from "theme";
import './workoutexamples.css';

export default function Album() {
  const [selectedRoutine, setSelectedRoutine] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
      <Box sx={{ pt: 8 }}>
          <Container>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Where to begin?
            </Typography>
            <Typography variant="h5" align="center" paragraph noWrap>
              Here are six example schedules to help you get started
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
              subtext="Select your workout focus."
              button1="ThreeCardio"
              button2="ThreeWeight"
              setSelectedRoutine={setSelectedRoutine}
            ></CardBase>
            <CardBase
              img="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1600"
              days="4 days a week"
              subtext="Select your workout focus."
              button1="FourCardio"
              button2="FourWeight"
              setSelectedRoutine={setSelectedRoutine}
            ></CardBase>
            <CardBase
              img="https://images.pexels.com/photos/3927387/pexels-photo-3927387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              days="5 days a week"
              subtext="Select your workout focus."
              button1="FiveCardio"
              button2="FiveWeight"
              setSelectedRoutine={setSelectedRoutine}
            ></CardBase>
          </Grid>
          <div dangerouslySetInnerHTML={{ __html: selectedRoutine }}></div>
        </Container>
        <div style={{ height: '80px' }}></div>
      </main>
      <Footer></Footer>
    </ThemeProvider>
  );
}
