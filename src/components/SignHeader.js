import { Typography, styled, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const woodUrl = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAU5SURBVEhLhVZPrxw1DI8zM8ns8rrlPRUVCXHgghAXvgB8BSRKJSQOcACOhQsHkBAHuAAXJFARohVHvhcHQFVLad+fncm/CT87mdndUlrLk/E4juPYjj10+6v3FUDzwDBlpYgJcDLop8HTZDQrWrQDNO04RBWfAP+Zdduzh/fPgacPzv3FQLe++aDOFMPVoUW7r0pRxpYz94A+XDgD3fruI353WtHeQR6VXj5hxP9o3IkIhb3TRClqZTrGiZRPykflvBqD8kE50AsmjDQGGgLPAisnkQsyRvIzjoLgx6gmRT9/ei2tLAWXO6vyJDaIOWxHgsQCbkqVwlSDdMCj1mkybY2YajKHJGcfpyH4lTZTo+nHT97Gd99l7Mpiy0lZtQQcrpijMwSeJqI8+8e0TdtIpkCGcg8hojTlU5+6Vre6oZtfvos5i2lrWClbUyyEGyfKWoUoi7VKUWnmI9NytRoA4Xl/2ZSQ6AmKSLXM13bV275XtmfdGsuAooUNgkRWXavaltO36xSMBeIIcdphSIxexpBEO9ZNCnRIzZuvv6picmkHbUw7TlwwYmxxIBwFlmJvRnhSRjYFaZOc862oZ8dOE0a6+fk71jauHlPZ8oIr2q6QFfj44oLyDt4VS3fM6iIm9oBd6STngNaslVkxtkY8S2yFG50v6BzocXRucOAvV2yBYmQ1VSDLBspq1XdAFwYXRkY/VIzByQKcjA/HlYNfzKrvhRaicGYeCFFNNao7YEVFCmYygW14J8a99Y8FzGptu8Z2xhrTvPHaCwhUm8mu1shopDWjRo7plqjVyGVqG1ympiLPLqNGSFm4sylEHHc7nK8z9YjtlCgCA/308VuSA8VQACZnOucR0vAi3A0umMhxQ4qvGz4kBlp5FceYNg0KAbM7A5vE83zWTL/8cEPkEM+ygO86z+Fzlw+VkLjiAVYTICOXrjBnkIUUpBiUUgHq0isv8tyych/qTjLykPX5VgWHY5Efxkmt2vxw6wyqmc+ohADqaa206TV9f+PaMy+L6kc1F3V8TCHmkX2T5xQtrz0BplnC/37nIumjldYH2gEL8UQoUTuQRq11qORRjVzw7dXj45eudM+faAqBfODyvSA+F1xmeZRyj9onIHvwkznLkfAtl8sV7pNB6ufVWqSQBPWw/wGs1U02bTZdtkZG0G1G4eMrgsqI3ObFlNEnQAhWR6GVgG6BKF6cOdli/R5CXdfxbPXFzgq0AppQxiOlAJqrJo97iCoyTf7uHX/3rn/woGQY4eAHiIJaF4DgBaIIehFkrrUqZh65OKPcgAklk/BlTNkcP2uOL5kj3KLa62FpMbYSaEtS7hMNA40DRr0dOIBbP4fH80UFcRHQ6ngzbI+bbXCz0UVw5TSQfv3sOu5Be7Jh5Sme/fM3986srh5ZWH+axk3Xj3ByuYbcDHCU2WewhE0vr5nD5s0EzvbbF9fRQgvOM/Lq1KDI9rguckoEludFBhpJmiI+U0STYTbqOk19ppHDgNOwsDWWbn374b0//tygcR4dYWLpPBUgXRQtAJJjU6hlVy5Z49KvkGPckLl8aX92sdlcXjVZj2cH2lkLr8aIDtOPW//wftX+GMgjHJAmtDkXgcENHm3JbR1H2FozmPVgenW+Pb0HLVW1hV3jFm1nY1bZrs3lE1uUZ2XxA/DoyRZaCLSEvrfrnm5//R7zeMEC+N1ryq+F/uvOdPKcMGfAPUgcdNmAP/OK+zxtw94eApjX+AcpdAiqaSsir/EPueWMnK4caofkOOxrZ84QHqMdAKfF+C+fR1TwKanEbAAAAABJRU5ErkJggg==')`;

const SignContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
}));

const SignStyle = styled(Box)(({ theme }) => ({
  backgroundColor: "#9b8839",
  borderRadius: "12px",
  border: "1px solid #442D03", // Inner 1px border
  boxShadow: "0 0 0 4px #9C881B, 0 0 0 5px #442D03",
  padding: "20px",
  position: "relative",
  zIndex: 2, // Ensure this is higher than the pseudo-element
  marginBottom: "4em",
  backgroundImage: woodUrl,
  backgroundSize: "48px 48px", // Adjust based on your preference
  backgroundRepeat: "repeat",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-47px", // Adjust this value based on the height of the post
    left: "50%",
    transform: "translateX(-50%)",
    width: "8px",
    height: "40px", // Adjust this value based on the desired height of the post
    backgroundColor: "#6c602a",
    borderRadius: "4px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    border: "1px solid #442D03", // Inner 1px border

    boxShadow: "0 0 0 4px #86761f, 0 0 0 5px #442D03",
    zIndex: 1, // Lower than the main content
  },

  // Responsive styles using theme breakpoints
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "20px",
  },
}));

const SignHeader = ({ children }) => {
  const theme = useTheme();

  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <SignContainer>
      <SignStyle>
        <Typography variant={matchesMd ? "h3" : "h4"} gutterBottom>
          {children}
        </Typography>
      </SignStyle>
    </SignContainer>
  );
};

export default SignHeader;
