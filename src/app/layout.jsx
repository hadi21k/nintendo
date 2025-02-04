import { Raleway } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import Navbar from "@/components/navbar/Navbar";
import SecondNavbar from "@/components/second-navbar/SecondNavbar";
import DetailedNavbar from "@/components/detailed-navbar/DetailedNavbar";
import FloatingNavbar from "@/components/floating-navbar/FloatingNavbar";

const raleway = Raleway({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway", 
});

export const metadata = {
  title: "Stardew vallery for Nintendo",
  description:
    "Nintendo is a Japanese multinational consumer electronics and video game company headquartered in Kyoto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} bg-white text-black`}>
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
