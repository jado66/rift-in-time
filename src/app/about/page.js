"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import { GameBackgroundGroundContainer } from "@/components/GameBackGroundContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import SignHeader from "@/components/SignHeader";
import WalkingCharacter from "@/components/WalkingCharacter"; // SimpleCharacter,

const AboutPage = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [transparency, setTransparency] = useState(0);
  const [color, setColor] = useState("#000000");
  const [characterType, setCharacterType] = useState("Trans");

  const interpolateColor = (startHex, endHex, factor) => {
    // Apply a more aggressive non-linear easing function
    const easedFactor = Math.pow(factor, 4); // Quartic easing

    const startRgb = parseInt(startHex.slice(1), 16);
    const endRgb = parseInt(endHex.slice(1), 16);

    const resultRgb =
      (Math.round(
        (1 - easedFactor) * ((startRgb >> 16) & 0xff) +
          easedFactor * ((endRgb >> 16) & 0xff)
      ) <<
        16) |
      (Math.round(
        (1 - easedFactor) * ((startRgb >> 8) & 0xff) +
          easedFactor * ((endRgb >> 8) & 0xff)
      ) <<
        8) |
      Math.round(
        (1 - easedFactor) * (startRgb & 0xff) + easedFactor * (endRgb & 0xff)
      );

    return `#${(resultRgb | (1 << 24)).toString(16).slice(1).toUpperCase()}`;
  };

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    // Start the transition earlier and complete it faster
    const transitionStart = 0.5; // Start at 10% of scroll
    const transitionEnd = 0.6; // End at 40% of scroll

    let factor =
      (scrolled / maxScroll - transitionStart) /
      (transitionEnd - transitionStart);
    factor = Math.max(0, Math.min(1, factor)); // Clamp factor between 0 and 1

    const newTransparency = factor * 0.9;
    const newColor = interpolateColor("#000000", "#ffffff", factor);

    if (factor > 0) {
      setCharacterType("Torch");
    } else {
      setCharacterType("Trans");
    }

    setTransparency(newTransparency);
    setColor(newColor);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handlePositionChange = useCallback((position) => {
    setLightPosition(position);
  }, []);

  return (
    <GameBackgroundGroundContainer
      mainSrc={grassBackgroundSrc}
      borderSrc={waterToGrassSrc}
      borderBackgroundSrc={treeBackground}
      applyMainToEdges
    >
      <Grid container spacing={2} sx={{ pl: 0, paddingY: 8, pb: 25 }}>
        <Grid item xs={2} sm={1.5} md={1} sx={{ p: "0px !important" }}>
          <Box
            sx={{
              p: 0,
              position: "fixed",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <WalkingCharacter
              type={characterType}
              onPositionChange={handlePositionChange}
            />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10.5} md={11} sx={{ pr: 4 }}>
          <Box sx={{ position: "relative", zIndex: 11 }}>
            <Copy matchesMd={matchesMd} color={color} />
          </Box>
        </Grid>
      </Grid>
      <div
        className="darkness-overlay"
        style={{
          "--light-x": `${lightPosition.x}px`,
          "--light-y": `${lightPosition.y}px`,
          "--transparency": `${transparency}`,
          zIndex: 9,
        }}
      />
    </GameBackgroundGroundContainer>
  );
};

export default AboutPage;

const Copy = ({ matchesMd, color }) => {
  return (
    <div style={{ color: color, zIndex: 10 }}>
      <Box my={5}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
            Welcome to the enchanting world of <br />
            "A Rift In Time!"
          </Typography>
        </Box>

        <Typography variant={matchesMd ? "body1" : "body2"} paragraph>
          Step into a mesmerizing 2D universe where adventure and imagination
          intertwine. Brought to life with vibrant pixel art and rich
          storytelling, "A Rift In Time" offers an unforgettable journey through
          time and space.
        </Typography>
      </Box>
      <Box mb={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
            Embark on Your Epic Quest
          </Typography>
        </Box>

        <Typography variant={matchesMd ? "body1" : "body2"} paragraph>
          In this top-down RPG sandbox, you play as a fearless hero navigating a
          dynamic world filled with secrets, treasures, and mysteries waiting to
          be uncovered. Whether you're exploring ancient ruins, dashing through
          lush forests, or navigating bustling villages, every corner of this
          expansive realm holds wonders and challenges.
        </Typography>
      </Box>
      <Box my={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
            Master the Art of Time and Space
          </Typography>
        </Box>

        <Typography variant={matchesMd ? "body1" : "body2"} paragraph>
          At the core of "A Rift In Time" lies the unique ability to manipulate
          the fabric of time. Revisit previous moments in your adventure to be
          "in two places at the same time," enabling you to solve complex
          puzzles, outsmart cunning foes, and confront formidable bosses. Your
          past actions are recorded, allowing for strategic planning and
          creative gameplay.
        </Typography>
      </Box>
      <Box my={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
            {" "}
            Teleport to Diverse Realms
          </Typography>
        </Box>

        <Typography variant={matchesMd ? "body1" : "body2"} paragraph>
          Beyond time manipulation, traverse between stunning realms, each with
          its own distinct aesthetics, characters, and challenges. From mystical
          forests to fiery mountains, every realm is meticulously crafted to
          enrich your journey and test your skills.
        </Typography>
      </Box>
      <Box my={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
            {" "}
            Build, Craft, and Thrive
          </Typography>
        </Box>

        <Typography variant={matchesMd ? "body1" : "body2"} paragraph>
          Harness your creativity by collecting resources, crafting tools, and
          constructing your own sanctuary amidst the wilderness. From humble
          beginnings, build a thriving abode that reflects your style and
          ingenuity. The freedom to shape your environment is boundless, limited
          only by your imagination.
        </Typography>
      </Box>
      <Box my={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
            {" "}
            Day and Night Cycle
          </Typography>
        </Box>

        <Typography variant={matchesMd ? "body1" : "body2"} paragraph>
          Experience the immersive day and night cycles that add depth and
          strategy to your adventure. By day, gather materials, explore new
          territories, and strengthen your defenses. As night falls, brace
          yourself against the myriad of monsters lurking in the dark. To
          survive these nocturnal threats, you'll need to craft powerful
          weapons, build sturdy fortifications, and devise ingenious tactics.
          Only those who can master the balance between daylight preparation and
          nighttime defense will thrive.
        </Typography>
      </Box>
      <Box my={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
            Forge Bonds and Create Memories
          </Typography>
        </Box>

        <Typography variant={matchesMd ? "body1" : "body2"} paragraph>
          Meet a diverse cast of characters, each with their own stories and
          personalities. Forge lasting friendships, engage in heartwarming
          activities, and become an integral part of a community that evolves
          with your decisions. The bonds you create will leave a lasting impact
          on your journey and the world around you.
        </Typography>
      </Box>
      <Box my={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
            {" "}
            Endless Exploration and Discovery
          </Typography>
        </Box>

        <Typography variant={matchesMd ? "body1" : "body2"} paragraph>
          The world of "A Rift In Time" is vast and brimming with opportunities
          for exploration. Unearth hidden dungeons, solve intricate puzzles, and
          battle formidable foes. With countless quests and side adventures,
          there's always something new to discover and experience.
        </Typography>
      </Box>
      <Box my={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
            {" "}
            Be Part of the Journey
          </Typography>
        </Box>

        <Typography variant={matchesMd ? "body1" : "body2"} paragraph>
          This is an alpha build, and we invite you to be a pivotal part of
          shaping the course of our development. Your feedback, insights, and
          suggestions will help us refine and enhance the game, ensuring a
          magical experience for all.
        </Typography>
      </Box>
    </div>
  );
};

const grassBackgroundSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURTq+QWrdSzq7Pjq6PjKOQTq5PuZdsVoAAAAJcEhZcwAADsIAAA7CARUoSoAAAABhSURBVCjPYyAWMKLRyAJMSsKGDAwsDEqKxsIgGiQgApJTUjR0BisCCghDBYyhAs5gGSUVE4gAEUAAzQVYAJNSqCjEHggNFBCFCKiIoglAaaCAqytEAEITCSgNjyHhfQYGAJgEECJ5G9oTAAAAAElFTkSuQmCC')`;
const waterToGrassSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABFUExURSmXUC7KXFDrbCt9SisvNTq+QS1bQ2rdSz51RlV/RzKOQTq7Pjq6PjfCWVbjaWrNYSmWT1jhaDpXQTh3Ry1+NTq5Pi17NEKJdrAAAAAJcEhZcwAADsEAAA7BAbiRa+0AAADnSURBVDhP3ZJJFsMgDEMNZmgJnUvvf9TKQEIgyabLasXwn2w/i0RKExu7L1JKCeCOCAGUuLAG4evrLNxnh1O22AWkB6IzOwDB2mmafIw+ZgB3usCDrrc71yYy4EMBIPlGBeLsABUgNuChATDRsxIAQgwrQJcZmGaLQVIiA69DoCCOXQWGUTMAgo0x7/rWSXoAIEO8F0AmScknOdcmDQp0QPAzgH84OGM+rQIAWCxAboFHIKRQANFf5qFf95iHUT/kYW/dIFoeBmUARJcHmWS9bgCbPLR1H+RhvW5x2OZhWXdpss9Dk7VfoEMVEqSB7b0AAAAASUVORK5CYII=')`;
const treeBackground = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURS7KXCmXUFDrbNv54XUAAAAJcEhZcwAADsEAAA7BAbiRa+0AAABYSURBVCjP7dCBDcAgCATAhwkYgf7+Q4qKGmxH6MfkDERCxDsGdYNsI/TZmqqPC5fQOFHmMmr9mT7bz8jlmFysBUMff8y3cqRL7pkzSRRzF9tm+/L/jxmiAW60C0F7gcyrAAAAAElFTkSuQmCC')`;
