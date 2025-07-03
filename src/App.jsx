import React, { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Resume from "./Resume";
import Contact from "./Contact";
import ExperienceSection from "./ExperienceSection";

function App() {
  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
                setShowNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        
        setShowNav(false);
      } else if (currentScrollY < lastScrollY.current) {
        
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      
      <nav
        className={`fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 flex justify-center space-x-6 py-4 px-6 text-sm text-cyan-500 font-semibold shadow-none border-none transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="relative px-3 py-1 cursor-pointer transition-colors duration-300 hover:text-white group"
          >
            {label}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-wave"></span>
          </a>
        ))}
      </nav>

      
      <div className="bg-white text-gray-800 relative z-10">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Project />
        <Contact />
        <ExperienceSection />
      </div>

      <style>{`
        @keyframes wave {
          0% {
            transform: translateX(0%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(10%);
            opacity: 0;
          }
        }

        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
          background: linear-gradient(90deg, rgba(14,165,233,0.7), rgba(6,182,212,0.9), rgba(14,165,233,0.7));
        }
      `}</style>
    </>
  );
}

export default App;
