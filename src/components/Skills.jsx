import React from "react";

const Skills = () => {

    return (
        <div id="skills" className="py-16 px-6 bg-gradient-to-br from-blue-100/60 to-blue-200/30 text-gray-800">
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
                    <div className="group relative p-6 rounded-2xl shadow-xl bg-white backdrop-blur-lg border border-zinc-50 transition duration-300 hover:scale-[1.02] cursor-pointer">
                        {/* Animated Line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full transition-all duration-500 group-hover:w-1/2"></div>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Languages</h3>

                        <div className="space-y-3 text-lg text-gray-800 font-medium">
                            <p><i className="fa-brands fa-html5 text-orange-500 mr-2"></i> HTML</p>
                            <p><i className="fa-brands fa-css3 text-blue-500 mr-2"></i> CSS</p>
                            <p><i className="fa-brands fa-java text-red-600 mr-2"></i> Java</p>
                            <p><i className="fa-brands fa-python text-yellow-500 mr-2"></i> Python</p>
                            <p><i className="fa-brands fa-js text-yellow-400 mr-2"></i> JavaScript</p>
                            <p><i className="fa-solid fa-code text-gray-700 mr-2"></i> C Programming</p>
                            <p><i className="fa-solid fa-database text-blue-700 mr-2"></i> SQL</p>
                        </div>
                    </div>



                    {/* Tools & Technologies */}
                    <div className="group relative p-6 rounded-2xl shadow-xl bg-white backdrop-blur-lg border border-zinc-50 transition duration-300 hover:scale-[1.02] cursor-pointer">

                        {/* Animated Line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full transition-all duration-500 group-hover:w-1/2"></div>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Tools & Technologies</h3>
                        <div className="space-y-3 text-lg text-gray-800 font-medium">
                            <p><i className="fa-brands fa-git text-red-500 mr-2"></i> Git</p>
                            <p><i className="fa-brands fa-github text-gray-900 mr-2"></i> GitHub</p>
                            <p><i className="fa-solid fa-database text-blue-700 mr-2"></i> MySQL</p>
                            <p><i className="fa-brands fa-linux text-black mr-2"></i> Linux</p>
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="group relative p-6 rounded-2xl shadow-xl bg-white backdrop-blur-lg border border-zinc-50 transition duration-300 hover:scale-[1.02] cursor-pointer">

                        {/* Animated Line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full transition-all duration-500 group-hover:w-1/2"></div>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Frameworks</h3>
                        <div className="space-y-3 text-lg text-gray-800 font-medium">
                            <p><i className="fa-brands fa-react text-blue-400 mr-2"></i> ReactJS</p>
                            <p><i className="fa-solid fa-leaf text-green-600 mr-2"></i> Django</p>
                            <p><i className="fa-solid fa-fire text-red-500 mr-2"></i> Flask</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
