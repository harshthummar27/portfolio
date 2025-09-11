// components/MainLayout.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contect from "./Contect";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

useEffect(() => {
  const scrollToSection = () => {
    const raw = location.pathname.replace("/", ""); 
    const id = raw || "home";
    const el = document.getElementById(id);
    const navbarHeight = document.querySelector("nav")?.clientHeight || 0;

    if (el) {
      window.scrollTo({
        top: el.offsetTop - navbarHeight - 20,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const t = setTimeout(scrollToSection, 60);
  return () => clearTimeout(t);
}, [location]);

  return (
    <div className="min-h-screen bg-[#202020] text-white pb-20">
      <Navbar />

      <main>
        {/* Make sure each wrapper has the matching id */}
        <section id="home" className="w-full">
          <Home />
        </section>

        <section id="about" className="w-full">
          <About />
        </section>

        <section id="skills" className="w-full">
          <Skills />
        </section>

        <section id="experience" className="w-full">
          <Experience />
        </section>

        <section id="portfolio" className="w-full">
          <Portfolio />
        </section>

        <section id="contact" className="w-full">
          <Contect />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
