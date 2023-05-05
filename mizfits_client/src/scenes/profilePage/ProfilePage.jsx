import {
  Avatar,
  Box,
  Container,
  createTheme,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
  CssBaseline,
} from "@mui/material";
import { colors } from "../../colors";
import { Footer } from "components/Footer";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HistoryIcon from "@mui/icons-material/History";
import { Paragraph } from "typography";
import { MainHeading } from "typography";
import { ThemeProvider } from "@mui/material/styles";
import UserDetails from "components/UserDetails";


const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(90deg, #FE6969, #000000 )`,
        },
      },
    },
  },
});

const ProfilePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        {/* <Banner></Banner> */}

        <UserDetails render={(user) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                zIndex: 999,
                bgcolor: colors.pinkRed,
                padding: "2rem",
                borderRadius: "1rem",
                margin: "3rem",
              }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "white",
                  color: "darkgrey",
                  fontSize: "1.5rem",
                  margin: "1rem",
                }}
              >
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </Avatar>
              <Box
                sx={{
                  bgcolor: "lightYellow",
                  padding: ".5rem",
                  borderRadius: "1rem",
                }}
              >
                <Paragraph variant="body2" color="black">
                  {user.email.split("@")[0]}
                </Paragraph>
              </Box>
              <Box
                sx={{
                  margin: "1rem",
                }}
              >
                <MainHeading variant="h5" color="white">
                  {user.firstName} {user.lastName}
                </MainHeading>
              </Box>
            </Box>
          )}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            margin: "2rem",
          }}
        >
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Account Settings" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Exercise Log Archive" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ContactPageIcon />
                </ListItemIcon>
                <ListItemText primary="Contact MizFits" />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
          {/* <Typography variant="h6" color="colors.darkGray" margin="1rem">
            Recent Posts
          </Typography> */}
          {/* list of posts */}
        </Box>
        <Footer></Footer>
      </Container>
    </ThemeProvider>
  );
};

export default ProfilePage;
