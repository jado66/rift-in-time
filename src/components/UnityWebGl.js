import React, { useEffect, useRef, useState } from "react";

const UnityWebGLClient = ({ onFullscreen }) => {
  const canvasRef = useRef(null);
  const [unityInstance, setUnityInstance] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadUnityGame = async () => {
      if (typeof window.createUnityInstance === "undefined") {
        const script = document.createElement("script");
        script.src = "/unity/WebGl/Build/WebGl.loader.js";
        script.async = true;

        await new Promise((resolve) => {
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      if (
        typeof window.createUnityInstance === "function" &&
        canvasRef.current
      ) {
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
        }
      } else {
        console.error(
          "createUnityInstance is not available or canvas is not ready"
        );
      }
    };

    loadUnityGame();

    return () => {
      if (unityInstance) {
        unityInstance.Quit();
      }
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (onFullscreen) {
        onFullscreen(!!document.fullscreenElement);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [onFullscreen]);

  const toggleFullscreen = () => {
    const canvas = canvasRef.current;
    if (!document.fullscreenElement) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
      } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
      } else if (canvas.msRequestFullscreen) {
        canvas.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div>
      <canvas
        id="unity-canvas"
        ref={canvasRef}
        style={{ width: "960px", height: "600px" }}
      />
      {loadingProgress < 1 && (
        <p>Loading: {Math.round(loadingProgress * 100)}%</p>
      )}
    </div>
  );
};

export default UnityWebGLClient;
