import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const projects = [
    {
        id: 1,
        title: "Profile Card Template",
        tech: "HTML, CSS, JavaScript",
        desc: "This project is a profile card showcasing the basics of frontend development.",
        liveLink: "https://eatulrajput-profile-card.netlify.app/",
        codeLink: "https://github.com/eatulrajput/profile-card",
        image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHwwfDB8fHwy",
    },
    {
        id: 2,
        title: "Stack Sync",
        tech: "HTML, CSS",
        desc: "This project is where I kept my all profile links.",
        liveLink: "https://atulrajput.netlify.app/",
        codeLink: "https://github.com/eatulrajput/profile-card-2",
        image: "https://plus.unsplash.com/premium_photo-1720551256983-445d23d516b2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Weather Website",
        tech: "HTML, CSS, JavaScript, Rapid API",
        desc: "Google Solution Challenge 2024 project: This project is a Weather website fetching data through weather API.",
        liveLink: "https://eatulrajput-weather.netlify.app/",
        codeLink: "https://github.com/eatulrajput/weather-website",
        image: "https://media.istockphoto.com/id/1391882784/photo/lightning-strike-thunderstorm-weather-icon.jpg?s=612x612&w=0&k=20&c=6sea4Z53w5Uw0BitFm1bd8MjXErDpR7tAuLP7BFsC1I=",
    },

    {
        id: 4,
        title: "IIoT Group Project",
        tech: "NodeMCU(ESP8266), Ultrasonic Sensor, Arduino IDE",
        desc: "College project developed within team members.",
        liveLink: "https://team-project1.netlify.app/",
        codeLink: "https://github.com/eatulrajput/cyberphysics-in-iiot-project",
        image: "images/team_project_1.webp",
    },

    {
        id: 5,
        title: "Break Out Game",
        tech: "Java, Python",
        desc: "College project developed within team members.",
        liveLink: "https://break-out-game-project.netlify.app/",
        codeLink: "https://github.com/eatulrajput/Break-Out-Game",
        image: "images/team_project_2.webp",
    },

    {
        id: 6,
        title: "Face Track",
        tech: "Python, OpenCV",
        desc: "It is a face recognition attendance system  designed to track student attendance...",
        // liveLink: "https://break-out-game-project.netlify.app/",
        codeLink: "https://github.com/eatulrajput/face-track",
        image: "https://images.pexels.com/photos/8090303/pexels-photo-8090303.jpeg",
    },

    {
        id: 7,
        title: "Community Mapping for Resilience",
        tech: "NASA Earth Observations, JavaScript, Google Maps API",
        desc: "NASA Space Apps Challenge 2024 team project",
        liveLink: "https://event-horizon-team.netlify.app/",
        codeLink: "https://github.com/Sahi1l-Kumar/dharavi-web-map",
        image: "https://images.pexels.com/photos/2879841/pexels-photo-2879841.jpeg",
    },

    {
        id: 8,
        title: "Calculator App",
        tech: "Java, Android Studio",
        desc: "A basic calculator app developed in Java",
        liveLink: "#",
        codeLink: "",
        image: "https://developer.android.com/static/images/brand/android-head_3D.svg",
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
                                    className="h-full w-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110 rounded-t-lg hover:cursor-pointer"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>
                            </div>


                            {/* Project Info */}
                            <div className="p-5">


                                {/* Showing No. of project */}

                                {/* <p className="absolute text-blue-500 text-6xl font-extrabold opacity-60 z-10 select-none right-1">
                                    {project.id}
                                </p> */}

                                <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
                                <p className="text-gray-500 text-lg">{project.tech}</p>
                                <p className="text-black mt-2 text-lg">{project.desc}</p>

                                {/* Buttons */}
                                <div className="flex justify-between mt-4">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                    >
                                        Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
                                    >
                                        Code <i class="fa-solid fa-code"></i>
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
