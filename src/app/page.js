"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import dynamic from "next/dynamic";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
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
  const canvasRef = useRef(null);
  const unityLoadedRef = useRef(false);

  const handlePositionChange = useCallback((position) => {
    setLightPosition(position);
  }, []);

  const handleIframeActivation = useCallback(() => {
    if (!unityLoadedRef.current) {
      setIframeActive(true);
      unityLoadedRef.current = true;
    }
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
                canvasRef={canvasRef}
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

const Copy = ({
  iframeActive,
  handleIframeActivation,
  isSmallScreen,
  canvasRef,
}) => {
  const handle = useFullScreenHandle();
  const [isSupposedlyFullscreen, setSupposedlyFullscreen] = useState(false);

  const setFullscreen = () => {
    setSupposedlyFullscreen(true);
    handle.enter;
  };

  return (
    <div style={{ color: "white" }}>
      {/* ... (previous content remains the same) */}
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Welcome to the <em>A Rift In Time</em>!
        </Typography>
        <Typography variant="body1" paragraph>
          A captivating 2D top-down RPG sandbox where vibrant pixel art and rich
          storytelling intertwine for an unforgettable journey through time and
          various worlds. As a fearless hero, navigate dynamic realms filled
          with secrets, treasures, and mysteries, mastering unique time
          manipulation abilities to solve puzzles and outsmart foes. Traverse
          diverse, meticulously crafted realms, gather resources, craft tools,
          build sanctuaries, and experience immersive day-night cycles with
          strategic gameplay. Forge lasting bonds with a diverse cast, explore
          vast worlds brimming with quests, and help shape the game's future
          with your invaluable alpha build feedback.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "white" }} />
      <Box my={4} sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" gutterBottom>
          Play <em>A Rift In Time</em> - Version Alpha 1.0
        </Typography>

        <Card
          ref={canvasRef}
          sx={{
            margin: "auto",
            minHeight: isSmallScreen ? "200px" : "400px",
            width: isSmallScreen ? "100%" : "960px",
            backgroundColor: "darkgray",
            position: "relative",
          }}
        >
          {!iframeActive && (
            <FullScreen handle={handle}>
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
            </FullScreen>
          )}
          {iframeActive && (
            <FullScreen handle={handle}>
              <UnityWebGL canvasRef={canvasRef} />
            </FullScreen>
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
          onClick={setFullscreen}
          disabled={!canvasRef.current}
        >
          <Fullscreen sx={{ mr: 1 }} />
          Make Fullscreen
        </Button>
        {isSupposedlyFullscreen && (
          <>
            <Typography variant="h6">
              Not Fullscreen? Are you on an Iphone?
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                mx: "auto",
                backgroundColor: "white",
                color: "black",
                "&:hover": { backgroundColor: "lightgray" },
              }}
              href="/play-ios"
              disabled={!canvasRef.current}
            >
              Click here to play on Iphone
            </Button>
          </>
        )}
      </Box>
    </div>
  );
};

export default HomePage;

const mainSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURXlYT1Y6P7mgiOEAAAAJcEhZcwAADsIAAA7CARUoSoAAAABYSURBVCjP7dDREcAgCAPQZIOw/7IFJNTrDP3AJ8qBJ0BQotbcfEK1vkKRUfk4lSELBMTKbJXM9VE4s2zXdrsVbm3VwXWacfX5bdQb1oQ10brL+v/H/R/CA1aACAm7J0KMAAAAAElFTkSuQmCC')`;
const borderSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAPUExURQAAAFY6P5R4XHlYTzAsNBgbInsAAAAJcEhZcwAADsEAAA7BAbiRa+0AAACLSURBVCjP7ZDRDQMhDENBYoHUE5SbIPUE17v9Z6oTQtUhygdSTPwc0nT6QRqdDjhCaI95EE5KZAqnqUilhHEhTNTtKfQApMMWA3wRJtNmvOczEdjCMEOUX0a70h9Rq6NZJia6UuRGNizLmOeGFuNGNOi9UrppophEs9RgWYizftvFD0RQ+N/H7z7AD56tO8MGT09uAAAAAElFTkSuQmCC')`;
