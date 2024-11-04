import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="pt-24 px-8">
        <div className="border-l-[1px] border-r-[1px] border-b-[1px] border-gray-500">
          <HeroSection />
          <BenefitsSection />
        </div>
      </div>
    </>
  );
}
