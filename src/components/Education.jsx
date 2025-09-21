import University from "/college.svg";
import School from "/school.svg";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 flex items-center justify-center gap-3 mt-32">
            <i className="fa-solid fa-book-open-reader"></i> My Education
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* University */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-blue-500 transition duration-300 ease-in-out group">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-6">
              <img
                src={University}
                alt="University"
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg transition duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Kalinga Institute of Technology</h3>
                <p className="text-sm text-gray-400 mb-1">Bachelor of Technology</p>
                <p className="text-sm text-gray-400 mb-1">Electronics and Computer Science</p>
                <p className="text-sm text-gray-400 mb-1">2022 - 2026</p>
                <p className="text-sm text-gray-300 font-semibold">CGPA: 7.31</p>
              </div>
            </div>
          </div>

          {/* School */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-blue-500 transition duration-300 ease-in-out group">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-6">
              <img
                src={School}
                alt="School"
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg transition duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Gurukul Vidyapeeth</h3>
                <p className="text-sm text-gray-400 mb-1">Class 12th – 2021</p>
                <p className="text-sm text-gray-300 font-semibold mb-2">80.6%</p>
                <p className="text-sm text-gray-400 mb-1">Class 10th – 2019</p>
                <p className="text-sm text-gray-300 font-semibold">77.2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
