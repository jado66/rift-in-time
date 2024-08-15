import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, pb: 35 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Privacy Policy
        </Typography>
        <Paper elevation={3} sx={{ p: 3, textAlign: "left" }}>
          <Typography variant="h2" gutterBottom align="left">
            A Rift in Time <br /> Privacy Policy
          </Typography>
          <Typography paragraph textAlign="center">
            Last updated: 8/15/2024
          </Typography>
          <Typography paragraph>
            At A Rift in Time, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and safeguard your personal data.
          </Typography>
          <Typography variant="h3" gutterBottom align="left">
            1. Information We Collect
          </Typography>
          <Typography paragraph>
            We collect the following personal information from our users:
          </Typography>
          <ul style={{ marginLeft: "2em", listStyleType: "disc" }}>
            <li>
              <Typography>Email addresses</Typography>
            </li>
            <li>
              <Typography>Names</Typography>
            </li>
            <li>
              <Typography>Messages or inquiries</Typography>
            </li>
          </ul>
          <Typography paragraph>
            We collect this information when you voluntarily provide it to us,
            such as when you sign up for our newsletter, register for updates
            about our game, or use our contact form.
          </Typography>
          <Typography variant="h3" gutterBottom align="left">
            2. How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use your personal information for the following purposes:
          </Typography>
          <ul style={{ marginLeft: "2em", listStyleType: "disc" }}>
            <li>
              <Typography>
                To send you updates about A Rift in Time, including:
              </Typography>
              <ul style={{ marginLeft: "2em", listStyleType: "circle" }}>
                <li>
                  <Typography>Game development progress</Typography>
                </li>
                <li>
                  <Typography>Release announcements</Typography>
                </li>
                <li>
                  <Typography>Special offers or promotions</Typography>
                </li>
                <li>
                  <Typography>Community events or contests</Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography>To respond to your inquiries or messages</Typography>
            </li>
            <li>
              <Typography>
                To improve our services and user experience
              </Typography>
            </li>
          </ul>
          <Typography variant="h3" gutterBottom align="left">
            3. Data Protection
          </Typography>
          <Typography paragraph>
            We are committed to ensuring the security of your personal
            information. We have put in place appropriate technical and
            organizational measures to prevent unauthorized access, use, or
            disclosure of your information.
          </Typography>
          <Typography variant="h3" gutterBottom align="left">
            4. Data Sharing
          </Typography>
          <Typography paragraph>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties. Your data is used exclusively by A
            Rift in Time for the purposes stated in this policy.
          </Typography>
          <Typography variant="h3" gutterBottom align="left">
            5. Data Retention
          </Typography>
          <Typography paragraph>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law. For contact
            form submissions, we typically retain the information for [specify
            time period, e.g., "one year"] after the inquiry has been resolved.
          </Typography>
          <Typography variant="h3" gutterBottom align="left">
            6. Your Rights
          </Typography>
          <Typography paragraph>You have the right to:</Typography>
          <ul style={{ marginLeft: "2em", listStyleType: "disc" }}>
            <li>
              <Typography>
                Unsubscribe from our communications at any time. Every email we
                send includes an unsubscribe link at the bottom.
              </Typography>
            </li>
            <li>
              <Typography>Request access to your personal data</Typography>
            </li>
            <li>
              <Typography>
                Request correction or deletion of your personal data
              </Typography>
            </li>
            <li>
              <Typography>Object to our use of your personal data</Typography>
            </li>
            <li>
              <Typography>
                Request that we limit our use and disclosure of your personal
                data
              </Typography>
            </li>
          </ul>
          <Typography paragraph>
            If you wish to exercise any of these rights, please contact us at
            jd@platinumprogramming.com.
          </Typography>
          <Typography variant="h3" gutterBottom align="left">
            7. Changes to This Policy
          </Typography>
          <Typography paragraph>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date at the top of this policy.
          </Typography>
          <Typography variant="h3" gutterBottom align="left">
            8. Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </Typography>
          <Typography>Email: jd@platinumprogramming.com</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
