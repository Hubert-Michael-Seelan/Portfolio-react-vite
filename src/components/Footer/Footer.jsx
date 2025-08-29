// src/components/Footer/Footer.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const bg =
    theme.palette.mode === "dark"
      ? theme.palette.background.paper // darker footer
      : theme.palette.primary.main; // blue footer in light mode

  const color = theme.palette.getContrastText(bg);
  return (
    <Box
      sx={{
        py: 2,
        bgcolor: bg,
        color,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
