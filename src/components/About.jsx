import React from "react";
import profileImage from "../assets/images/profile.webp";
import hoverProfileImage from "../assets/images/hover-profile.webp";

const About = () => {
    return (
        <div id="about" className="py-16 px-6 bg-white text-gray-800">
            <div className="max-w-5xl mx-auto">
                <div className="my-8">
  <hr className="border-t-2 border-zinc-300 opacity-60 w-full" />
</div>

                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
                        <i className="fa-regular fa-user"></i> About Me
                    </h2>
                </div>

                {/* Glassmorphism Container */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-8 rounded-3xl shadow-xl bg-white backdrop-blur-lg border border-white/30">
                    {/* Profile Image */}
                    <div className="relative w-1/2 h-1/2 rounded-full overflow-hidden shadow-lg border-2 border-blue-500">
                        <img
                            src={profileImage}
                            alt="Profile Picture"
                            className="w-full h-full object-cover transition-all duration-1000 hover:opacity-0"
                        />
                        <img
                            src={hoverProfileImage}
                            alt="Hover Profile Picture"
                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-300 hover:opacity-100"
                        />
                    </div>

                    {/* About Text */}
                    <div className="text-center md:text-left max-w-2xl">
                        <p className="text-2xl leading-10 text-gray-700">
                            Hi, I’m <span className="text-blue-600">Atul Rajput</span>! I’m a passionate student exploring the world of technology and innovation.
                            With a keen interest in learning and creating, I focus on acquiring the skills needed to transform ideas
                            into impactful projects. I’m driven by curiosity and a commitment to excellence, always striving to
                            grow personally and professionally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
