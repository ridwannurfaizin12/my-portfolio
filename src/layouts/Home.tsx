import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../index.css";
import Hero from "../component/Hero";
import Projects from "../pages/Project";
import About from "../pages/About";
import Stacks from "../pages/Stacks";
import Contact from "../pages/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="w-full">
      <Hero />
      <Navbar />
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>
      <div id="about" className="scroll-mt-30">
        <About />
      </div>
      <div id="stacks" className="scroll-mt-20">
        <Stacks />
      </div>
      <div id="contact" className="scroll-mt-30">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
