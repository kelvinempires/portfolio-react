import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
