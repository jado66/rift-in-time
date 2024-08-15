import React, { useState, useEffect, useRef, useCallback } from "react";
import "./WalkingCharacter.css";

const WalkingCharacter = ({ type, onPositionChange }) => {
  const [walkingState, setWalkingState] = useState("idle");
  const lastScrollTop = useRef(0);
  const timeoutId = useRef(null);
  const characterRef = useRef(null);
  const onPositionChangeRef = useRef(onPositionChange);

  // Update the ref if onPositionChange changes
  useEffect(() => {
    onPositionChangeRef.current = onPositionChange;
  }, [onPositionChange]);

  const getImageSrc = useCallback(() => {
    const armor = type !== "trans" ? type : "";
    switch (walkingState) {
      case "walkingUp":
        return `/characterUp${armor}.png`;
      case "walkingDown":
        return `/characterDown${armor}.png`;
      default:
        return `/characterIdle${armor}.png`;
    }
  }, [type, walkingState]);

  const updatePosition =
    type === "torch" || type === "trans"
      ? useCallback(() => {
          if (characterRef.current) {
            const rect = characterRef.current.getBoundingClientRect();
            onPositionChangeRef.current({
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
            });
          }
        }, [])
      : () => {};

  const handleScroll = useCallback(() => {
    const st = window.scrollY || document.documentElement.scrollTop;

    if (st > lastScrollTop.current) {
      setWalkingState("walkingDown");
    } else if (st < lastScrollTop.current) {
      setWalkingState("walkingUp");
    }

    lastScrollTop.current = st <= 0 ? 0 : st;

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      setWalkingState("idle");
    }, 150);

    updatePosition();
  }, [updatePosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updatePosition);
    updatePosition(); // Initial position update

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePosition);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [handleScroll, updatePosition]);

  const imageSrc = getImageSrc();

  return (
    <div className="character-wrapper" ref={characterRef}>
      <div className={`character ${walkingState}`}>
        <img src={imageSrc} alt={`Character ${walkingState}`} />
      </div>
    </div>
  );
};

export default React.memo(WalkingCharacter);
