import React from "react";

const experiences = [

  {
    title: "Keploy API Fellowship 2025",
    role: "API Fellow",
    description:
      "Learnt about Open Source, Licensing, Testing, GitHub Actions, API Development, also Introduced to LLM models and Built a Unit Tester based on LLM",
    date: "June 2025 - July 2025",
    image: "https://keploy.io/docs/img/keploy-logo-dark.svg",
  },


  {
    title: "GirlScript Summer of Code 2024",
    role: "Open Source Contributor",
    description:
      "Contributed to open-source projects, enhancing functionality and solving real-world issues. Collaborated with mentors, gained experience with Git/GitHub, and earned a certificate of completion.",
    date: "May 2024 - Aug 2024",
    image: "https://raw.githubusercontent.com/girlscript/gssoc-assets/refs/heads/main/Logos/GS_logo_Black.png",
  },
  {
    title: "Hacktoberfest 2023",
    role: "Open Source Contributor",
    description:
      "Worked on open-source during Hacktoberfest 2023. Built a portfolio website using ReactJS, improving collaboration skills and version control.",
    date: "Oct 2023 - Oct 2023",
    image: "https://cdn.bsky.app/img/avatar/plain/did:plc:5kc3hem3ybfs6uy4vamw44d5/bafkreidiofbkictqxvebxnzntkegq5wp5qxv7fa3djkmjui6nyiirmp73m@jpeg",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 flex items-center justify-center gap-3 mt-32">
            <i className="fa-solid fa-briefcase"></i> Work Experience
          </h2>
          <p className="text-gray-400 mt-2 text-base">
            A journey of contribution, learning, and collaboration.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              {/* Logo/Image */}
              <img
                src={exp.image}
                alt={exp.title}
                className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-lg drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <p className="text-blue-400 font-medium mt-1">{exp.role}</p>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">{exp.description}</p>
                <p className="text-gray-400 text-sm mt-4 flex items-center gap-2">
                  <i className="fa-regular fa-calendar text-blue-300"></i>
                  {exp.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
