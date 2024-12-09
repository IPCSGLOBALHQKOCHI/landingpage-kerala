// import { Swiper, SwiperSlide } from "swiper/react";
// import BottomImage from "/assets/WHITE HALF CIRCLE 1 (1).png";
// import Topimage from "/assets/Half circle 2 1.png";
// import TopVector from "/assets/Group 427319131.png"
// import Bottomvector from "/assets/Group 427319132.png"
// import CCTVImage from "/Images/white-security-camera-cctv-securtiy-camera 2.png"
// import "swiper/css";
// import "swiper/css/pagination";
// import "./ImageSlider.css";

// const cards = [
//   {
//     title1: "Software",
//     title2: "Testing",
//     description: "SELENIUM WEBDRIVER | JIRA | CI/CD INTEGRATION",
//     buttonText: "Download Brochure",
//     image: "/path-to-your-image-1.png",
//   },
//   {
//     title1: "Python and",
//     title2: "Data Science",
//     description: "PYTHON.DATA SCIENCE | ANDROID APP DEVELOPMENT",
//     buttonText: "Download Brochure",
//     image: "/path-to-your-image-2.png",
//   },
//   {
//     title1: "BMS and ",
//     title2: "CCTV",
//     description: "SECURITY SYSTEM | FIRE ALARM | ACCESS CONTROL SYSTEM | KERAS",
//     buttonText: "Download Brochure",
//     image: {CCTVImage},
//   },
//   {
//     title1: "Ai Integrated ",
//     title2: "Digital Marketing",
//     description: "SEO, SEM, SMM, SMO, AFFILIATE MARKETING",
//     buttonText: "Download Brochure",
//     image: "/path-to-your-image-1.png",
//   },
//   {
//     title1: "Industrial ",
//     title2: "Automation",
//     description: "PLC, SCADA, DCS, CONTROL PANEL DESIGN",
//     buttonText: "Download Brochure",
//     image: "/path-to-your-image-2.png",
//   },
//   {
//     title1: "Artificial ",
//     title2: "Intelligence ",
//     description: "TensorFlow, Keras",
//     buttonText: "Download Brochure",
//     image: "/path-to-your-image-3.png",
//   },
//   {
//     title1: "Embedded ",
//     title2: "& IoT",
//     description: "PIC, ARM, Raspberry Pi, and Arduino",
//     buttonText: "Download Brochure",
//     image: "/path-to-your-image-1.png",
//   },
// ];

// const ImageSlider = () => {
//   return (
//     <div className="custom-swiper-container">
//       {/* Top Image */}
//       <div className="top-image-container">
//         <img src={BottomImage} alt="Top Design" className="top-image" />
//       </div>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={110}
//         loop={true}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3},
//         }}
//         centeredSlides={true}
//         grabCursor={true}
//         pagination={{ clickable: true }}
//         className="swiper-wrapper"
//       >
//         {cards.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="card">
//               {/* <img src={TopVector} alt="topvector" className="top-vector" /> */}
//               <div className="card-content">
//                 <h2 className="card-title">
//                   <span className="yellow-half">{card.title1}</span>
//                   <span className="white-half">{card.title2}</span>
//                 </h2>

//                 <div className="divider"></div>
//                 <p className="card-description">{card.description}</p>
//                 <button className="card-button">{card.buttonText}</button>
//               </div>
//               {/* <img src={Bottomvector} alt="bottomvector" className="bottom-vector"/> */}
//               {/* <img src={card.image} className="card-image" /> */}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Bottom Image */}
//       <div className="bottom-image-container">
//         <img src={Topimage} alt="Bottom Design" className="bottom-image" />
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import BottomImage from "../../../src/assets/vectors/WHITE HALF CIRCLE 1 (1).png";
import Topimage from "../../../src/assets/vectors/Half circle 2 1.png";

import image1 from "../../../src/assets/images/Ai.png";
import image2 from "../../../src/assets/images/AiandDM.png";
import image3 from "../../../src/assets/images/BMSandCCTV.png";
import image4 from "../../../src/assets/images/industrialAutomation.png";
import image5 from "../../../src/assets/images/Iot.png";
import image6 from "../../../src/assets/images/pythonandDS.png";
import image7 from "../../../src/assets/images/softwareTesting.png";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(3); // Default to 3 for large screens
  const controls = useAnimation();
  const containerRef = useRef(null);

  const images = [image2, image3, image4, image5, image6, image7, image1];

  // Update imagesPerView based on screen size
  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerView(3); // Large screens (lg and above)
      } else if(window,innerWidth >= 786 && window,innerWidth >= 640) {
        setImagesPerView(2); // Small screens (sm and below)
      }else{
        setImagesPerView(1)
      }
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);

    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  // Calculate the total slides
  const maxIndex = images.length - imagesPerView;

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    controls.start({ x: `-${index * (100 / imagesPerView)}%` });
  };

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(nextIndex);
    controls.start({ x: `-${nextIndex * (100 / imagesPerView)}%` });
  };

  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(prevIndex);
    controls.start({ x: `-${prevIndex * (100 / imagesPerView)}%` });
  };

  return (
    <div className="relative flex items-center justify-center h-[720px] sm:h-[720px] md:h-[700px] lg:h-[680px] xl:h-[650px] overflow-hidden bg-gray-100">
      <div className="absolute top-0 left-0 right-0 z-10 hidden sm:hidden md:hidden lg:block xl:block">
        <img
          src={BottomImage}
          alt="Top Image"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Sliding Images */}
      <motion.div
        ref={containerRef}
        className="flex gap-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{
          left: -(maxIndex * containerRef.current?.offsetWidth) || 0,
          right: 0,
        }}
        dragElastic={0.1}
        onDragEnd={(event, info) => {
          if (info.offset.x < -50 && currentIndex < maxIndex)
            handleNext(); // Swipe left
          else if (info.offset.x > 50 && currentIndex > 0) handlePrev(); // Swipe right
        }}
        animate={controls}
        transition={{ type: "spring", stiffness: 50 }}
        style={{ x: `-${currentIndex * (100 / imagesPerView)}%` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0"
            style={{
              width: `${100 / imagesPerView}%`, // Dynamically calculate width
              height: "600px",
            }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-fit rounded-md shadow-lg"
            />
            {/* Download Button */}
            <button
              className="absolute bottom-44 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-center font-medium py-2 px-4 rounded-full shadow-lg"
              onClick={() => {
                const link = document.createElement("a");
                link.href = `/path/to/brochure-${index + 1}.pdf`;
                link.download = `brochure-${index + 1}.pdf`;
                link.click();
              }}
            >
              Download Brochure
            </button>
          </div>
        ))}
      </motion.div>
 
      <div className="absolute bottom-0 left-0 right-0 hidden sm:hidden md:hidden lg:block xl:block">
        <img
          src={Topimage}
          alt="Bottom Image"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg"
      >
        <FaArrowRight />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 flex gap-2 ml-12 justify-center">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;


