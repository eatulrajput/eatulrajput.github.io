import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Masonry from "react-masonry-css";


// Project Information
const projects = [
    {
        id: 1,
        category: 'Frontend',
        title: "Profile Card Template",
        tech: "HTML, CSS, JavaScript",
        desc: "This project is a profile card showcasing the basics of frontend development.",
        liveLink: "https://eatulrajput-profile-card.netlify.app/",
        codeLink: "https://github.com/eatulrajput/profile-card",
        image: "card.webp",
    },
    {
        id: 2,
        category: 'Frontend',
        title: "Stack Sync",
        tech: "HTML, CSS",
        desc: "This project is where I kept my all profile links.",
        liveLink: "https://atulrajput.netlify.app/",
        codeLink: "https://github.com/eatulrajput/profile-card-2",
        image: "card.webp",
    },
    {
        id: 3,
        category: 'Frontend',
        title: "Weather Website",
        tech: "HTML, CSS, JavaScript, Rapid API",
        desc: "Google Solution Challenge 2024 project: This project is a Weather website fetching data through weather API.",
        liveLink: "https://eatulrajput-weather.netlify.app/",
        codeLink: "https://github.com/eatulrajput/weather-website",
        image: "weather.webp",
    },

    {
        id: 4,
        category: 'IoT',
        title: "IIoT Group Project",
        tech: "NodeMCU(ESP8266), Ultrasonic Sensor, Arduino IDE",
        desc: "College project developed within team members.",
        liveLink: "https://team-project1.netlify.app/",
        codeLink: "https://github.com/eatulrajput/cyberphysics-in-iiot-project",
        image: "card.webp",
    },

    {
        id: 5,
        category: 'Game Development',
        title: "Break Out Game",
        tech: "Java, Python",
        desc: "College project developed within team members.",
        liveLink: "https://break-out-game-project.netlify.app/",
        codeLink: "https://github.com/eatulrajput/Break-Out-Game",
        image: "card.webp",
    },

    {
        id: 6,
        category: 'AI / ML',
        title: "Face Track",
        tech: "Python, OpenCV",
        desc: "It is a face recognition attendance system  designed to track student attendance...",
        liveLink: "#",
        codeLink: "https://github.com/eatulrajput/face-track",
        image: "card.webp",
    },

    {
        id: 7,
        category: 'Hackathon',
        title: "Community Mapping for Resilience",
        tech: "NASA Earth Observations, JavaScript, Google Maps API",
        desc: "NASA Space Apps Challenge 2024 team project",
        liveLink: "https://event-horizon-team.netlify.app/",
        codeLink: "https://github.com/Sahi1l-Kumar/dharavi-web-map",
        image: "community.webp",
    },

    {
        id: 8,
        category: 'AI / ML',
        title: "Coffee Chatbot",
        tech: "Python, Streamlit, Gemini",
        desc: "a conversational chatbot interface ",
        liveLink: "https://coffeechatbot.streamlit.app/",
        codeLink: "https://github.com/eatulrajput/coffee-chat-bot",
        image: "coffeechatbot.webp",
    },

    {
        id: 9,
        category: 'Full Stack',
        title: "Task Master",
        tech: "Python, Django",
        desc: "Taskmaster is a todo app made in Django",
        liveLink: "",
        codeLink: "https://github.com/eatulrajput/taskmaster",
        image: "card.webp",
    },
    
    {
        id: 10,
        category: 'AI / ML',
        title: "Harmonybot",
        tech: "Python, Streamlit, Perspective API",
        desc: "An AI-powered tool developed to detect and mitigate offensive language",
        liveLink: "https://offensive-lang-detection.streamlit.app/",
        codeLink: "https://github.com/eatulrajput/offensive-lang-detection",
        image: "harmonybot.webp",
    },

    {
        id: 11,
        category: 'AI / ML',
        title: "Finfy",
        tech: "Python, Flask, Logistic Regression",
        desc: "Finfy is an AI-powered interface that checks the loan eligibility using machine learning",
        liveLink: "https://finfy-app-04of.onrender.com/",
        codeLink: "https://github.com/eatulrajput/finfy-app",
        image: "minorproject.webp",
    },
];

const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // animation duration
            once: true, // animate only once
        });
    }, []);

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

return (
        <div id="projects" className="py-16 px-6 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
                        <i className="fa-solid fa-list-check"></i> My Projects
                    </h2>
                </div>

                {/* Masonry Grid */}
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-6"
                    columnClassName="masonry-column"
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 mb-6"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            {/* Project Image */}
                            <div className="overflow-hidden">
                                <div
                                    className="h-64 w-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110 rounded-t-lg cursor-pointer"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-5 relative">
                                <p className="absolute text-blue-500 text-6xl font-extrabold opacity-10 select-none right-2 top-2">
                                    {project.id}
                                </p>
                                <h3 className="text-xl font-semibold text-zinc-500">{project.category}</h3>
                                <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
                                <p className="text-gray-500 text-lg">{project.tech}</p>
                                <p className="text-black mt-2 text-lg">{project.desc}</p>

                                {/* Buttons */}
                                <div className="flex justify-between mt-4">
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                        >
                                            Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    )}
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
                                    >
                                        Code <i className="fa-solid fa-code"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </div>
        </div>
    );
};

export default Projects;