import React, { useState, useEffect } from "react";
import { Linkedin, Github, Heart, ChevronUp } from 'lucide-react';


const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="w-full bg-gray-950 text-gray-300 py-16 px-6 flex flex-col items-center gap-12">
      {/* Main Footer Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        {/* Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-semibold text-white">Projects</h3>
          <nav className="flex flex-col gap-2 text-xl text-gray-400">
            <a href="#" className="hover:text-white transition">
              Side Project
            </a>
            <a href="#" className="hover:text-white transition">
              Side Project
            </a>
            <a href="#" className="hover:text-white transition">
              Side Project
            </a>
          </nav>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4 items-center md:items-end">
          <h3 className="text-3xl font-semibold text-white">Connect</h3>
          <div className="flex gap-6 text-4xl text-gray-400">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              title="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              title="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full">
        <hr className="border-0 h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-60" />
      </div>

      {/* Credits */}
      <div className="text-center space-y-2">
        <p className="text-2xl text-gray-400">
          Designed & Built by{" "}
          <span className="text-white font-medium">Your Name</span> with{" "}
          <Heart className="inline w-8 h-8 text-blue-500 animate-pulse" />
        </p>
        <p className="text-xl text-gray-500">
          &copy; {year} | All Rights Reserved.
        </p>

        {/* Branding */}
        <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-bold bg-gradient-to-b from-blue-700 to-gray-950 bg-clip-text text-transparent text-center">
          Dev
        </h1>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-gradient-to-tl from-black to-blue-900 cursor-pointer transition duration-300"
          title="Back to Top"
        >
          <ChevronUp className="w-6 h-6"/>
        </button>
      )}
    </footer>
  );
};

export default Footer;
