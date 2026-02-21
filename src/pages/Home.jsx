import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
export default function Home() {
  return (
    <div className="  w-full bg-MinTextPrimary h-screen flex-clo items-center justify-center ">
      <HeroSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
