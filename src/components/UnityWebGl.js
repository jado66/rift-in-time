import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityWebGL = ({ onLoaded, onRequestFullscreen, onLoadingProgress }) => {
  const [isLandscape, setIsLandscape] = useState(true);

  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl: "/unity/WebGl/Build/WebGl.loader.js",
      dataUrl: "/unity/WebGl/Build/WebGl.data",
      frameworkUrl: "/unity/WebGl/Build/WebGl.framework.js",
      codeUrl: "/unity/WebGl/Build/WebGl.wasm",
    });

  useEffect(() => {
    if (isLoaded) {
      onLoaded();
    }
  }, [isLoaded, onLoaded]);

  useEffect(() => {
    onLoadingProgress(loadingProgression);
  }, [loadingProgression, onLoadingProgress]);

  useEffect(() => {
    const handleRequestFullscreen = () => {
      requestFullscreen(true);
    };

    if (onRequestFullscreen) {
      onRequestFullscreen(handleRequestFullscreen);
    }
  }, [requestFullscreen, onRequestFullscreen]);

  const checkOrientation = () => {
    setIsLandscape(window.innerWidth > window.innerHeight);
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
        devicePixelRatio={window.devicePixelRatio}
      />
      {!isLoaded && (
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
          Loading: {Math.round(loadingProgression * 100)}%
        </div>
      )}
      {!isLandscape && isLoaded && (
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

export default UnityWebGL;
