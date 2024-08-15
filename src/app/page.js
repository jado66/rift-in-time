"use client";
import React, { useCallback, useState } from "react";
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
import { ScrollYProvider, useScrollY } from "@/components/ScrollYContext";

const HomePage = () => {
  const theme = useTheme();
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const handlePositionChange = useCallback((position) => {
    setLightPosition(position);
  }, []);
  const mainSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURXlYT1Y6P7mgiOEAAAAJcEhZcwAADsIAAA7CARUoSoAAAABYSURBVCjP7dDREcAgCAPQZIOw/7IFJNTrDP3AJ8qBJ0BQotbcfEK1vkKRUfk4lSELBMTKbJXM9VE4s2zXdrsVbm3VwXWacfX5bdQb1oQ10brL+v/H/R/CA1aACAm7J0KMAAAAAElFTkSuQmCC')`;
  const borderSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAPUExURQAAAFY6P5R4XHlYTzAsNBgbInsAAAAJcEhZcwAADsEAAA7BAbiRa+0AAACLSURBVCjP7ZDRDQMhDENBYoHUE5SbIPUE17v9Z6oTQtUhygdSTPwc0nT6QRqdDjhCaI95EE5KZAqnqUilhHEhTNTtKfQApMMWA3wRJtNmvOczEdjCMEOUX0a70h9Rq6NZJia6UuRGNizLmOeGFuNGNOi9UrppophEs9RgWYizftvFD0RQ+N/H7z7AD56tO8MGT09uAAAAAElFTkSuQmCC')`;
  return (
    <GameBackgroundGroundContainer
      bgColor="#000"
      mainSrc={mainSrc}
      borderSrc={borderSrc}
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
              type="Torch"
              onPositionChange={handlePositionChange}
            />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10.5} md={11} sx={{ pr: 4 }}>
          <Box sx={{ position: "relative", zIndex: 11 }}>
            <Copy matchesMd={matchesMd} color="white" />
          </Box>
        </Grid>
      </Grid>
      <div
        className="darkness-overlay"
        style={{
          "--light-x": `${lightPosition.x}px`,
          "--light-y": `${lightPosition.y}px`,
          "--transparency": `.9`,
          zIndex: 9,
        }}
      />
    </GameBackgroundGroundContainer>
  );
};

const Copy = () => {
  return (
    <div style={{ color: "white" }}>
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Welcome to the enchanting world of "A Rift In Time!"
        </Typography>
        <Typography variant="body1" paragraph>
          Step into a mesmerizing 2D universe where adventure and imagination
          intertwine. Brought to life with vibrant pixel art and rich
          storytelling, "A Rift In Time" offers an unforgettable journey through
          time and space.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Embark on Your Epic Quest
        </Typography>
        <Typography variant="body1" paragraph>
          In this top-down RPG sandbox, you play as a fearless hero navigating a
          dynamic world filled with secrets, treasures, and mysteries waiting to
          be uncovered. Whether you're exploring ancient ruins, dashing through
          lush forests, or navigating bustling villages, every corner of this
          expansive realm holds wonders and challenges.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Master the Art of Time and Space
        </Typography>
        <Typography variant="body1" paragraph>
          At the core of "A Rift In Time" lies the unique ability to manipulate
          the fabric of time. Revisit previous moments in your adventure to be
          "in two places at the same time," enabling you to solve complex
          puzzles, outsmart cunning foes, and confront formidable bosses. Your
          past actions are recorded, allowing for strategic planning and
          creative gameplay.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Teleport to Diverse Realms
        </Typography>
        <Typography variant="body1" paragraph>
          Beyond time manipulation, traverse between stunning realms, each with
          its own distinct aesthetics, characters, and challenges. From mystical
          forests to fiery mountains, every realm is meticulously crafted to
          enrich your journey and test your skills.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Build, Craft, and Thrive
        </Typography>
        <Typography variant="body1" paragraph>
          Harness your creativity by collecting resources, crafting tools, and
          constructing your own sanctuary amidst the wilderness. From humble
          beginnings, build a thriving abode that reflects your style and
          ingenuity. The freedom to shape your environment is boundless, limited
          only by your imagination.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Day and Night Cycle
        </Typography>
        <Typography variant="body1" paragraph>
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
        <Typography variant="h4" gutterBottom>
          Forge Bonds and Create Memories
        </Typography>
        <Typography variant="body1" paragraph>
          Meet a diverse cast of characters, each with their own stories and
          personalities. Forge lasting friendships, engage in heartwarming
          activities, and become an integral part of a community that evolves
          with your decisions. The bonds you create will leave a lasting impact
          on your journey and the world around you.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Endless Exploration and Discovery
        </Typography>
        <Typography variant="body1" paragraph>
          The world of "A Rift In Time" is vast and brimming with opportunities
          for exploration. Unearth hidden dungeons, solve intricate puzzles, and
          battle formidable foes. With countless quests and side adventures,
          there's always something new to discover and experience.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Be Part of the Journey
        </Typography>
        <Typography variant="body1" paragraph>
          This is an alpha build, and we invite you to be a pivotal part of
          shaping the course of our development. Your feedback, insights, and
          suggestions will help us refine and enhance the game, ensuring a
          magical experience for all.
        </Typography>
      </Box>
    </div>
  );
};

export default HomePage;
