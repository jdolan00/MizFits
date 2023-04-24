import React from "react";
import { Typography } from "@mui/material";
import { colors } from "colors";

const defaultColor = colors.darkGray;

export const Paragraph = ({ style, children, ...props }) => {
  return (
    <Typography variant="body1" color={defaultColor} {...style} {...props}>
      {children}
    </Typography>
  );
};

export const Span = ({ style, children, ...props }) => {
  return (
    <Typography variant="body2" color={defaultColor} {...style} {...props}>
      {children}
    </Typography>
  );
};

export const Italics = ({ style, children, ...props }) => {
  return (
    <Typography
      variant="body2"
      color={defaultColor}
      style={{ fontSize: "1em", fontStyle: "italic" }}
      {...style}
      {...props}
    >
      {children}
    </Typography>
  );
};

export const MainHeading = ({ style, children, ...props }) => {
  return (
    <Typography variant="h1" color={defaultColor} {...style} {...props}>
      {children}
    </Typography>
  );
};