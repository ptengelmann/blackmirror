import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlitchOverlay from "@/components/GlitchOverlay";
import EasterEggModal from "@/components/EasterEggModal";
import RatingSystem from "@/components/RatingSystem";
import Chatbox from "@/components/Chatbox";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "BLACK MIRROR - Official Merch Store",
  description: "Step into the mirror. Your digital nightmare awaits. Official Black Mirror merchandise and collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <GlitchOverlay />
        <RatingSystem />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <EasterEggModal />
        <Chatbox />

        {/* Background grain effect */}
        <div className="fixed inset-0 grain pointer-events-none z-0" />
      </body>
    </html>
  );
}
