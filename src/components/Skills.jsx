import { FaHtml5, FaCss3, FaJava, FaPython, FaJs, FaDatabase, FaGit, FaGithub, FaLinux, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { PiCode} from "react-icons/pi";
import { SiDjango, SiFlask } from "react-icons/si";

const skillData = {
    Languages: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "C Programming", icon: <PiCode className="text-gray-700" /> },
        { name: "SQL", icon: <FaDatabase className="text-blue-700" /> },
    ],
    "Tools & Tech": [
        { name: "Git", icon: <FaGit className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
        { name: "MySQL", icon: <GrMysql className="text-blue-700" /> },
        { name: "Linux", icon: <FaLinux className="text-black" /> },
    ],
    Frameworks: [
        { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
        { name: "Django", icon: <SiDjango className="text-green-900" /> },
        { name: "Flask", icon: <SiFlask /> }, // ✅ Using React Icon
    ],
};


const Skills = () => {
    return (
        <div
            id="skills"
            className="py-20 px-6 bg-gradient-to-br from-blue-100/60 to-blue-200/30 text-gray-800"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-4">
                        <i className="fa-solid fa-code text-4xl"></i> My Skills
                    </h2>
                </div>

                {/* Skill Categories */}
                {Object.entries(skillData).map(([category, skills]) => (
                    <div key={category} className="mb-12">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-3">
                            <i className="fa-solid fa-circle-dot text-blue-500"></i>
                            {category}
                        </h3>

                        {/* Skill Cards in Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-5 shadow-md border border-gray-200 flex flex-col items-center text-center transition-transform duration-200 hover:scale-120 cursor-pointer"
                                >
                                    <div className="text-5xl mb-3 ">{skill.icon}</div>
                                    <span className="text-lg font-medium text-gray-800">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
