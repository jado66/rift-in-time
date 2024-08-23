import React, { useEffect, useCallback, useState, useRef } from "react";

const UnityWebGLClient = ({ onFullscreen }) => {
  const [unityInstance, setUnityInstance] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(true);
  const canvasRef = useRef();
  const initializationAttemptedRef = useRef(false);

  const loadUnityGame = useCallback(async () => {
    if (unityInstance || initializationAttemptedRef.current) {
      console.log(
        "Unity instance already exists or initialization attempted, skipping"
      );
      return;
    }

    initializationAttemptedRef.current = true;

    if (typeof window.createUnityInstance === "undefined") {
      const script = document.createElement("script");
      script.src = "/unity/WebGl/Build/WebGl.loader.js";
      script.async = true;

      await new Promise((resolve) => {
        script.onload = resolve;
        document.body.appendChild(script);
      });
    }

    if (typeof window.createUnityInstance === "function" && canvasRef.current) {
      try {
        const unityInstance = await window.createUnityInstance(
          canvasRef.current,
          {
            dataUrl: "/unity/WebGl/Build/WebGl.data",
            frameworkUrl: "/unity/WebGl/Build/WebGl.framework.js",
            codeUrl: "/unity/WebGl/Build/WebGl.wasm",
            streamingAssetsUrl: "unity/StreamingAssets",
            companyName: "Your Company Name",
            productName: "Your Product Name",
            productVersion: "1.0",
          },
          (progress) => {
            setLoadingProgress(progress);
            console.log(`Loading progress: ${progress * 100}%`);
          }
        );

        setUnityInstance(unityInstance);
        console.log("Unity content is loaded and ready");
      } catch (error) {
        console.error("Failed to load Unity content:", error);
        initializationAttemptedRef.current = false; // Reset the flag to allow retry
      }
    } else {
      console.error(
        "createUnityInstance is not available or canvas is not ready"
      );
      initializationAttemptedRef.current = false; // Reset the flag to allow retry
    }
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

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
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
    </div>
  );
};

export default UnityWebGLClient;
