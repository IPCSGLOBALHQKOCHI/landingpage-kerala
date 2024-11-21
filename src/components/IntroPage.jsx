import { FiArrowRight } from "react-icons/fi";
// import backgroundImage from "../../public/Images/Rectangle 4162.png"

const features = [
  "100% Placement Assistance",
  "100% Practical Training",
  "Industry Recognized Certificates",
];

function IntroPage() {
  return (
    <div
      className="w-screen h-[700px] overflow-hidden bg-[url('/Rectangle 4162.png')]"
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
          style={{
            position: "absolute",
            left: -15,
            top: -15,
            opacity: 0.1,
          }}
        />

        {/* Left section with the main content */}
        <div className="w-1/2">
          {/* Main Image */}
          <img
            src="/Images/image 7.png"
            alt="Tech World"
            className="absolute top-0 left-0 z-[100] opacity-100 mt-14 ml-20"
          />

          {/* Title and Subtitles */}
          <h1 className="absolute text-5xl font-bold text-yellow-400 mt-44 ml-20">
            With Us
          </h1>
          <h2 className="absolute text-3xl font-semibold text-white mt-[233px] ml-20 ">
            the World of Tech is Yours
          </h2>
          <h4 className="absolute text-xl font-normal text-white w-1/2 mt-[288px] ml-20 ">
            Develop skills in Ai Integrated Digital Marketing, Industrial
            Automation, Software Testing, Python & Data Science, BMS & CCTV,
            Artificial Intelligence and Embedded & IoT with expert mentors for a
            future-proof profession.
          </h4>
        </div>

        {/* Features section */}
        <div className="absolute mt-[428px] ml-20">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center mb-3">
              <img
                src="/assets/Vector.png"
                alt="Tick"
                className="w-5 h-5 mb-3"
              />
              <p className="text-white text-lg md:text-xl ml-3">{feature}</p>
            </div>
          ))}
        </div>

        {/* Explore Courses Button */}
        <button className="absolute flex items-center space-x-4 pr-2 rounded-full py-[5px] pl-10 bg-yellow-400 text-black font-semibold text-lg mt-[565px] ml-[90px]">
          <span>Explore Courses</span>
          <div className="bg-white w-10 h-10 rounded-full">
            <FiArrowRight className="w-7 h-7 ml-2 mt-1 text-green-900" />
          </div>
        </button>
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
          style={{
            position: "absolute",
            bottom: -95,
            right: -125,
            opacity: 0.2,
          }}
        />
      </div>
    </div>
  );
}

export default IntroPage;
