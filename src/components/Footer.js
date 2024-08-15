"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  SvgIcon,
  TextField,
  InputAdornment,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { YouTube, Instagram, Send } from "@mui/icons-material";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNewsletterSubscription = async (event) => {
    event.preventDefault();
    if (email && !isSubmitted) {
      // Here you would typically call your subscribe function
      // For now, we'll just simulate a successful subscription
      setIsSubmitted(true);
      setEmail(""); // Clear the input on success
    }
  };

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.97)",
        color: "#f0f0f0",
        padding: "1rem",
        maxWidth: "md",
        mx: "auto",
        fontFamily: "VT323, monospace",
        zIndex: 999,
        height: "auto",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Left Column */}
        <Grid item xs={6}>
          <Typography variant="h5" align="center" gutterBottom>
            A Rift In Time
          </Typography>
          {/* <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <IconButton
              color="inherit"
              aria-label="YouTube"
              component="a"
              onClick={() => alert("Come back later")}
              sx={{ padding: "4px" }}
            >
              <YouTube fontSize="small" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Discord"
              component="a"
              onClick={() => alert("Come back later")}
              sx={{ padding: "4px" }}
            >
              <DiscordIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="TikTok"
              component="a"
              onClick={() => alert("Come back later")}
              sx={{ padding: "4px" }}
            >
              <TiktokIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Instagram"
              component="a"
              onClick={() => alert("Come back later")}
              sx={{ padding: "4px" }}
            >
              <Instagram fontSize="small" />
            </IconButton>
          </Box> */}
          <Grid container justifyContent="space-around">
            <Grid
              item
              xs={6}
              sm="auto"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/about"
                color="inherit"
                sx={{ mx: 1, fontSize: "0.8rem" }}
              >
                About
              </Link>
            </Grid>
            <Grid
              item
              xs={6}
              sm="auto"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/#"
                color="inherit"
                sx={{ mx: 1, fontSize: "0.8rem" }}
                onClick={() => alert("Come back later")}
              >
                Dev Blog
              </Link>
            </Grid>
            <Grid
              item
              xs={6}
              sm="auto"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/support"
                color="inherit"
                sx={{ mx: 1, fontSize: "0.8rem" }}
              >
                Support
              </Link>
            </Grid>
            <Grid
              item
              xs={6}
              sm="auto"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/privacy"
                color="inherit"
                sx={{ mx: 1, fontSize: "0.8rem" }}
              >
                Privacy
              </Link>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Column */}
        <Grid item xs={6}>
          <Box sx={{ maxWidth: "400px", mx: "auto" }}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              {matchesMd
                ? "Subscribe to our newsletter for  updates"
                : "Want updates?"}
            </Typography>
            <form onSubmit={handleNewsletterSubscription}>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitted}
                helperText={isSubmitted ? "Thank you for subscribing!" : ""}
                placeholder={matchesMd ? "Put your email here" : "Email"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="submit"
                        color="primary"
                        disabled={isSubmitted}
                        size="small"
                      >
                        <Send />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiFormHelperText-root": { color: "white" },
                }}
              />
            </form>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 2, fontSize: { md: "0.7rem", xs: "0.5rem" } }}
      >
        © {new Date().getFullYear()} A Rift In Time
      </Typography>
    </Box>
  );
};

export default Footer;

const DiscordIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      viewBox="0 -28.5 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      fill="#ffffff"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path
            d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
            fill="#ffffff"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </svg>
  </SvgIcon>
);

const TiktokIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      fill="#ffffff"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>Tiktok</title>
        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
      </g>
    </svg>
  </SvgIcon>
);
