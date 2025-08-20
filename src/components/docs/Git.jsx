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
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const commands = [
    {
      title: "Check Git Version",
      description:
        "This command checks if Git is installed on your computer and shows the current version. It helps you confirm that Git is ready to use.",
      code: "git --version",
    },
    {
      title: "Configure Git (Set Your Name & Email)",
      description:
        "Before you start using Git, you need to tell it who you are. This command sets your email and name globally so that every commit you make includes your identity.",
      code: `git config --global user.email "youremail@example.com"\ngit config --global user.name "Your Name"`,
    },
    {
      title: "View Git Configuration",
      description:
        "This lists all the Git settings on your computer, including your name and email. Use it to double-check your configuration.",
      code: "git config --list",
    },
    {
      title: "Initialize a New Git Repository",
      description:
        "Use this command once in your project folder to start tracking your files with Git. It creates a hidden `.git` folder where Git stores all the version history.",
      code: "git init",
    },
    {
      title: "Check the Status of Your Files",
      description:
        "Shows which files have been changed, which are staged for commit, and which are untracked. It's a helpful way to see what Git is aware of before committing.",
      code: "git status",
    },
    {
      title: "Stage All Changes for Commit",
      description:
        "Adds all the modified, new, or deleted files in your project to the staging area. Only staged files will be included in the next commit.",
      code: "git add .",
    },
    {
      title: "Commit Changes with a Message",
      description:
        "Creates a snapshot of your staged changes. The message should clearly describe what you've done so others (and future you) can understand your work.",
      code: `git commit -m "Your commit message"`,
    },
    {
      title: "View Commit History",
      description:
        "Displays a list of all commits made in the current branch, starting with the most recent. This helps you review changes and track project progress.",
      code: "git log",
    },
    {
      title: "View Commit History in One Line",
      description:
        "Shows a concise version of the commit history, displaying each commit on a single line with its hash and message, making it easier to skim through.",
      code: "git log --oneline",
    },
    {
      title: "Create a New Branch",
      description:
        "Branches let you work on new features or fixes independently without affecting the main code. This command creates a new branch but doesn't switch to it.",
      code: "git branch new-branch",
    },
    {
      title: "Switch to Another Branch",
      description:
        "Use this to switch your working directory to another branch, so you can work on different versions of your project.",
      code: "git checkout new-branch",
    },
    {
      title: "Create and Switch to a New Branch",
      description:
        "This command creates a new branch and immediately switches to it, so you can start working there right away.",
      code: "git checkout -b new-branch",
    },
    {
      title: "Connect Your Local Repo to GitHub",
      description:
        "Link your local Git repository to a remote repository hosted on GitHub. This allows you to push and pull code between your computer and GitHub.",
      code: "git remote add origin https://github.com/your-username/your-repo.git",
    },
    {
      title: "Push Your Code to GitHub (First Time)",
      description:
        "Send your committed changes to GitHub. The `-u` flag sets the remote branch as the default for future pushes and pulls.",
      code: "git push -u origin main",
    },
    {
      title: "Clone a Repository from GitHub",
      description:
        "Download a copy of a GitHub repository to your local computer so you can work on it.",
      code: "git clone https://github.com/username/repo.git",
    },
    {
      title: "Pull Latest Changes from GitHub",
      description:
        "Fetch and merge the latest changes from the remote GitHub repository into your current branch.",
      code: "git pull",
    },
    {
      title: "Create a Git Tag",
      description:
        "Tags are used to mark specific points in history as important, like version releases.",
      code: "git tag v1.0",
    },
    {
      title: "Stash Your Changes",
      description:
        "If you need to switch branches but aren't ready to commit, stash saves your changes temporarily so you can apply them later.",
      code: "git stash",
    },
    {
      title: "List All Stashes",
      description:
        "View all the saved stashes you've made so far.",
      code: "git stash list",
    },
    {
      title: "Apply Last Stash",
      description:
        "Bring back the changes you saved with stash to your working directory.",
      code: "git stash apply",
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
          Learn essential Git commands with detailed explanations. Perfect for beginners.
        </p>

        <h3 className="text-3xl font-semibold text-left mb-6">Welcome</h3>

        <h2 className="text-2xl mb-6 font-semibold">About Git & GitHub</h2>
        <p className="mb-6 text-lg text-gray-300">
          Git is a tool that helps you keep track of changes in your code, so you can work safely and collaborate with others. GitHub is a platform that lets you store your Git repositories online and work with others on the same project.
        </p>

        <h2 className="text-2xl mb-6 font-semibold">How to Learn Git?</h2>
        <ul className="list-disc text-lg text-gray-300 mb-6 pl-6">
          <li>Start with the basics and common commands.</li>
          <li>Practice regularly on your own projects.</li>
          <li>Don't be afraid to make mistakes — learn from them!</li>
          <li>Explore branching and collaboration features as you progress.</li>
        </ul>

        <h2 className="text-2xl mb-6 font-semibold">Terminologies</h2>
        <ul className="list-disc text-lg text-gray-300 mb-10 pl-6">
          <li><strong>Repository:</strong> The project folder tracked by Git.</li>
          <li><strong>Commit:</strong> A snapshot of your code changes.</li>
          <li><strong>Branch:</strong> A separate line of development.</li>
          <li><strong>Merge:</strong> Combining changes from different branches.</li>
          <li><strong>Remote:</strong> A copy of your repository hosted online (e.g., GitHub).</li>
          <li><strong>Clone:</strong> Copying a remote repository to your computer.</li>
          <li><strong>Push:</strong> Sending your commits to the remote repo.</li>
          <li><strong>Pull:</strong> Getting updates from the remote repo.</li>
          <li><strong>Stash:</strong> Temporarily saving your changes without committing.</li>
        </ul>

        <div className="mt-14 space-y-8 max-w-4xl mx-auto mb-14">
          {commands.map((cmd, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-black/80 border-l border-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {cmd.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{cmd.description}</p>

              <div className="relative group">
                <pre className="bg-black/40 text-xl text-white rounded-md p-4 overflow-x-auto border border-gray-800 whitespace-pre-wrap">
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
