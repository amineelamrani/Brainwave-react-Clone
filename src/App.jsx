import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="pt-24 px-8">
        <div className="border-l-[1px] border-r-[1px] border-b-[1px] border-gray-500">
          <HeroSection />
        </div>
      </div>
    </>
  );
}
