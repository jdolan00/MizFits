import * as React from "react";
import {
  AppBar,
  Button,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Box,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
            <Grid item key={Card} xs={3} sm={6} md={4}>
              <Card sx={{ borderRadius: "16px" }}>
                <CardMedia
                  component="img"
                  image="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    3 days a week
                  </Typography>
                  <Typography>
                    Please select which workout focus you would like to follow.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Cardio</Button>
                  <Button size="small">Weightlifting</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={Card} xs={3} sm={6} md={4}>
              <Card sx={{ borderRadius: "16px" }}>
                <CardMedia
                  component="img"
                  image="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1600"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    4 days a week
                  </Typography>
                  <Typography>
                    Please select which workout focus you would like to follow.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Cardio</Button>
                  <Button size="small">Weightlifting</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={Card} xs={3} sm={6} md={4}>
              <Card sx={{ borderRadius: "16px" }}>
                <CardMedia
                  component="img"
                  image="https://images.pexels.com/photos/39671/physiotherapy-weight-training-dumbbell-exercise-balls-39671.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Build your own
                  </Typography>
                  <Typography>Skip the recommended workouts</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Create</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Footer Here
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
