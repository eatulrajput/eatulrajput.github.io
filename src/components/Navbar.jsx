import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "/logo.gif";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Function to handle navigation and scrolling
    const handleNavClick = (section) => {
        if (location.pathname !== "/") {
            // Navigate to home first
            navigate("/");
            setTimeout(() => {
                scroll.scrollTo(document.getElementById(section).offsetTop, {
                    duration: 500,
                    smooth: "easeInOutQuad",
                });
            }, 100); // Delay to ensure the page has loaded
        } else {
            // Already on home, just scroll
            scroll.scrollTo(document.getElementById(section).offsetTop, {
                duration: 500,
                smooth: "easeInOutQuad",
            });
        }
        setIsOpen(false); // Close mobile menu
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl shadow-md z-50 h-28">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Website Logo" className="h-20 rounded-full" />
                    </Link>
                </div>


                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-xl">
                    <li><button onClick={() => handleNavClick("hero")} className="hover:text-blue-600 cursor-pointer">Home</button></li>
                    <li><button onClick={() => handleNavClick("about")} className="hover:text-blue-600 cursor-pointer">About</button></li>
                    <li><button onClick={() => handleNavClick("skills")} className="hover:text-blue-600 cursor-pointer">Skills</button></li>
                    <li><button onClick={() => handleNavClick("education")} className="hover:text-blue-600 cursor-pointer">Education</button></li>
                    <li><button onClick={() => handleNavClick("experience")} className="hover:text-blue-600 cursor-pointer">Experience</button></li>
                    <li><button onClick={() => handleNavClick("projects")} className="hover:text-blue-600 cursor-pointer">Projects</button></li>
                    <li><button onClick={() => handleNavClick("contact")} className="hover:text-blue-600 cursor-pointer">Contact</button></li>

                    {/* Routed Pages */}

                    <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
                    <li><Link to="/my-space" className="hover:text-blue-600">My Space</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-3xl cursor-pointer p-2 hover:bg-zinc-200 rounded-full hover:rotate-90 transition-transform ease-in-out" onClick={() => setIsOpen(!isOpen)}>
                    &#9776;
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center text-white">

                    {/* Close Button */}
                    <button
                        aria-label="Close"
                        className="absolute top-5 right-5 text-4xl text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 transition-transform transform hover:rotate-90 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>


                    <ul className="space-y-4 text-xl">
                        {/* Routed Links */}
                        <li>
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="block w-full px-4 py-2 text-center rounded-md hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/blog"
                                onClick={() => setIsOpen(false)}
                                className="block w-full px-4 py-2 text-center rounded-md hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/my-space"
                                onClick={() => setIsOpen(false)}
                                className="block w-full px-4 py-2 text-center rounded-md hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                My Space
                            </Link>
                        </li>

                        {/* Scroll-triggering Buttons */}
                        {[
                            { label: "About", section: "about" },
                            { label: "Skills", section: "skills" },
                            { label: "Education", section: "education" },
                            { label: "Experience", section: "experience" },
                            { label: "Projects", section: "projects" },
                            { label: "Contact", section: "contact" },
                        ].map(({ label, section }) => (
                            <li key={section}>
                                <button
                                    onClick={() => handleNavClick(section)}
                                    className="block w-full text-center px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
