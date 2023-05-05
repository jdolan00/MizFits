import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://www.mizfit.org/">
        Mizfits
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 1,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "1px solid black"
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">MizFits</Typography>
        </Box>
        <Copyright></Copyright>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="subtitle1">Contact</Typography>
        <Typography variant="body2">mizfitdevs@gmail.com</Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="subtitle1">Follow The Project</Typography>
        <a href="https://github.com/jdolan00/MizFits/">
          <Typography variant="body2">
            The Mizfits GitHub
          </Typography>
        </a>
      </Box>
    </Box>
  );
}
