import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Archivo", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Archivo", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Archivo", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Archivo", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Archivo", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Archivo", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Archivo", "sans-serif"].join(","),
        fontSize: 14,
      },
      subtitle1: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1,
      },
      body1: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.2,
      },
      body2: {
        fontWeight: 400,
        fontSize: "0.8rem",
        lineHeight: 1,
      },
      caption: {
        fontWeight: 400,
        fontSize: "0.8rem",
        lineHeight: 1,
      },
    },
  };
};

export const desktopNavstyles = {
  navbar: {
    backgroundColor: "#FEDD69",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px 10px",

  },
  icon: {
    color: "black",
    fontSize: "60px",
  },
  navbarList: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navbarItem: {
    margin: "25px 0",
  },
  navbarLink: {
    color: "black",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

// Styles for mobile screens
export const mobileNavstyles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FEDD69",
    padding: "10px 20px",
    height: "50px",
  },
  navbarList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  navbarItem: {
    margin: "0 10px",
  },
  navbarLink: {
    textDecoration: "none",
    color: "#333",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "5px",
  },
};

