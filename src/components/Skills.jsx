import React from "react";

const Skills = () => {
    return (
        <div id="skills" className="py-16 px-6 bg-blue-50 text-gray-800">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
                        <i className="fa-solid fa-code"></i> My Skills
                    </h2>
                </div>

                {/* Skills Section */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Languages */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Languages</h3>
                        <div className="space-y-3 text-black text-xl">
                            <p><i className="fa-brands fa-html5 text-orange-500"></i> HTML</p>
                            <p><i className="fa-brands fa-css3 text-blue-500"></i> CSS</p>
                            <p><i className="fa-brands fa-java text-red-600"></i> Java</p>
                            <p><i className="fa-brands fa-python text-yellow-500"></i> Python</p>
                            <p><i className="fa-brands fa-js text-yellow-400"></i> JavaScript</p>
                            <p>C Programming</p>
                            <p>SQL</p>
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Tools & Technologies</h3>
                        <div className="space-y-3 text-black text-xl">
                            <p><i className="fa-brands fa-git text-red-500"></i> Git</p>
                            <p><i className="fa-brands fa-github text-gray-900"></i> GitHub</p>
                            <p><i className="fa-solid fa-database text-blue-700"></i> MySQL</p>
                            <p><i className="fa-brands fa-linux text-black"></i> Linux</p>
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Frameworks</h3>
                        <div className="space-y-3 text-black text-xl">
                            <p><i className="fa-brands fa-react text-blue-400"></i> ReactJS</p>
                            <p>Django</p>
                            <p>Flask</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
