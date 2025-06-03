import University from "../../public/college.svg";
import School from "../../public/school.svg";

const Education = () => {
  return (
    <section id="education" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
            <i className="fa-solid fa-book-open-reader"></i> My Education
          </h2>
        </div>

        {/* Education Section */}
        <div className="grid gap-8">
          {/* University Education */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition duration-300">
            <img
              src={University}
              alt="University"
              className="w-32 md:w-40 h-32 md:h-40 object-contain"
            />
            <div className="text-gray-700 text-left text-xl">
              <p><strong className="text-blue-600">University:</strong> Kalinga Institute of Technology</p>
              <p><strong className="text-blue-600">Course:</strong> Bachelor of Technology</p>
              <p><strong className="text-blue-600">Specialization:</strong> Electronics and Computer Science</p>
              <p><strong className="text-blue-600">Year:</strong> 2022 - 2026</p>
              <p><strong className="text-blue-600">CGPA:</strong> 7.1 CGPA</p>
            </div>
          </div>

          {/* School Education */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition duration-300">
            <img
              src={School}
              alt="High School"
              className="w-32 md:w-40 h-32 md:h-40 object-contain"
            />
            <div className="text-gray-700 text-left text-xl">
              <p><strong className="text-blue-600">Class 12th:</strong> Gurukul Vidyapeeth</p>
              <p><strong className="text-blue-600">Year:</strong> 2021</p>
              <p><strong className="text-blue-600">Percentage:</strong> 80.6%</p>
              <p><strong className="text-blue-600">Class 10th:</strong> Gurukul Vidyapeeth</p>
              <p><strong className="text-blue-600">Year:</strong> 2019</p>
              <p><strong className="text-blue-600">Percentage:</strong> 77.2%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
