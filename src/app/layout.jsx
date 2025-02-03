import { MuseoModerno } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import Navbar from "@/components/navbar/Navbar";
import SecondNavbar from "@/components/second-navbar/SecondNavbar";
import DetailedNavbar from "@/components/detailed-navbar/DetailedNavbar";
import FloatingNavbar from "@/components/floating-navbar/FloatingNavbar";

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nintendo",
  description:
    "Nintendo is a Japanese multinational consumer electronics and video game company headquartered in Kyoto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${museoModerno.variable} antialiased`}>
        <GlobalProvider>
          <Navbar />
          <SecondNavbar />
          <FloatingNavbar />
          <DetailedNavbar />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
