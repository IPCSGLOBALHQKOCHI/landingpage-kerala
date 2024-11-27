import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "/assets/Frame 427319140.png"
import image2 from "/assets/Frame 427319141.png"
import image3 from "/assets/Frame 427319145.png"
import image4 from "/assets/Frame 427319146.png"
import image5 from "/assets/Frame 427319145.png"
import image6 from "/assets/Frame 427319141.png"
import image7 from "/assets/Frame 427319146.png"
import curvingImageT from "/assets/WHITE HALF CIRCLE 1 (1).png"
import curvingImageB from "/assets/Half circle 2 1.png"



const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative flex items-center justify-center h-screen   overflow-hidden">
    {/* Top Image */}
    <div
      className="absolute top-0 left-0 right-0 "
      style={{
        width: "100%",
      }}
    >
      <img
        src={curvingImageT} // Replace with the top image source
        alt="Top Image"
        className=""
      />
    </div>
  
    {/* Sliding Images */}
    <motion.div
      className="flex gap-6"
      style={{
        width: `calc(${images.length * 33}% + ${images.length - 1} * 1rem)`,
      }}
      animate={{ x: `-${currentIndex * (100 / images.length)}%` }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-shrink-0"
          style={{
            width: "33%",
            height: "600px",
          }}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-[600px] object-cover rounded-md shadow-lg"
          />
        </div>
      ))}
    </motion.div>
  
    {/* Bottom Image */}
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{
        width: "100%",
      }}
    >
      <img
        src={curvingImageB} // Replace with the bottom image source
        alt="Bottom Image"
        className="w-full h-full object-cover rounded-md shadow-lg"
      />
    </div>
  
    {/* Left Arrow */}
    <button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full shadow-lg p-3 hover:bg-gray-300 z-10"
      onClick={handlePrevious}
    >
      ❮
    </button>
  
    {/* Right Arrow */}
    <button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full shadow-lg p-3 hover:bg-gray-300 z-10"
      onClick={handleNext}
    >
      ❯
    </button>
  </div>
  
  );
};

export default ImageSlider;



