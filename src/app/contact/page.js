"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { GameBackgroundGroundContainer } from "@/components/GameBackGroundContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import WalkingCharacter from "@/components/WalkingCharacter";
import { ExpandMore } from "@mui/icons-material";
import useSendRequestForm from "@/hooks/useSendRequestForm";

const mainBackgroundSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURe7Xjvzmm2xdNW4AAAAJcEhZcwAADsIAAA7CARUoSoAAAABiSURBVCjP7ZCBDQAhDALrBmX/Zb9QMA7xifEqVkSrgDpAX87cVpe9MkIJ3A9HYjFLcwR64ZI2rC7ZqCtDnZypQ/U1M4RKdtZB5EllMCvjKRnKDsWkdgj1SPixSvr/x/MfqA/DHhWJyZpSdgAAAABJRU5ErkJggg==')`;

const borderSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAPUExURVGv66WJWvzmm+7Xjo3h/ypV5gwAAAAJcEhZcwAADsEAAA7BAbiRa+0AAABzSURBVCjP7ZDREcAgCEPrXSewG8AGZv/dSgJoh6g/ykNC4NKZ5jDDMvMEjyJHUMUjXs503AkiT8B/BSIEgTeIENQ0HJAkwT1VoNYNXJLtY9AD264DpMDWG1DhAJTCx3oqoJzek2OxAOjxNex2+u+j9mF4AZCNNsuISVGDAAAAAElFTkSuQmCC')`;

const ContactPage = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { loading, error, sendRequestFormByEmail } = useSendRequestForm();

  const [expanded, setExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitTime, setSubmitTime] = useState(0);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsSubmitted(false); // Reset submission state when form changes
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if the form was submitted in the last 30 seconds
    if (Date.now() - submitTime < 30000) {
      toast.warning("Please wait before submitting again.");
      return;
    }

    // Prevent submission if the form has already been successfully submitted
    if (isSubmitted) {
      toast.warning("This form has already been submitted.");
      return;
    }

    const success = await sendRequestFormByEmail(formData);
    setSubmitTime(Date.now());

    if (success) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
    }
  };

  return (
    <GameBackgroundGroundContainer
      bgColor="#51AFEB"
      mainSrc={mainBackgroundSrc}
      borderSrc={borderSrc}
    >
      <Grid
        container
        spacing={2}
        sx={{ pl: 0, paddingY: 8, pb: 45, color: "black" }}
      >
        <Grid item xs={2} sm={1.5} md={1} sx={{ p: "0px !important" }}>
          <Box
            sx={{
              p: 0,
              position: "fixed",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <WalkingCharacter type="Sand" />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10.5} md={11} sx={{ pr: 1 }}>
          <Container maxWidth="md">
            <Box
              elevation={3}
              sx={{
                p: 1,
                mr: 2,
              }}
            >
              <Typography
                variant={matchesMd ? "h2" : "h4"}
                gutterBottom
                sx={{
                  textAlign: "center",
                  fontFamily: "'Press Start 2P', cursive",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                paragraph
                sx={{
                  mb: 4,
                  textAlign: matchesMd ? "center" : "left",
                  color: "#333",
                }}
                variant={matchesMd ? "body1" : "body2"}
              >
                Have a question about your adventure in <em>A Rift in Time</em>?
                Curious about game mechanics or need assistance? We're here to
                help! Fill out the form below, and our team will get back to you
                as soon as possible.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3} sx={{ pr: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",
                        mr: 1,
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#4A0E4E" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",

                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#4A0E4E" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",

                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#4A0E4E" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={loading || isSubmitted}
                      sx={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: "0.8rem",
                        padding: "12px",
                      }}
                    >
                      {loading
                        ? "Sending..."
                        : isSubmitted
                        ? "Submitted"
                        : "Send"}
                    </Button>
                  </Grid>
                </Grid>
              </form>

              <Typography
                sx={{ mt: 3 }}
                variant={matchesMd ? "body1" : "body2"}
              >
                Your feedback and questions are valuable to us as we continue to
                develop and improve A Rift in Time. Whether you're wondering
                about gameplay features, encountering issues, or just want to
                share your thoughts, we're eager to hear from you. Please
                provide as much detail as possible in your message to help us
                assist you effectively. We appreciate your interest in{" "}
                <em>A Rift in Time</em> and look forward to connecting with you!
              </Typography>

              <Divider sx={{ my: 6 }} />

              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  textAlign: "center",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: "2rem",
                  mb: 4,
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Box>
                {faqData.map((faq, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      "&:before": {
                        display: "none",
                      },
                      boxShadow: "none",
                      borderRadius: "8px !important",
                      mb: 2,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      sx={{
                        backgroundColor: "rgba(74, 14, 78, 0.1)",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: "rgba(74, 14, 78, 0.2)",
                        },
                      }}
                    >
                      <Typography
                        variant={matchesMd ? "body1" : "body2"}
                        sx={{ fontWeight: "bold" }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant={matchesMd ? "body1" : "body2"}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </GameBackgroundGroundContainer>
  );
};

export default ContactPage;

const faqData = [
  {
    question: "What is 'A Rift in Time'?",
    answer:
      "'A Rift in Time' is an enchanting 2D RPG sandbox game where you embark on an epic quest through time and space. You'll explore diverse realms, solve puzzles, and battle foes while mastering the ability to manipulate time itself.",
  },
  {
    question: "How does the time manipulation mechanic work?",
    answer:
      "The time manipulation mechanic allows you to revisit previous moments in your adventure. This enables you to be 'in two places at once', solving complex puzzles and overcoming challenging obstacles. Your past actions are recorded, allowing for strategic planning and creative gameplay. **Note this feature is currently in development.",
  },
  {
    question: "Can I build and craft in the game?",
    answer:
      "Absolutely! 'A Rift in Time' features a robust crafting and building system. You can collect resources, craft tools, and construct your own sanctuary. From humble beginnings, you can build a thriving abode that reflects your style and ingenuity.",
  },
  {
    question: "Tell me about the day and night cycle.",
    answer:
      "The game features an immersive day and night cycle that adds depth to your adventure. During the day, you can gather materials and explore. At night, you'll need to defend against monsters, using the fortifications and weapons you've crafted.",
  },
  {
    question: "Is there a storyline to follow?",
    answer:
      "Yes... eventually! While 'A Rift in Time' offers sandbox elements, it will feature a rich storyline filled with diverse characters, each with their own stories and personalities. Your decisions will impact the evolving narrative and the world around you.",
  },
  {
    question: "How often is the game updated?",
    answer:
      "As an alpha build, we're constantly working on improvements and new features. Updates are released on a weekly basis. Subscribe to our newsletter to receive the latest update information!",
  },
  {
    question: "How can I provide feedback or report bugs?",
    answer:
      "We greatly value player feedback! You can provide feedback or report bugs by using the contact form on our website or by emailing JD@platinumprogramming.com. Your insights help us refine and enhance the game.",
  },
];
