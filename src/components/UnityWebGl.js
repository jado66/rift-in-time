import React, { useEffect, useRef } from "react";

const UnityWebGL = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "unity/Build/Build/UnityLoader.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.UnityLoader.instantiate(
        "unityContainer",
        "/unity/Build/Build/your_build.json",
        {
          onProgress: UnityProgress,
          Module: {
            onRuntimeInitialized: () => {
              // Unity content is loaded and ready
            },
          },
        }
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="unityContainer"
      ref={canvasRef}
      style={{ width: "960px", height: "600px" }}
    />
  );
};

export default UnityWebGL;
