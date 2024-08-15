"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@mui/material";
import { GameBackgroundGroundContainer } from "@/components/GameBackGroundContainer";
import WalkingCharacter from "@/components/WalkingCharacter";
import Link from "next/link";

const mainBackgroundSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAIAAADJUWIXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAXSURBVBhXY/z3/z8DEmCC0jCAn8/AAAC6RwME3Di+XgAAAABJRU5ErkJggg==')`;

const borderSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURcLg+d/3+v7//////4dDHMcAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAgSURBVCjPYwADIWNjIyUIwC7AqEQDgUFr7Wh4QAWUlAArXzRVG+icgQAAAABJRU5ErkJggg==')`;

const Support = () => {
  const theme = useTheme();

  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <GameBackgroundGroundContainer
      bgColor="#C2E0F9"
      mainSrc={mainBackgroundSrc}
      borderSrc={borderSrc}
    >
      <Grid container spacing={2} sx={{ pl: 0, paddingY: 8 }}>
        <Grid item xs={2} sm={1.5} md={1} sx={{ p: "0px !important" }}>
          {/* Walking character */}
          <Box
            sx={{
              p: 0,
              position: "fixed",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <WalkingCharacter type="Ice" />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10.5} md={11} sx={{ pr: 4 }}>
          <Copy matchesMd={matchesMd} />
        </Grid>
      </Grid>
    </GameBackgroundGroundContainer>
  );
};
export default Support;

const Copy = () => {
  const handleNewsletterSubscription = (event) => {
    event.preventDefault();
    // Handle newsletter subscription logic here
  };

  const handlePreBuy = () => {
    // Handle pre-buy logic here
  };
  return (
    <div style={{ color: "black" }}>
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Support "A Rift In Time"
        </Typography>

        <Typography variant="body1" paragraph>
          Thank you for showing interest in supporting{" "}
          <strong>"A Rift In Time!"</strong> Your support is invaluable and
          helps me, as the sole developer, bring this captivating world to life.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h3" gutterBottom>
          Join Our Newsletter
        </Typography>
        <Typography variant="body1" paragraph>
          Stay connected and informed by joining our newsletter. As a
          subscriber, you'll receive:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="The latest news and updates on development progress." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Exclusive content and behind-the-scenes insights." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Special offers and early access announcements." />
          </ListItem>
        </List>

        <form onSubmit={handleNewsletterSubscription}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <TextField label="Email Address" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Box mt={6}>
        <Typography variant="h3" gutterBottom>
          Alpha Release & Free Demo
        </Typography>
        <Typography variant="body1" paragraph>
          We're thrilled to announce that this alpha release will transform into
          a game demo that will remain free to play. Test the game, give us your
          feedback, and help shape the future of{" "}
          <strong>"A Rift In Time."</strong> Your input during this phase is
          crucial for refining the final experience.
        </Typography>
      </Box>

      <Box mt={6}>
        <Typography variant="h3" gutterBottom>
          Pre-Buy Offer
        </Typography>
        <Typography variant="body1" paragraph>
          Secure your copy of <strong>"A Rift In Time"</strong> now by
          pre-buying at an exclusive price of <strong>$10</strong>! Here's what
          you'll get:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Save on the final price range of $15-20." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Receive unique, exclusive in-game assets as a token of our gratitude for your early support." />
          </ListItem>
        </List>

        <Button variant="contained" color="primary" onClick={handlePreBuy}>
          Pre-Buy Now
        </Button>
      </Box>

      <Box mt={6}>
        <Typography variant="h3" gutterBottom>
          Why Your Support Matters
        </Typography>
        <Typography variant="body1" paragraph>
          As the sole developer, my expertise lies in engineering rather than
          art. Your support allows me to:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Hire talented artists to enhance the visual storytelling." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Purchase premium game assets to enrich the game's ambiance and overall appeal." />
          </ListItem>
        </List>

        <Typography variant="body1" paragraph>
          Every contribution goes directly towards making{" "}
          <strong>"A Rift In Time"</strong> an even more immersive and magical
          experience.
        </Typography>
      </Box>

      <Box mt={6}>
        <Typography variant="h3" gutterBottom>
          How to Support Us
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary={`Join Our Community: Engage with us on social media and join discussions on platforms like Discord to share your thoughts and ideas.`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Spread the Word: Tell your friends and family about "A Rift In Time." Every mention helps us grow.`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Provide Feedback: Play the alpha build and leave us feedback. Your insights are essential for our improvement.`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Make a Donation: If you wish to provide additional support, consider making a donation. Every bit helps us move closer to our vision.`}
            />
          </ListItem>
        </List>
      </Box>

      <Box mt={6}>
        <Typography variant="h3" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          For any questions, suggestions, or if you just want to chat about the
          game, feel free to reach out through:
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary={
                <>
                  <strong>Email:</strong>{" "}
                  <Link href="mailto:developer@example.com">
                    developer@example.com
                  </Link>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  <strong>Twitter:</strong>{" "}
                  <Link href="https://twitter.com/ARiftInTimeGame">
                    @ARiftInTimeGame
                  </Link>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  <strong>Discord:</strong>{" "}
                  <Link href="#">Join our Community</Link>
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};
