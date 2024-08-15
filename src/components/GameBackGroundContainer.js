import { Container } from "@mui/material";

export const GameBackgroundGroundContainer = ({
  children,
  bgColor,
  mainSrc,
  borderSrc,
  borderSrc2,
  applyMainToEdges,
}) => {
  const mainBackgroundStyle = {
    backgroundImage: mainSrc,
    backgroundRepeat: "repeat",
    backgroundSize: "64px 64px",
    minHeight: "100vh",
  };

  const borderStyle = {
    backgroundImage: borderSrc,
    backgroundRepeat: "repeat-y",
    backgroundSize: "64px 64px",
    width: "64px",
    flexShrink: 0,
  };

  const borderStyle2 = {
    backgroundImage: borderSrc2,
    backgroundRepeat: "repeat-y",
    backgroundSize: "64px 64px",
    width: "64px",
    flexShrink: 0,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden", // Prevents horizontal scrolling

        ...(applyMainToEdges
          ? mainBackgroundStyle
          : { backgroundColor: bgColor }), // Conditionally apply mainBackgroundStyle
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            ...borderStyle,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            overflow: "hidden",
            background: mainBackgroundStyle.backgroundImage,
            backgroundRepeat: mainBackgroundStyle.backgroundRepeat,
            backgroundSize: mainBackgroundStyle.backgroundSize,
          }}
        >
          {children}
        </div>
        <div
          style={
            borderSrc2
              ? borderStyle2
              : { ...borderStyle, transform: "scaleX(-1)" }
          }
        />
      </Container>
    </div>
  );
};
