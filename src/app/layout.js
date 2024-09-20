import "./globals.css";
import { Quicksand } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const quicksand = Quicksand({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Afran Hossan Reaz - Portfolio",
  description:
    "Electrical and Electronic Engineering Student | Innovator | Robotics Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 to-blue-950 text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
