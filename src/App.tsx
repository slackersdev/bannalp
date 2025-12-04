import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import LiftStatusSection from "./components/LiftStatusSection";
import LivecamSection from "./components/LivecamSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GastronomieSection from "./components/GastronomieSection";
import WinterSection from "./components/WinterSection";
import SummerSection from "./components/SummerSection";
import PricesSection from "./components/PricesSection";

type Page =
  | "home"
  | "gastronomie"
  | "winter"
  | "sommer"
  | "preise"
  | "info";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  if (currentPage === "gastronomie") {
    return (
      <div className="min-h-screen bg-white">
        <GastronomieSection
          onBack={() => setCurrentPage("home")}
        />
        <Footer />
      </div>
    );
  }

  if (currentPage === "winter") {
    return (
      <div className="min-h-screen bg-gray-900">
        <WinterSection onBack={() => setCurrentPage("home")} />
        <Footer />
      </div>
    );
  }

  if (currentPage === "sommer") {
    return (
      <div className="min-h-screen bg-gray-900">
        <SummerSection onBack={() => setCurrentPage("home")} />
        <Footer />
      </div>
    );
  }

  if (currentPage === "preise") {
    return (
      <div className="min-h-screen bg-white">
        <PricesSection onBack={() => setCurrentPage("home")} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} />
      <main>
        <HeroSection />
        <AboutSection />
        <LiftStatusSection />
        <LivecamSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}