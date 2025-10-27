import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlitchOverlay from "@/components/GlitchOverlay";
import EasterEggModal from "@/components/EasterEggModal";
import RatingSystem from "@/components/RatingSystem";

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
        <GlitchOverlay />
        <RatingSystem />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <EasterEggModal />

        {/* Background grain effect */}
        <div className="fixed inset-0 grain pointer-events-none z-0" />
      </body>
    </html>
  );
}
