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
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-20">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Website Logo" className="h-16" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                    <li><button onClick={() => handleNavClick("about")} className="hover:text-blue-600">About</button></li>
                    <li><button onClick={() => handleNavClick("skills")} className="hover:text-blue-600">Skills</button></li>
                    <li><button onClick={() => handleNavClick("education")} className="hover:text-blue-600">Education</button></li>
                    <li><button onClick={() => handleNavClick("experience")} className="hover:text-blue-600">Experience</button></li>
                    <li><button onClick={() => handleNavClick("projects")} className="hover:text-blue-600">Projects</button></li>
                    <li><button onClick={() => handleNavClick("contact")} className="hover:text-blue-600">Contact</button></li>

                    {/* Routed Pages */}
                    
                    <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
                    <li><Link to="/my-space" className="hover:text-blue-600">My Space</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
                    &#9776;
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center text-white">
                    <button className="absolute top-5 right-5 text-4xl" onClick={() => setIsOpen(false)}>
                        &times;
                    </button>
                    <ul className="space-y-6 text-xl">
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><button onClick={() => handleNavClick("about")} className="cursor-pointer">About</button></li>
                        <li><button onClick={() => handleNavClick("skills")} className="cursor-pointer">Skills</button></li>
                        <li><button onClick={() => handleNavClick("education")} className="cursor-pointer">Education</button></li>
                        <li><button onClick={() => handleNavClick("experience")} className="cursor-pointer">Experience</button></li>
                        <li><button onClick={() => handleNavClick("projects")} className="cursor-pointer">Projects</button></li>
                        <li><button onClick={() => handleNavClick("contact")} className="cursor-pointer">Contact</button></li>

                        {/* Routed Pages */}
                        
                        <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
                        <li><Link to="/my-space" onClick={() => setIsOpen(false)}>My Space</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
