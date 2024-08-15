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
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { GameBackgroundGroundContainer } from "@/components/GameBackGroundContainer";
import WalkingCharacter from "@/components/WalkingCharacter";
import Link from "next/link";
import { Send } from "@mui/icons-material";

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
      <Grid
        container
        spacing={2}
        sx={{ pl: 0, paddingY: 8, pb: 45, pr: { md: 4, xs: 2 } }}
      >
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
    alert(
      "Come back in a couple days and this should work. You can email jd@platinumprogramming.com for questions."
    );
    // Handle newsletter subscription logic here
  };

  const handlePreBuy = () => {
    alert(
      "Come back in a couple weeks and this should work. You can email jd@platinumprogramming.com for questions."
    );
  };
  return (
    <div style={{ color: "black" }}>
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Support Our Development
        </Typography>

        <Typography variant="body1" paragraph>
          Thank you for showing interest in supporting{" "}
          <strong>
            <em>A Rift In Time</em>!
          </strong>{" "}
          Your support is invaluable and helps me, as the sole developer, bring
          this captivating world to life.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box mt={4}>
        <Typography variant="h3" gutterBottom>
          Join Our Newsletter
        </Typography>
        <Typography variant="body1" paragraph>
          Stay connected and informed by joining our newsletter. As a
          subscriber, you'll receive:
        </Typography>

        <List style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <ListItem style={{ display: "list-item" }}>
            <ListItemText primary="The latest news and updates on development progress." />
          </ListItem>
          <ListItem style={{ display: "list-item" }}>
            <ListItemText primary="Exclusive content and behind-the-scenes insights." />
          </ListItem>
          <ListItem style={{ display: "list-item" }}>
            <ListItemText primary="Special offers and early access announcements." />
          </ListItem>
        </List>

        <form onSubmit={handleNewsletterSubscription}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={11} sx={{ m: "auto", mt: 2 }}>
              <TextField
                label="Your Email Address"
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="submit" color="primary">
                        <Send />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Box>

      <Divider sx={{ my: 6 }} />

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

      <Divider sx={{ my: 6 }} />

      <Box mt={6} display="flex" flexDirection="column">
        <Typography variant="h3" gutterBottom>
          Pre-Buy Offer
        </Typography>
        <Typography variant="body1" paragraph>
          Secure your copy of{" "}
          <strong>
            <em>A Rift In Time</em>
          </strong>{" "}
          now by pre-buying at an exclusive price of <strong>$10</strong>!
          Here's what you'll get:
        </Typography>

        <List style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <ListItem style={{ display: "list-item" }}>
            <ListItemText primary="Save on the final price range of $15-20." />
          </ListItem>
          <ListItem style={{ display: "list-item" }}>
            <ListItemText primary="Receive unique, exclusive in-game assets as a token of our gratitude for your early support." />
          </ListItem>
        </List>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handlePreBuy}
          sx={{ m: "auto" }}
        >
          Pre-Buy Now
        </Button>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box mt={6}>
        <Typography variant="h3" gutterBottom>
          Why Your Support Matters
        </Typography>
        <Typography variant="body1" paragraph>
          As the sole developer, my expertise lies in engineering rather than
          art. Your support allows me to:
        </Typography>

        <List style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <ListItem style={{ display: "list-item" }}>
            <ListItemText primary="Hire talented artists to enhance the visual storytelling." />
          </ListItem>
          <ListItem style={{ display: "list-item" }}>
            <ListItemText primary="Purchase premium game assets to enrich the game's ambiance and overall appeal." />
          </ListItem>
        </List>

        <Typography variant="body1" paragraph>
          Every contribution goes directly towards making{" "}
          <strong>
            <em>A Rift In Time</em>
          </strong>{" "}
          an even more immersive and magical experience.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box mt={6}>
        <Typography variant="h3" gutterBottom>
          How to Support Us
        </Typography>

        <List style={{ listStyleType: "disc", paddingLeft: "20px" }}>
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

      <Divider sx={{ my: 6 }} />

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
                  <Link href="mailto:jd@platinumprogramming.co">
                    jd@platinumprogramming.com
                  </Link>
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};
