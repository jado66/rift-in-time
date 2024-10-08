import "./globals.css";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "@/components/Footer";
import { VT323 } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vtT323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`vt323-regular ${vtT323.className}`}>
        <ToastContainer theme="dark" />

        {children}
      </body>
    </html>
  );
}
