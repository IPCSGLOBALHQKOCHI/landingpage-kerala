import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

import BottomImage from "../../../src/assets/vectors/WHITE HALF CIRCLE 1 (1).png";
import Topimage from "../../../src/assets/vectors/Half circle 2 1.png";

import image1 from "../../../src/assets/images/softwareTesting.png";
import image2 from "../../../src/assets/images/pythonandDS.png";
import image3 from "../../../src/assets/images/BMSandCCTV.png";
import image4 from "../../../src/assets/images/AiandDM.png";
import image5 from "../../../src/assets/images/industrialAutomation.png";
import image6 from "../../../src/assets/images/Ai.png";
import image7 from "../../../src/assets/images/IoT.png";
const cards = [
  {
    title1: "Software",
    title2: "Testing",
    description: "SELENIUM WEBDRIVER | JIRA |<br/> CI/CD INTEGRATION",
    image: image1,
  },
  {
    title1: "Python and",
    title2: "Data Science",
    description: "PYTHON DATA SCIENCE | <br/> ANDROID APP DEVELOPMENT",
    image: image2,
  },
  {
    title1: "BMS and ",
    title2: "CCTV",
    description:
      "SECURITY SYSTEM | FIRE ALARM |<br/> ACCESS CONTROL SYSTEM | KERAS",
    image: image3,
  },
  {
    title1: "Ai Integrated ",
    title2: "Digital Marketing",
    description: "SEO | SEM | SMM | SMO |<br/> AFFILIATE MARKETING",
    image: image4,
  },
  {
    title1: "Industrial ",
    title2: "Automation",
    description: "PLC | SCADA | DCS |<br/> CONTROL PANEL DESIGN",
    image: image5,
  },
  {
    title1: "Artificial ",
    title2: "Intelligence ",
    description: "TensorFlow | Keras",
    image: image6,
  },
  {
    title1: "Embedded ",
    title2: "& IoT",
    description: "PIC | ARM | Raspberry Pi | <br/> Arduino",
    image: image7,
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(3); // Default to 3 for large screens
  const controls = useAnimation();
  const containerRef = useRef(null);

  // Update imagesPerView based on screen size
  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerView(3); // Large screens (lg and above)
      } else if ((window, innerWidth >= 786 && window, innerWidth >= 640)) {
        setImagesPerView(2); // Small screens (sm and below)
      } else {
        setImagesPerView(1);
      }
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);

    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  // Calculate the total slides
  const maxIndex = Math.max(0, cards.length - imagesPerView);

  // const handleDotClick = (index) => {
  //   setCurrentIndex(index);
  //   controls.start({ x: `-${index * (100 / imagesPerView)}%` });
  // };

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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe left to go to the next image
    onSwipedRight: handlePrev, // Swipe right to go to the previous image
    preventScrollOnSwipe: true, // Prevent scrolling while swiping
    trackMouse: true, // Enable mouse swipe events for desktop
  });

  return (
    <div
      className="relative flex items-center justify-center h-[720px] sm:h-[720px] md:h-[700px] lg:h-[680px] xl:h-[650px] overflow-hidden"
      {...swipeHandlers}
    >
      <div className="absolute top-0 left-0 right-0 z-10 ">
        <img
          src={BottomImage}
          alt="Top Image"
          className="w-full h-full object-cover rounded-md "
        />
      </div>
      <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-20"
    onClick={handlePrev}
  >
    &#8592; {/* Left arrow symbol */}
  </button>

  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-20"
    onClick={handleNext}
  >
    &#8594; {/* Right arrow symbol */}
  </button>
      {/* Sliding Images */}
      <motion.div
        ref={containerRef}
        className="flex gap-5 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{
          left: containerRef.current
            ? -(
                cards.length *
                  (containerRef.current.offsetWidth / imagesPerView) -
                containerRef.current.offsetWidth
              ) - 120 // Add 50px space after the last image
            : 0,
          right: 0,
        }}
        dragElastic={0.2}
        onDragEnd={(event, info) => {
          if (info.offset.x < -50 && currentIndex < maxIndex)
            handleNext(); // Swipe left
          else if (info.offset.x > 50 && currentIndex > 0) handlePrev(); // Swipe right
        }}
        animate={controls}
        transition={{ type: "spring", stiffness: 50 }}
        style={{ x: `-${currentIndex * (100 / imagesPerView)}%` }}
      >
        {cards.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 "
            style={{
              width: `${100 / imagesPerView}%`, // Dynamically calculate width
              height: "640px",
            }}
          >
            {/* Overlay container for title and description */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-16 z-10">
              <h1 className="text-4xl text-yellow-400 font-bold">
                {image.title1}
              </h1>
              <h1 className="text-white text-4xl font-semibold my-1">
                {image.title2}
              </h1>
              <div className="absolute bottom-[270px] left-1/2 transform -translate-x-1/2 flex gap-2">
                {Array.from({ length: 24 }).map((_, index) => (
                  <button
                    key={index}
                    className="bg-yellow-400 w-1 h-1 rounded-full"
                  />
                ))}
              </div>{" "}
              <h5
                className="text-white text-lg mt-8"
                dangerouslySetInnerHTML={{ __html: image.description }}
              ></h5>
            </div>

            {/* Image */}
            <img
              src={image.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover "
            />

            {/* Download Button */}
            <button
              className="absolute bottom-48 sm:bottom-44 md:bottom-44 lg:bottom-40 xl:bottom-48 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-center font-medium py-2 px-2 sm:py-2 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-4 xl:py-2 xl:px-4 rounded-full z-20 text-sm sm:text-base md:text-lg lg:text-xl"
              onClick={() =>
                document
                  .getElementById("contactSection")
                  .scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              Download Syllabus
            </button>
          </div>
        ))}
        
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden sm:hidden md:hidden lg:block xl:block">
        <img
          src={Topimage}
          alt="Top Image"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
