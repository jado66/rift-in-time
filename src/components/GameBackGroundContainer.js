import { Container } from "@mui/material";

export const GameBackgroundGroundContainer = ({
  children,
  bgColor,
  mainSrc,
  borderSrc,
  borderSrc2,
  borderBackgroundSrc,
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
    position: "absolute",
    top: 0,
    bottom: 0,
  };

  const borderBackgroundStyle = {
    backgroundImage: borderBackgroundSrc,
    backgroundRepeat: "repeat",
    backgroundSize: "64px 64px",
    minHeight: "100vh",
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        ...(borderBackgroundSrc
          ? borderBackgroundStyle
          : { backgroundColor: bgColor }),
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            ...borderStyle,
            left: 0,
          }}
        />
        <div
          style={{
            ...borderStyle,
            right: 0,
            transform: borderSrc2 ? "none" : "scaleX(-1)",
            backgroundImage: borderSrc2 || borderSrc,
          }}
        />
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            background: mainBackgroundStyle.backgroundImage,
            backgroundRepeat: mainBackgroundStyle.backgroundRepeat,
            backgroundSize: mainBackgroundStyle.backgroundSize,
          }}
        >
          {children}
        </div>
      </Container>
    </div>
  );
};
