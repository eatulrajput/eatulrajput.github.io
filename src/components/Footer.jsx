import React, { useState, useEffect } from "react";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    // Dynamically add the script to load the carbon badge
    const script = document.createElement("script");
    script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 px-6">

        {/* Flag Counter */}
        <div className="visit">
          <a href="https://info.flagcounter.com/o6Xp">
            <img
              src="https://s11.flagcounter.com/count2/o6Xp/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
              alt="Flag Counter"
              className="border border-gray-500 rounded-lg hover:shadow-lg transition duration-300"
            />
          </a>
        </div>

        {/* Website Carbon Badge */}
        <div id="wcb" className="carbonbadge wcb-d"></div>

        {/* Copyright & Credits */}
        <p className="text-sm md:text-base text-gray-400">
          Designed & Developed by <strong className="text-white">Atul Rajput </strong> 
          with <i className="fa-regular fa-heart text-blue-300 text-xl"></i>
        </p>
        
        <p className="text-xs md:text-sm text-gray-500">
          &copy; {year} | All Rights Reserved.
        </p>
        <h1 className="text-[clamp(2.5rem,10vw,9rem)] font-bold bg-gradient-to-b from-blue-300 to-gray-900 bg-clip-text text-transparent">
  @eatulrajput
</h1>


        
      </div>
    </footer>
  );
};

export default Footer;
