import React, { useEffect } from "react";
import Typed from "typed.js";
import heroImage from "../assets/images/hero.svg";

const Hero = () => {
    useEffect(() => {
        const typed = new Typed("#element", {
            strings: ["a student developer", "learning about Tech",],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="w-full max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-evenly items-center mt-24">
            {/* Info Section */}
            <div className="md:w-1/3 text-left">
                <p className="text-3xl md:text-5xl leading-snug md:leading-tight text-black">
                    Hi, my name is <br />
                    <span className="text-blue-600 font-medium">Atul</span> and I'm
                </p>

                <span
                    id="element"
                    className="text-3xl md:text-5xl font-medium text-blue-500 inline-block"
                ></span>


                <div className="mt-10 w-fit flex items-center bg-blue-500 rounded-full shadow-md overflow-hidden">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/document/d/1qN5Bd--10xOymt5XGS53_213DgNddM9AfzNUIgNfxrI/edit?usp=sharing"
                        className="flex items-center gap-2 px-6 py-3 text-white text-base md:text-lg font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-full"
                    >
                        <i className="fa-solid fa-circle-chevron-down transition-transform duration-300 group-hover:translate-y-1"></i>
                        Download Resume
                    </a>
                </div>


            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img
                    src={heroImage}
                    alt="Programming Illustration"
                    className="w-full max-w-[600px] drop-shadow-md"
                />
            </div>
        </div>

    );
};

export default Hero;
