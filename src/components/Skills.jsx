import React from "react";

// Skills data
const skillsData = [
    {
        category: "Languages",
        iconClass: "fa-brands fa-html5 text-orange-500",
        name: "HTML",
    },
    {
        category: "Languages",
        iconClass: "fa-brands fa-css3 text-blue-500",
        name: "CSS",
    },
    {
        category: "Languages",
        iconClass: "fa-brands fa-java text-red-600",
        name: "Java",
    },
    {
        category: "Languages",
        iconClass: "fa-brands fa-python text-yellow-500",
        name: "Python",
    },
    {
        category: "Languages",
        iconClass: "fa-brands fa-js text-yellow-400",
        name: "JavaScript",
    },
    {
        category: "Languages",
        iconClass: "fa-solid fa-code text-gray-700",
        name: "C Programming",
    },
    {
        category: "Languages",
        iconClass: "fa-solid fa-database text-blue-700",
        name: "SQL",
    },
    {
        category: "Tools & Technologies",
        iconClass: "fa-brands fa-git text-red-500",
        name: "Git",
    },
    {
        category: "Tools & Technologies",
        iconClass: "fa-brands fa-github text-gray-900",
        name: "GitHub",
    },
    {
        category: "Tools & Technologies",
        iconClass: "fa-solid fa-database text-blue-700",
        name: "MySQL",
    },
    {
        category: "Tools & Technologies",
        iconClass: "fa-brands fa-linux text-black",
        name: "Linux",
    },
    {
        category: "Frameworks",
        iconClass: "fa-brands fa-react text-blue-400",
        name: "ReactJS",
    },
    {
        category: "Frameworks",
        iconClass: "fa-solid fa-leaf text-green-600",
        name: "Django",
    },
    {
        category: "Frameworks",
        iconClass: "fa-solid fa-fire text-red-500",
        name: "Flask",
    },
];

const Skills = () => {
    return (
        <div id="skills" className="py-16 px-6 bg-black text-gray-800">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
                        <i className="fa-solid fa-code"></i> My Skills
                    </h2>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative p-5 rounded-2xl shadow-xl bg-gradient-to-tl from-black to-blue-900 backdrop-blur-lg transition duration-600 md:hover:scale-150 cursor-pointer"
                        >
                            {/* Hover Line Animation */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full transition-all duration-500 group-hover:w-1/2"></div>

                            {/* Skill Icon and Name */}
                            <div className="flex items-center space-x-3 text-white text-lg font-medium mb-2">
                                <i className={`${skill.iconClass} text-2xl`}></i>
                                <span>{skill.name}</span>
                            </div>

                            {/* Skill Category Label */}
                            <p className="text-sm text-blue-400">{skill.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
