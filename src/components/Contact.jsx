const Contact = () => {
  return (
    <section id="contact" className="h-200 py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 flex items-center justify-center gap-3 mt-32">
          <i className="fa-solid fa-handshake"></i> Get In Touch
        </h2>
        <p className="text-gray-400 text-lg mt-4">
          Feel free to reach out via email or connect on LinkedIn.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-5xl mt-10">
          {[
            {
              href: "mailto:eatulrajput@gmail.com",
              icon: "fa-regular fa-envelope",
              label: "Email",
            },
            {
              href: "https://github.com/eatulrajput/",
              icon: "fa-brands fa-github",
              label: "GitHub",
            },
            {
              href: "https://discord.com/users/1140188543252172922",
              icon: "fa-brands fa-discord",
              label: "Discord",
            },
            {
              href: "https://www.linkedin.com/in/eatulrajput/",
              icon: "fa-brands fa-linkedin-in",
              label: "LinkedIn",
            },
            {
              href: "https://medium.com/@eatulrajput",
              icon: "fa-brands fa-medium",
              label: "Medium",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-110 hover:bg-gradient-to-tl from-black to-blue-900 transition-all duration-300 shadow-sm hover:shadow-blue-400/30"
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
