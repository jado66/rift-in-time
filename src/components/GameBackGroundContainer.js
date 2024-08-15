import { Container } from "@mui/material";

export const GameBackgroundGroundContainer = ({
  children,
  bgColor,
  mainSrc,
  borderSrc,
  applyMainToEdges,
}) => {
  const mainBackgroundStyle = {
    backgroundImage: mainSrc,
    backgroundRepeat: "repeat",
    backgroundSize: "64px 64px",
    minHeight: "100vh",
  };

  const waterToGrassBorderStyle = {
    backgroundImage: borderSrc,
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
            ...waterToGrassBorderStyle,
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
          style={{
            ...waterToGrassBorderStyle,
            transform: "scaleX(-1)",
          }}
        />
      </Container>
    </div>
  );
};
