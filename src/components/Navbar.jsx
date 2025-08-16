import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }


        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-xl shadow-md z-50 h-20 flex justify-center items-center">

            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <p className="font-thin uppercase font-mono text-3xl">// DEVNEST //</p>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden xl:flex space-x-6 text-gray-300 font-medium text-xl">
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

                    {/* Drop Down menu */}
                    <li className="relative group">
                        <div className="flex items-center space-x-1 px-4 py-0 transition-colors duration-300 hover:bg-blue-600 hover:text-white hover:border hover:border-blue-600 rounded-l cursor-pointer">
                            <span>More</span>
                            <svg
                                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        <ul className="absolute right-0 mt-2 w-40 bg-white/5 backdrop-blur-lg text-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
                            {[
                                { label: "Blog", path: "/blog" },
                                { label: "Nest", path: "/nest" },
                                { label: "Docs", path: "/docs" },
                            ].map(({ label, path }) => (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        className={`block px-4 py-2 hover:bg-white/5 transition ${location.pathname === path ? "font-semibold text-blue-600" : ""
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden text-xl font-extralight cursor-pointer p-2 hover:bg-white/5 rounded-full transition-transform ease-in-out"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Custom SVG icon */}
                    <svg
                        className="w-6 h-6 transition-transform duration-300 ease-in-out hover:rotate-90"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed top-0 left-0 overflow-y-auto w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center text-white z-50">
                    {/* Close Button */}
                    <button
                        aria-label="Close"
                        className="absolute top-5 right-5 text-6xl text-white bg-black transition-transform transform hover:rotate-70 cursor-pointer duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>

                    <ul className="space-y-4 text-xl text-center">


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

                        {/* Routed Pages */}
                        {[
                            { label: "Blog", path: "/blog" },
                            { label: "Nest", path: "/nest" },
                            { label: "Docs", path: "/docs" },
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
                    </ul>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
