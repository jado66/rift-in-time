"use client";
import React, { useState, useCallback, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  Card,
  Divider,
  Button,
} from "@mui/material";
import { GameBackgroundGroundContainer } from "@/components/GameBackGroundContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import WalkingCharacter from "@/components/WalkingCharacter";
import { Fullscreen } from "@mui/icons-material";
import dynamic from "next/dynamic";
import MainLayout from "./mainLayout";

const UnityWebGL = dynamic(() => import("@/components/UnityWebGl"), {
  ssr: false,
  loading: () => <p>Loading Unity WebGL...</p>,
});

const HomePage = () => {
  const theme = useTheme();
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const [iframeActive, setIframeActive] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handlePositionChange = useCallback((position) => {
    setLightPosition(position);
  }, []);

  const handleIframeActivation = useCallback(() => {
    setIframeActive(true);
  }, []);

  return (
    <MainLayout>
      <GameBackgroundGroundContainer
        bgColor="#000"
        mainSrc={mainSrc}
        borderSrc={borderSrc}
      >
        <Grid container spacing={2} sx={{ pl: 0, paddingY: 8, pb: 45 }}>
          <Grid item xs={2} sm={1.5} md={1} sx={{ p: "0px !important" }}>
            <Box
              sx={{
                p: 0,
                position: "fixed",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <WalkingCharacter
                type="Torch"
                onPositionChange={handlePositionChange}
              />
            </Box>
          </Grid>
          <Grid item xs={10} sm={10.5} md={11} sx={{ pr: 4 }}>
            <Box sx={{ position: "relative", zIndex: 11 }}>
              <Copy
                matchesMd={matchesMd}
                color="white"
                iframeActive={iframeActive}
                handleIframeActivation={handleIframeActivation}
                isSmallScreen={isSmallScreen}
              />
            </Box>
          </Grid>
        </Grid>
        <div
          className="darkness-overlay"
          style={{
            "--light-x": `${lightPosition.x}px`,
            "--light-y": `${lightPosition.y}px`,
            "--transparency": `.9`,
            zIndex: 9,
          }}
        />
      </GameBackgroundGroundContainer>
    </MainLayout>
  );
};

const Copy = ({ iframeActive, handleIframeActivation, isSmallScreen }) => {
  const [requestFullscreen, setRequestFullscreen] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleRequestFullscreen = useCallback((requestFullscreenFunc) => {
    setRequestFullscreen(() => requestFullscreenFunc);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (requestFullscreen) {
      requestFullscreen();
    }
  }, [requestFullscreen]);

  const handleLoaded = useCallback(() => {
    setIsLoaded(true);
    handleIframeActivation();
  }, [handleIframeActivation]);

  const updateLoadingProgress = useCallback((progress) => {
    setLoadingProgress(progress);
  }, []);

  return (
    <div style={{ color: "white" }}>
      {/* ... (previous content remains the same) */}

      <Box my={4} sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" gutterBottom>
          Play <em>A Rift In Time</em> - Version Alpha 1.0
        </Typography>

        <Card
          sx={{
            margin: "auto",
            minHeight: isSmallScreen ? "200px" : "400px",
            width: isSmallScreen ? "100%" : "960px",
            backgroundColor: "darkgray",
            position: "relative",
          }}
        >
          {!iframeActive && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: 1,
              }}
            >
              <Button
                variant="contained"
                onClick={handleIframeActivation}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": { backgroundColor: "lightgray" },
                }}
              >
                Click to Activate Game
              </Button>
            </Box>
          )}
          {iframeActive && (
            <UnityWebGL
              onLoaded={handleLoaded}
              onRequestFullscreen={handleRequestFullscreen}
              onLoadingProgress={updateLoadingProgress}
            />
          )}
        </Card>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mx: "auto",
            backgroundColor: "white",
            color: "black",
            "&:hover": { backgroundColor: "lightgray" },
          }}
          onClick={toggleFullscreen}
          disabled={!iframeActive || !isLoaded}
        >
          <Fullscreen sx={{ mr: 1 }} />
          {isLoaded
            ? "Make Fullscreen"
            : `Loading: ${Math.round(loadingProgress * 100)}%`}
        </Button>
      </Box>
    </div>
  );
};

export default HomePage;

const mainSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURXlYT1Y6P7mgiOEAAAAJcEhZcwAADsIAAA7CARUoSoAAAABYSURBVCjP7dDREcAgCAPQZIOw/7IFJNTrDP3AJ8qBJ0BQotbcfEK1vkKRUfk4lSELBMTKbJXM9VE4s2zXdrsVbm3VwXWacfX5bdQb1oQ10brL+v/H/R/CA1aACAm7J0KMAAAAAElFTkSuQmCC')`;
const borderSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAPUExURQAAAFY6P5R4XHlYTzAsNBgbInsAAAAJcEhZcwAADsEAAA7BAbiRa+0AAACLSURBVCjP7ZDRDQMhDENBYoHUE5SbIPUE17v9Z6oTQtUhygdSTPwc0nT6QRqdDjhCaI95EE5KZAqnqUilhHEhTNTtKfQApMMWA3wRJtNmvOczEdjCMEOUX0a70h9Rq6NZJia6UuRGNizLmOeGFuNGNOi9UrppophEs9RgWYizftvFD0RQ+N/H7z7AD56tO8MGT09uAAAAAElFTkSuQmCC')`;
