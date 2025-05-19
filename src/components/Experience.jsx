import React from "react";

const experiences = [
  {
    title: "GirlScript Summer of Code 2024",
    role: "Open Source Contributor",
    description:
      "Contributed to open-source projects, enhancing their functionality and addressing real-world challenges. Collaborated with developers and mentors, improving coding skills and learning best practices. Gained hands-on experience with Git and GitHub. Earned a certificate of completion for contributions.",
    date: "May 2024 - Aug 2024",
    image: "https://raw.githubusercontent.com/girlscript/gssoc-assets/refs/heads/main/Logos/GS_logo_Black.png",
  },
  {
    title: "Hacktoberfest 2023",
    role: "Open Source Contributor",
    description:
      "Worked as an open-source contributor during Hacktoberfest 2023. Created a portfolio website using ReactJS.",
    date: "Oct 2023 - Oct 2023",
    image: "https://cdn.bsky.app/img/avatar/plain/did:plc:5kc3hem3ybfs6uy4vamw44d5/bafkreidiofbkictqxvebxnzntkegq5wp5qxv7fa3djkmjui6nyiirmp73m@jpeg",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
            <i className="fa-solid fa-briefcase mr-2"></i> Work Experience
          </h2>
          <p className="text-gray-600 mt-2">
            A journey of continuous learning and contribution.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105 hover:shadow-xl"
            >
              {/* Image */}
              <div className="md:w-1/3 flex-shrink-0">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-2/3 mt-4 md:mt-0 md:ml-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {exp.title}
                </h3>
                <h4 className="text-lg text-blue-600 mt-1">{exp.role}</h4>
                <p className="text-gray-600 mt-2">{exp.description}</p>
                <span className="block mt-3 text-lg text-gray-500">
                  <i class="fa-regular fa-calendar"></i> {exp.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
