import React, { useEffect, useState } from "react";
import { navItems } from "../data/data";
import { section } from "framer-motion/client";

const Navbar = () => {
  const [isActive, setOnActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          window.pageYOffset >= sectionTop - 200 &&
          window.pageYOffset < sectionTop + sectionHeight - 200
        ) {
          current = section.id;
        }
      });
      setOnActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    setOnActive(id);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.clientHeight || 0;
      window.scrollTo({
        top: element.offsetTop - navbarHeight - 20,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 py-1 z-50 lg:w-1/4 md:w-1/2 sm:1-1/2 w-10/12 bg-white/10 border border-white/20 rounded-full flex justify-center shadow-x1 transition-all">
      <ul className="flex justify-around w-full text-white">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`flex item-center justify-center p-3 h-10 w-10 rounded-full transition-all duration-300 ${
                isActive === item.id
                  ? "bg-teal-500/30 text-teal-300"
                  : "bg-white/10 hover:bg-white/30"
              }`}
            >
              {item.icon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
