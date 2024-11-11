import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import Collaboration from "./components/Collaboration";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="pt-24 px-8">
        <div className="border-l-[1px] border-r-[1px] border-b-[1px] border-gray-500/50">
          <HeroSection />
          <BenefitsSection />
          <Collaboration />
          <ServicesSection />
          <PricingSection />
          <RoadMap />
          <Footer />
        </div>
      </div>
    </>
  );
}
