import React, { useEffect } from "react";
import Typed from "typed.js";
import heroImage from "/hero.svg";

const Hero = () => {
    useEffect(() => {
        const typed = new Typed("#typed-text", {
            strings: ["a student developer", "learning about Tech"],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section className="w-full max-w-screen-xl mx-auto px-6 py-16 mt-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-black leading-snug">
                    Hi, my name is <br />
                    <span className="text-blue-600 font-bold">Atul</span> and I'm
                </h1>

                <span
                    id="typed-text"
                    className="block mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-600 leading-snug min-h-[3.5rem]"
                ></span>


                {/* Resume Button */}
                <div className="mt-8 flex justify-center md:justify-start">
                    <a
                        href="https://drive.google.com/file/d/1n8qqVvLFb8JG5rjfwKGivNEM-Y_0o0Lt/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-base md:text-lg font-medium rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <i className="fa-solid fa-circle-chevron-down group-hover:translate-y-1 transition-transform duration-300"></i>
                        Resume
                    </a>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={heroImage}
                    alt="Programming Illustration"
                    className="w-full max-w-md md:max-w-lg drop-shadow-lg"
                    style={{
                        filter: "drop-shadow(0 5px 10px rgba(59, 130, 246, 0.6))",
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;
