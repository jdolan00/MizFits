import Form from "./Form";
import {
  CssBaseline,
  Box,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "theme"
import { Footer } from "components/Footer";



const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box textAlign="center">
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          MizFits
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "30%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to MizFits!
        </Typography>
        <Form />
      </Box>
    </Box>
    <Footer></Footer>
    </ThemeProvider>
  );
};

export default LoginPage;