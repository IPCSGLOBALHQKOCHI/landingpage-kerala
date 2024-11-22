import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import video1 from "/videos/Ruksana Testimonial for Web.mp4";
import video2 from "/videos/Muhammed Sinan Testimonial for Web.mp4";
import video3 from "/videos/Sinu Jasmin Testimonial for Web.mp4";
// import backgroundImage from "../../public/Images/Rectangle 4162.png"

const features = [
  "100% Placement Assistance",
  "100% Practical Training",
  "Industry Recognized Certificates",
];

function IntroPage() {
  return (
    <div
      className="w-full h-auto min-h-[500px] bg-cover bg-center"
      style={{
        background:
          "linear-gradient(to right, #001F11 0%, #002614 15%, #00361D 28%, #00351C 44%, #003F23 57%, #004F29 65%, #004F2A 79%, #00582E 92%)",
      }}
    >
      {/* Wrapper div for the main content */}
      <div className="relative">
        {/* Background image */}
        <img
          src="/Images/IPCS GLOBAL logo-01 (1) 3.png"
          alt="Background"
          className="absolute top-[-15px] left-[-15px] opacity-10 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[500px] xl:w-[580px]"
        />

        {/* Left section with the main content */}
        <div className="w-full md:w-1/2">
          {/* Main Image */}
          <img
            src="/Images/image 7.png"
            alt="Tech World"
            className="absolute top-0 left-0 z-[100] opacity-100 mt-12 xl:mt-16 xl:ml-24 ml-8 sm:mt-14 sm:ml-14 md:mt-14 md:ml-20 w-40 sm:w-52 md:w-auto"
          />

          {/* Title and Subtitles */}
          <h1 className="absolute text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 mt-40 sm:mt-44 md:mt-40 lg:mt-40 xl:mt-44 ml-10 sm:ml-16 md:ml-20 lg:ml-20 xl:ml-24">
            With Us
          </h1>
          <h2 className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mt-[200px] sm:mt-[225px] md:mt-[210px] lg:mt-[220px] xl:mt-[250px] ml-10 sm:ml-16 md:ml-20 lg:ml-20 xl:ml-24">
            the World of Tech is Yours
          </h2>

          <h4 className="absolute flex xl:text-left text-left sm:text-left md:text-left lg:text-left text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-normal text-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 mt-[260px] sm:mt-[278px] md:mt-[260px] lg:mt-[300px] xl:mt-[320px] ml-10 sm:ml-14 md:ml-20 lg:ml-20 xl:ml-24">
            Develop skills in Ai Integrated Digital Marketing, Industrial
            Automation, Software Testing, Python & Data Science, BMS & CCTV,
            Artificial Intelligence and Embedded & IoT with expert mentors for a
            future-proof profession.
          </h4>
        </div>
        {/* Features section */}
        <div className="absolute mt-[380px] sm:mt-[400px] md:mt-96 xl:mt-[470px] lg:mt-[440px] text-right lg:text-right ml-10 xl:ml-24 md:ml-20 lg:ml-20 sm:ml-14 mx-5 sm:mx-10 md:mx-20">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <img
                  src="/assets/Vector.png"
                  alt="Tick"
                  className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5"
                />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white ml-2 sm:ml-3">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Courses Button */}
        <button className="absolute flex items-center space-x-4 pr-2 rounded-full py-[5px] pl-10 bg-yellow-400 text-black font-semibold text-lg  mt-[510px] sm:mt-[520px] md:mt-[550px] lg:mt-[590px] xl:mt-[610px] ml-14 xl:ml-28 md:ml-20 sm:ml-16 lg:ml-24">
          <span>Explore Courses</span>
          <div className="bg-white w-10 h-10 rounded-full">
            <FiArrowRight className="w-7 h-7 ml-2 mt-1 text-green-900" />
          </div>
        </button>
        <div className="absolute">
          <div className="relative">
            <div className="flex justify-center items-center h-screen relative xl:ml-[870px] xl:mt-[50px]">
              {/* Left Video */}
              <motion.div
                className="absolute left-16 w-[350px] h-[480px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <video
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                >
                  <source src={video3} type="video/mp4" />
                </video>
              </motion.div>

              {/* Center Video */}
              <motion.div
                className="relative z-10 w-[350px] h-[550px] rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <video
                  loop
                  muted
                  // autoPlay
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                >
                  <source src={video2} type="video/mp4" />
                </video>
              </motion.div>

              {/* Right Video */}
              <motion.div
                className="absolute right-16 w-[350px] h-[480px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <video
                  loop
                  muted
                  playsInline
                  // autoPlay
                  className="w-full h-full object-cover rounded-2xl"
                >
                  <source src={video1} type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom image */}
      <div>
        <img
          src="/Images/Rectangle 4162.png"
          alt="Rectangle"
          className="h-[700px] w-full"
        />
      </div>

      {/* Background logo */}
      <div className="relative">
        <img
          src="/Images/IPCS GLOBAL logo-01 (1) 2 (1).png"
          alt="Logo"
          className="absolute -bottom-32 -right-36 opacity-20"
        />
      </div>
    </div>
  );
}

export default IntroPage;
