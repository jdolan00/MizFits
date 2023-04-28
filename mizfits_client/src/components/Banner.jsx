import { Box } from "@mui/material";
import { colors } from "../colors";

export function Banner() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "25%",
        zIndex: 0,
        backgroundColor: colors.pinkRed,
      }}
    ></Box>
  );
}
