import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <ResponsiveAppBar />
      </header>
      <main
        style={{
          flexGrow: 1,
          paddingTop: "54px", // Adjust based on your header height
          paddingBottom: "100px", // Adjust based on your footer height
          overflow: "scroll" /* Enable scrolling */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
          scrollbarWidth: "none" /* Firefox */,
        }}
      >
        <div className="main-content">{children}</div>
      </main>
      <div
        style={{
          position: "fixed",
          bottom: 0, // Adjust based on your footer height
          left: 0,
          right: 0,
          height: "275px",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) 45%)",
          pointerEvents: "none",
          zIndex: 998,
        }}
      />
      <Footer />
    </div>
  );
}
