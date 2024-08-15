import React, { useState, useEffect, useRef } from "react";
import "./WalkingCharacter.css";

const WalkingCharacter = () => {
  const [walkingState, setWalkingState] = useState("idle");
  const lastScrollTop = useRef(0);
  const timeoutId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  let imageSrc;
  switch (walkingState) {
    case "walkingUp":
      imageSrc = "/characterUp.png";
      break;
    case "walkingDown":
      imageSrc = "/characterDown.png";
      break;
    default:
      imageSrc = "/characterIdle.png";
  }

  return (
    <div className="character-container">
      <div className={`character ${walkingState}`}>
        <img src={imageSrc} alt={`Character ${walkingState}`} />
      </div>
    </div>
  );
};

export default WalkingCharacter;
