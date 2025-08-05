import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Rotate from "./components/Rotate1";
import SocialRotate from "./components/SocialRotate";
import Projects from "./components/Projects";
import ParticleBackground from "./components/ParticleNetwork";

export default function App() {
  return (
    <>
      <NavBar />
      <ParticleBackground
        particleColor="rgba(180, 150, 255, 0.5)" // Soft purple particles
        connectionColor="rgba(180, 150, 255, 0.1)" // Very faint connections
        mouseRadius={120} // Smaller interaction area
        repelForce={0.15} // Gentle push
      />
      <div className="flex flex-col pl-2 lg:px-8 ">
        <CustomCursor />
        <HeroSection />
        <About />
        <Experience />
        <Projects />
        <Portfolio />
        <Contact />
        <Footer />
        <Rotate />
        <SocialRotate />
      </div>
    </>
  );
}
