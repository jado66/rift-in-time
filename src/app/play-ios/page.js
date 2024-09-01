import React, { useEffect, useRef, useState } from "react";

const IOSUnityGamePage = () => {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUnityModule = async () => {
      if (typeof window.createUnityInstance === "undefined") {
        const script = document.createElement("script");
        script.src = "/unity/WebGl/Build/WebGl.loader.js";
        script.async = true;
        await new Promise((resolve) => {
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      if (canvasRef.current) {
        try {
          await window.createUnityInstance(
            canvasRef.current,
            {
              dataUrl: "/unity/WebGl/Build/WebGl.data",
              frameworkUrl: "/unity/WebGl/Build/WebGl.framework.js",
              codeUrl: "/unity/WebGl/Build/WebGl.wasm",
              streamingAssetsUrl: "unity/StreamingAssets",
              companyName: "Your Company Name",
              productName: "A Rift In Time",
              productVersion: "1.0",
            },
            (progress) => {
              if (progress === 1) {
                setIsLoading(false);
              }
            }
          );
        } catch (error) {
          console.error("Failed to load Unity content:", error);
          setIsLoading(false);
        }
      }
    };

    loadUnityModule();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            fontSize: "24px",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default IOSUnityGamePage;
