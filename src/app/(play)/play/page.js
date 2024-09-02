"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
const UnityWebGL = dynamic(() => import("@/components/UnityWebGl"), {
  ssr: false,
  loading: () => <p>Loading Unity WebGL...</p>,
});

const IOSUnityGamePage = () => {
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
      <UnityWebGL />
    </div>
  );
};

export default IOSUnityGamePage;
