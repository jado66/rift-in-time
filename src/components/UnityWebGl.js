import React, { useEffect, useCallback, useState, useRef } from "react";
import { Button } from "@mui/material";
import { Fullscreen, FullscreenExit } from "@mui/icons-material";

const UnityWebGLClient = ({ onFullscreen }) => {
  const [unityInstance, setUnityInstance] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(true);
  const canvasRef = useRef();
  const containerRef = useRef();
  const initializationAttemptedRef = useRef(false);

  const loadUnityGame = useCallback(async () => {
    // ... (existing loadUnityGame logic)
  }, [unityInstance]);

  useEffect(() => {
    loadUnityGame();

    return () => {
      if (unityInstance) {
        unityInstance.Quit();
        setUnityInstance(null);
      }
    };
  }, [loadUnityGame, unityInstance]);

  const handleFullscreenChange = useCallback(() => {
    const fullscreenElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;
    setIsFullscreen(!!fullscreenElement);
    if (onFullscreen) {
      onFullscreen(!!fullscreenElement);
    }
  }, [onFullscreen]);

  const checkOrientation = useCallback(() => {
    setIsLandscape(window.innerWidth > window.innerHeight);
  }, []);

  useEffect(() => {
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);

      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, [handleFullscreenChange, checkOrientation]);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    } else {
      const element = containerRef.current;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        // Fallback for iOS
        element.style.position = "fixed";
        element.style.top = "0";
        element.style.left = "0";
        element.style.width = "100%";
        element.style.height = "100%";
        element.style.zIndex = "9999";
        setIsFullscreen(true);
      }
    }
  }, [isFullscreen]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <canvas
        id="unity-canvas"
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      {loadingProgress < 1 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          Loading: {Math.round(loadingProgress * 100)}%
        </div>
      )}
      {!isLandscape && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 1)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            zIndex: 1000,
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            Please Turn Your Device Sideways
          </h2>
          <p>This game is best experienced in landscape mode.</p>
          <div style={{ fontSize: "48px", marginTop: "20px" }}>📱↔️</div>
        </div>
      )}
      <Button
        variant="contained"
        onClick={toggleFullscreen}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 1001,
        }}
      >
        {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
      </Button>
    </div>
  );
};

export default UnityWebGLClient;
