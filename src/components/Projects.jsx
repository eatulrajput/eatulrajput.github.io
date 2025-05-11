import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const projects = [
    {
        id: 1,
        title: "Profile Card 1",
        tech: "HTML, CSS, JavaScript",
        desc: "This project is a profile card showcasing the basics of frontend development.",
        liveLink: "https://eatulrajput-profile-card.netlify.app/",
        codeLink: "https://github.com/eatulrajput/profile-card",
        image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHwwfDB8fHwy",
    },
    {
        id: 2,
        title: "Sync-Link",
        tech: "HTML, CSS",
        desc: "This project is a profile card showcasing the basics of frontend development.",
        liveLink: "https://atulrajput.netlify.app/",
        codeLink: "https://github.com/eatulrajput/profile-card-2",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Weather Website",
        tech: "HTML, CSS, JavaScript, Rapid API",
        desc: "This project is a Weather website fetching data through weather API.",
        liveLink: "https://eatulrajput-weather.netlify.app/",
        codeLink: "https://github.com/eatulrajput/weather-website",
        image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYXRoZXJ8ZW58MHwwfDB8fHwy",
    },

    {
        id: 4,
        title: "College Project: IIoT Group Project",
        tech: "NodeMCU(ESP8266), Ultrasonic Sensor, Arduino IDE",
        desc: "College project developed within team members.",
        liveLink: "https://team-project1.netlify.app/",
        codeLink: "https://github.com/eatulrajput/cyberphysics-in-iiot-project",
        image: "images/team_project_1.png",
    },

    {
        id: 4,
        title: "College Project: Break Out Game",
        tech: "Java, Python",
        desc: "College project developed within team members.",
        liveLink: "https://break-out-game-project.netlify.app/",
        codeLink: "https://github.com/eatulrajput/Break-Out-Game",
        image: "images/team_project_2.png",
    },
];

const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // animation duration
            once: true, // animate only once
        });
    }, []);

    return (
        <div id="projects" className="py-16 px-6 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
                        <i className="fa-solid fa-list-check"></i> My Projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100} // Adds a staggered animation effect
                        >
                            {/* Project Image */}
                            <div className="overflow-hidden h-48">
                                <div
                                    className="h-full w-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110 rounded-t-lg"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>
                            </div>


                            {/* Project Info */}
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
                                <p className="text-gray-500 text-sm">{project.tech}</p>
                                <p className="text-gray-600 mt-2">{project.desc}</p>

                                {/* Buttons */}
                                <div className="flex justify-between mt-4">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
