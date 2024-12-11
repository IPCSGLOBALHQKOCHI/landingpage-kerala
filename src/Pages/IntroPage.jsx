import { FiArrowRight } from "react-icons/fi";
// import IntroVideo from "../Components/IntroVideo";
import VideoSlider from "../Components/videoSlider";
// import backgroundImage from "../../public/Images/Rectangle 4162.png"
import BgLogo from "../../src/assets/images/IPCS GLOBAL logo-01 (1) 3.png";
import BgLogo2 from "../../src/assets/images/IPCS GLOBAL logo-01 (1) 2 (1).png";
import MainImage from "../../src/assets/images/image 7.png";
import BgMobile from "../../src/assets/images/Rectangle 4162 (1).png";
import BgDeskTop from "../../src/assets/images/Rectangle 4162.png";
import TickVector from "../../src/assets/vectors/Vector.png";
// import SpotlightCursor from "../Components/CursorEffect/SpotlightCursor";

const features = [
  "100% Placement Assistance",
  "100% Practical Training",
  "Industry Recognized Certificates",
];

const IntroPage = () => {
  return (
    <div
      className="w-full h-[1100px] xl:h-[780px] lg:h-[780px] md:h-[760px] sm:h-[700px] bg-cover bg-center"
      style={{
        background:
          "linear-gradient(to right, #001F11 0%, #002614 15%, #00361D 28%, #00351C 44%, #003F23 57%, #004F29 65%, #004F2A 79%, #00582E 92%)",
      }}
    >
      {/* Wrapper div for the main content */}
      <div className="relative">
        {/* Background image */}
        <img
          src={BgLogo}
          alt="Background"
          className="absolute top-[-15px] left-[-15px] opacity-10 w-[150px] sm:w-[200px] md:w-[340px] lg:w-[500px] xl:w-[580px] max-width-full"
        />

        
  {/* Second VideoSlider: Visible on sm and smaller */}
  <div className="block md:hidden sm:block lg:hidden xl:hidden">
    <VideoSlider />
  </div>

        {/* Left section with the main content */}
        <div className="w-full md:w-1/2 flex flex-col items-start relative">
          {/* Main Image */}
          <img
            src={MainImage}
            alt="Tech World"
            className="absolute top-0 left-0 z-[100] opacity-100 mt-12 xl:mt-16 xl:ml-24 ml-32 sm:mt-14 sm:ml-14 md:mt-14 md:ml-20 w-40 sm:w-52 md:w-auto"
          />

          {/* Title and Subtitles */}
          <h1 className="absolute text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 mt-36 sm:mt-44 md:mt-40 lg:mt-40 xl:mt-44 ml-36 sm:ml-16 md:ml-20 lg:ml-20 xl:ml-24">
            With Us
          </h1>
          <h2 className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mt-[200px] sm:mt-[225px] md:mt-[210px] lg:mt-[220px] xl:mt-[250px] ml-20 sm:ml-16 md:ml-20 lg:ml-20 xl:ml-24">
            the World of Tech is Yours
          </h2>

          <h4 className="absolute justify-center  flex xl:text-left text-left sm:text-left md:text-left lg:text-left text-sm sm:text-base md:text-md lg:text-lg xl:text-xl font-normal text-white w-[280px] sm:w-[300px] md:w-[400px] lg:w-[530px] xl:w-[640px] mt-[250px] sm:mt-[278px] md:mt-[280px] lg:mt-[300px] xl:mt-[320px] ml-20 sm:ml-14 md:ml-20 lg:ml-20 xl:ml-24">
            Develop skills in Ai Integrated Digital Marketing, Industrial
            Automation, Software Testing, Python & Data Science, BMS & CCTV,
            Artificial Intelligence and Embedded & IoT with expert mentors for a
            future-proof profession.
          </h4>
        </div>

        {/* Features section */}
        <div className="absolute mt-[400px] sm:mt-[420px] md:mt-[480px] xl:mt-[470px] lg:mt-[440px] text-right lg:text-right ml-20 xl:ml-24 md:ml-20 lg:ml-20 sm:ml-14 mx-5 sm:mx-10 md:mx-20">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={TickVector}
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
        <button className="absolute flex items-center space-x-4 pr-4 rounded-full py-[5px] pl-10 bg-yellow-400 text-black font-semibold text-lg mt-[530px] sm:mt-[560px] md:mt-[650px] lg:mt-[590px] xl:mt-[610px] ml-24 xl:ml-24 md:ml-20 sm:ml-16 lg:ml-24">
          <span>Enroll Now</span>
          <div className="bg-white w-9 h-9 rounded-full">
            <FiArrowRight className="w-7 h-7 ml-2 mt-1 text-green-900" />
          </div>
        </button>

        {/* Video Slider section (only for larger screens, below the left section) */}
        <div>
  {/* First VideoSlider: Visible on md and larger */}
  <div className="hidden md:block sm:hidden lg:block xl:block">
    <VideoSlider />
  </div>

</div>

      </div>

      {/* Parent container with relative positioning */}
      <div className="w-full h-screen">
  {/* Default image for larger screens (lg and above) */}
  <img
    src={BgDeskTop}
    alt="Rectangle"
    className="sm:hidden hidden h-[780px] w-full" // Show on lg and above
  />

  {/* Mobile image for smaller screens (sm, md) */}
  {/* <img
    src={BgMobile}
    alt="Rectangle Mobile"
    className="block md:hidden h-[1000px] md:h-[700px] w-full" // Show on sm and md, hidden on lg and above
  /> */}
</div>

      {/* Background logo */}
      <div className="relative">
  <img
    src={BgLogo2}
    alt="Logo"
    className="
      absolute 
      opacity-20
      bottom-[-40rem] right-[-6rem] 
      sm:bottom-[-8rem] sm:right-[-16rem] 
      md:bottom-[-10rem] md:right-[-12rem]
      lg:bottom-[-12rem] lg:right-[-8rem]
      xl:bottom-[-14rem] xl:right-[-8rem]
    "
  />
</div>

    </div>
  );
};

export default IntroPage;


