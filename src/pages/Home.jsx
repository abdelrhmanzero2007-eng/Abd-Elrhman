import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Jop from "./Jop";
export default function Home() {
  return (
    <div className="  w-full bg-MinTextPrimary  flex-clo items-center justify-center overflow-hidden">
      <HeroSection />
      <About />
      <Jop />
      <Contact />
    </div>
  );
}
