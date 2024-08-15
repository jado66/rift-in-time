import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export const GameBackgroundGroundContainer = ({
  children,
  bgColor,
  mainSrc,
  borderSrc,
  borderSrc2,
  borderBackgroundSrc,
  applyMainToEdges,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const mainBackgroundStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: borderBackgroundSrc,
    backgroundRepeat: "repeat",
    backgroundSize: "64px 64px",
    zIndex: -2,
  };

  const backgroundStyle = {
    maxWidth: "lg",
    height: "100vh",
    flex: 1,
    mx: "auto",
    width: "64px",

    backgroundImage: mainSrc,
    backgroundRepeat: "repeat",
    backgroundSize: "64px 64px",
    zIndex: -2,
  };

  const borderStyle = {
    width: isMobile ? "32px" : "64px",
    backgroundImage: borderSrc,
    backgroundRepeat: "repeat-y",
    backgroundSize: "64px 64px",
    zIndex: -1,
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: !borderBackgroundSrc ? "calc(100vw)" : "calc(100vw - 64px)",
          ...(borderBackgroundSrc ? mainBackgroundStyle : { bgcolor: bgColor }),
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "lg",
            mx: "auto",
          }}
        >
          {/* Left Border */}
          <Box sx={{ ...borderStyle, left: 0 }} />
          {/* Background */}
          <Box sx={backgroundStyle} />

          {/* Right Border */}
          <Box
            sx={{
              ...borderStyle,
              right: 0,
              transform: borderSrc2 ? "none" : "scaleX(-1)",
              backgroundImage: borderSrc2 || borderSrc,
            }}
          />
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          maxWidth: "lg",
          mx: "auto",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </>
  );
};
