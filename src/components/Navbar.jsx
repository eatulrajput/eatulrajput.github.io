import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "/logo.gif";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (section) => {
        if (location.pathname !== "/") {
            navigate("/");

            const waitForElement = () => {
                const el = document.getElementById(section);
                if (el) {
                    scroll.scrollTo(el.offsetTop - 100, {
                        duration: 500,
                        smooth: "easeInOutQuad",
                    });
                } else {
                    setTimeout(waitForElement, 100);
                }
            };

            setTimeout(waitForElement, 300);
        } else {
            const el = document.getElementById(section);
            if (el) {
                scroll.scrollTo(el.offsetTop - 100, {
                    duration: 500,
                    smooth: "easeInOutQuad",
                });
            }
        }
        setIsOpen(false);
    };

    const sectionLinks = [
        { label: "Home", section: "hero" },
        { label: "About", section: "about" },
        { label: "Skills", section: "skills" },
        { label: "Education", section: "education" },
        { label: "Experience", section: "experience" },
        { label: "Projects", section: "projects" },
        { label: "Contact", section: "contact" },
    ];

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
                    {sectionLinks.map(({ label, section }) => (
                        <li key={section}>
                            {location.pathname === "/" ? (
                                <ScrollLink
                                    to={section}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    activeClass="bg-blue-600 text-white font-semibold rounded-l px-4 py-2 border border-blue-600"
                                    className="cursor-pointer px-4 py-2 transition-colors duration-300 rounded-l hover:bg-blue-600 hover:text-white hover:border hover:border-blue-600"

                                >
                                    {label}
                                </ScrollLink>
                            ) : (
                                <button
                                    onClick={() => handleNavClick(section)}
                                    className="cursor-pointer hover:text-blue-600"
                                >
                                    {label}
                                </button>
                            )}
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/blog"
                            className={`px-4 py-2 rounded-l transition-colors duration-300 hover:bg-blue-600 hover:text-white hover:border hover:border-blue-600 ${location.pathname === "/blog"
                                ? "bg-blue-600 text-white font-semibold border border-blue-600"
                                : ""
                                }`}
                        >
                            Blog
                        </Link>

                    </li>
                    <li>
                        <Link
                            to="/my-space"
                            className={`px-4 py-2 rounded-l transition-colors duration-300 hover:bg-blue-600 hover:text-white hover:border hover:border-blue-600 ${location.pathname === "/my-space"
                                ? "bg-blue-600 text-white font-semibold border border-blue-600"
                                : ""
                                }`}
                        >
                            My Space
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl cursor-pointer p-2 hover:bg-zinc-200 rounded-full hover:rotate-90 transition-transform ease-in-out"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    &#9776;
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center text-white z-50">
                    {/* Close Button */}
                    <button
                        aria-label="Close"
                        className="absolute top-5 right-5 text-4xl text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 transition-transform transform hover:rotate-90 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>

                    <ul className="space-y-4 text-xl text-center">
                        {/* Routed Pages */}
                        {[
                            { label: "Home", path: "/" },
                            { label: "Blog", path: "/blog" },
                            { label: "My Space", path: "/my-space" },
                        ].map(({ label, path }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block w-full px-4 py-2 rounded-md transition-colors duration-300 ${location.pathname === path
                                            ? "bg-blue-600 text-white font-semibold border border-blue-600"
                                            : "hover:bg-blue-600 hover:text-white hover:border hover:border-blue-600"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}

                        {/* Section Scroll Buttons */}
                        {sectionLinks.map(({ label, section }) => (
                            <li key={section}>
                                {location.pathname === "/" ? (
                                    <ScrollLink
                                        to={section}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-100}
                                        activeClass="bg-blue-600 text-white font-semibold border border-blue-600"
                                        className="block w-full px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-600 hover:text-white hover:border hover:border-blue-600 cursor-pointer"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {label}
                                    </ScrollLink>
                                ) : (
                                    <button
                                        onClick={() => handleNavClick(section)}
                                        className="block w-full px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-600 hover:text-white hover:border hover:border-blue-600"
                                    >
                                        {label}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
