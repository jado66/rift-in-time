import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

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

  const backgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: mainSrc,
    backgroundRepeat: "repeat",
    backgroundSize: "64px 64px",
    zIndex: -2,
  };

  const borderStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    width: isMobile ? "32px" : "64px",
    backgroundImage: borderSrc,
    backgroundRepeat: "repeat-y",
    backgroundSize: "64px 64px",
    zIndex: -1,
  };

  return (
    <>
      {/* Background */}
      <div style={backgroundStyle} />

      {/* Left Border */}
      <div style={{ ...borderStyle, left: 0 }} />

      {/* Right Border */}
      <div
        style={{
          ...borderStyle,
          right: 0,
          transform: borderSrc2 ? "none" : "scaleX(-1)",
          backgroundImage: borderSrc2 || borderSrc,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </>
  );
};
