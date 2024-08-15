"use client";
import { createContext, useState, useEffect, useContext } from "react";

// Create a context for the scroll position
export const ScrollYContext = createContext();

export const ScrollYProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollYContext.Provider value={{ scrollY }}>
      {children}
    </ScrollYContext.Provider>
  );
};

const useScrollY = () => {
  const context = useContext(ScrollYContext);

  if (context === undefined) {
    throw new Error("useScrollY must be used within a ScrollYProvider");
  }

  return context;
};

export { useScrollY };
