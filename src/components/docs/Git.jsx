import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";

const Git = () => {
  const [copiedCommand, setCopiedCommand] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleCopy = (command) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);

    setTimeout(() => {
      setCopiedCommand(null);
    }, 2000);
  };

  const commands = [
    {
      title: "git --version",
      description: "To check the git version present in your system",
      code: "git --version",
    },

    {
      // Title of the guide
      title: "How to configure Git",

      // Description for first-time Git setup
      description: "You need to configure Git for using it first time in the system",


      // Command to set Git user email and name
      code: `git config --global user.email "youremail@example.com"
git config --global user.name "Your Name"`,

      title: "How to configure Git",

      // Description for first-time Git setup
      description: "You need to configure Git for using it first time in the system",


      // Command to set Git user email and name
      code: `git config --global user.email "youremail@example.com"
git config --global user.name "Your Name"`,
    },

    {
      title: "How to check the configuration settings",
      description: "To list user email and name set during Git Configuration",
      code: "git config --list",
    },


    {
      title: "git init",
      description: "Initialize a new Git repository in your current directory.",
      code: "git init",
    },
    {
      title: "git add .",
      description: "Stage all changes in the current directory for the next commit.",
      code: "git add .",
    },

  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-tr from-black to-gray-950 px-14">
        <h1
          data-aos="fade-up"
          className="text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-950 via-white to-gray-950 mb-6 mt-30"
        >
          Git & GitHub
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-6"
        >
          Learn essential Git commands with explanations. Built for developers of all levels.
        </p>

        <h3 className="text-3xl font-semibold text-left mb-6"
        >Welcome</h3>

        <h2 className="text-2xl mb-6 font-semibold">About Git & GitHub</h2>
        <p className="mb-6 text-lg">
          Git is a software and GitHub is a service to host it online. It is a version control system which allows us to track changes in files and folders

          Git creates checkpoints for the changes you make while doing.

          It tracks the changes.

          It was not the only services which were used. There were proprietary softwares there before git.

        </p>

        <h2 className="text-2xl mb-6 font-semibold">How to learn?</h2>

        <p className="mb-6 text-lg">

          <ul className="list-none leading-8">
            <li>Know the Basics.</li>
            <li>Use in your projects and keep in practice.</li>
            <li>Face the problems and keep solving them.</li>
            <li>Keep Learning more...</li>
          </ul>
        </p>

        <h2 className="text-2xl mb-6 font-semibold">Terminologies</h2>


        <div className="mt-14 space-y-8 max-w-4xl mx-auto mb-14">
          {commands.map((cmd, index) => (
            <div
              key={cmd.code}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-black/80 border-l border-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {cmd.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{cmd.description}</p>

              <div className="relative group">
                <pre className="bg-black/40 text-xl text-white rounded-md p-4 overflow-x-auto border border-gray-800">
                  <code>{cmd.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(cmd.code)}
                  className="absolute top-2 right-2 bg-gray-700 text-white text-s px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  {copiedCommand === cmd.code ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Git;
