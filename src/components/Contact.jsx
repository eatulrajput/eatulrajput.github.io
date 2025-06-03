import ContactSign from "/contact.svg";
import socialMedia from "/social-media.svg";
const Contact = () => {
    return (
        <div id="contact" className="py-16 px-6 bg-blue-50 text-gray-800">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
                        <i className="fa-solid fa-handshake "></i> Get In Touch
                    </h2>
                </div>

                {/* Contact Section Grid */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Section - Contact Form & Image */}
                    <div className="flex flex-col items-center">
                        <img
                            src={ContactSign}
                            alt="Contact Illustration"
                            className="w-3xl mb-6"
                        />




                        <iframe
                            className="w-full h-[600px] border-2 border-blue-300 rounded-lg shadow-md"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfFaDSA_2XVpIo1gbO7fz6o7-bbUhNozNk0Ri8kjw626vZQKg/viewform?embedded=true"
                            title="Contact Form"
                        >
                            Loading…
                        </iframe>
                    </div>

                    {/* Right Section - Social Media Links */}
                    <div className="flex flex-col items-center">
                        <p className="text-2xl mb-4">Hey! Let's connect...</p>

                        <div className="flex gap-4 text-blue-600 text-5xl md:flex-1/2 flex-wrap justify-evenly items-center">
                            <a
                                href="mailto:eatulrajput@gmail.com"
                                className="hover:text-blue-800 transition hover:bg-blue-100 p-4 rounded-full"
                            >
                                <i className="fa-regular fa-envelope transition-transform duration-300 ease-in-out transform hover:scale-110"></i>
                            </a>

                            <a href="https://github.com/eatulrajput/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition hover:bg-blue-100 p-4 rounded-full">
                                <i className="fa-brands fa-github transition-transform duration-300 ease-in-out transform hover:scale-110"></i>
                            </a>
                            <a href="https://discord.com/users/1140188543252172922" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition hover:bg-blue-100 p-4 rounded-full">
                                <i className="fa-brands fa-discord transition-transform duration-300 ease-in-out transform hover:scale-110"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/eatulrajput/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition hover:bg-blue-100 p-4 rounded-full">
                                <i className="fa-brands fa-linkedin-in transition-transform duration-300 ease-in-out transform hover:scale-110"></i>
                            </a>
                            <a href="https://medium.com/@eatulrajput" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition hover:bg-blue-100 p-4 rounded-full">
                                <i className="fa-brands fa-medium transition-transform duration-300 ease-in-out transform hover:scale-110"></i>
                            </a>
                        </div>

                        <img
                            src={socialMedia}
                            alt="Social Media Illustration"
                            className="w-3xl mt-6"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
