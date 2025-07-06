import React, { useState, useEffect } from "react";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">

        {/* Social Icons */}
        <div className="flex gap-6 text-4xl text-gray-400">
          <a
            href="https://github.com/eatulrajput"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/eatulrajput"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>


        {/* Credits */}
        <div className="text-center space-y-2 mt-6">
          <p className="text-2xl text-gray-400">
            Designed & Built by{" "}
            <span className="text-white font-medium">Atul Rajput</span> with{" "}
            <i className="fa-regular fa-heart text-blue-400  text-3xl animate-pulse"></i>

          </p>
          <p className="text-xl text-gray-500">
            &copy; {year} | All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Handle Branding */}
        <h1 className="text-[clamp(2.5rem,10vw,9rem)] font-bold bg-gradient-to-b from-blue-700 to-gray-950 bg-clip-text text-transparent text-center">
          @eatulrajput
        </h1>

      {/* Back to Top Floating Button */}

      {showButton && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white text-xl p-3 rounded-full shadow-lg transition-all duration-300 hover:cursor-pointer"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}


    </footer>
  );
};

export default Footer;
