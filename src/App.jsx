import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Rotate from "./components/Rotate1";
import SocialRotate from "./components/SocialRotate";

export default function App() {
  return (
    <>
      <NavBar />
    <div className="flex flex-col pl-2 lg:px-8 ">
      <CustomCursor />
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <Rotate />
      <SocialRotate />
    </div>
    </>
  );
}
