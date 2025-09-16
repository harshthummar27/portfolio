// components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navItems } from "../data/data"; // your existing navItems

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // sync active button with current path
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    setIsActive(path);
  }, [location]);

  // scroll-spy — updates active on scroll
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
      setIsActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    // change URL (so users can bookmark /about etc.)
    navigate(`/${id}`);
    // optional: also scroll immediately (MainLayout also listens to location)
    const el = document.getElementById(id);
    const navbarHeight = document.querySelector("nav")?.clientHeight || 0;
    if (el) {
      window.scrollTo({
        top: el.offsetTop - navbarHeight - 20,
        behavior: "smooth",
      });
    }
    // just navigate, MainLayout will handle scrolling
       navigate(`/${id}`);
  };

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 py-1 z-50 lg:w-1/4 md:w-1/2 w-10/12 bg-white/10 border border-white/20 rounded-full flex justify-center shadow-xl transition-all">
      <ul className="flex justify-around w-full text-white">
        {navItems.map((item) => (
          <li key={item.id} className="relative group">
            <button
              aria-label={item.label}
              onClick={() => handleClick(item.id)}
              className={`flex items-center justify-center p-3 h-10 w-10 rounded-full transition-all duration-300 ${
                isActive === item.id
                  ? "bg-teal-500/30 text-teal-300"
                  : "bg-white/10 hover:bg-white/30"
              }`}
            >
              {item.icon}
            </button>

            <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-white/80 text-xs px-2 py-1 rounded-md">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;