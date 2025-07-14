import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../index.css";
import Hero from "../component/Hero";
import Projects from "../pages/Project";
import About from "../pages/About";
import Stacks from "../pages/Stacks";
import Contact from "../pages/Contact";
// import About from "../pages/About";
// import Projects from "../pages/Project";

export default function MainLayout() {
  return (
    <div className="w-full">
      <Hero />
      <Navbar />
      <Projects />
      <About />
      <Stacks />
      <Contact />
      <Footer />
    </div>
  );
}
