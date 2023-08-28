import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Ways",
  description:
    "Swart Ways is a key supplier in Water, Waste Water, and Irrigation Projects. We offer pumps, motors, valves, pipes, fittings, bearings ....etc. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
