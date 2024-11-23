import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "/Images/Frame 427319136.png"
import image2 from "/Images/Frame 427319136.png"
import image3 from "/Images/Frame 427319136.png"
import image4 from "/Images/Frame 427319136.png"
import image5 from "/Images/Frame 427319136.png"
import image6 from "/Images/Frame 427319136.png"
import image7 from "/Images/Frame 427319136.png"




const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [image1,image2,image3,image4,image5,image6,image7];

  const positions = ["center", "left", "right"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-110%", scale: 1, zIndex: 2 },
    right: { x: "110%", scale: 1, zIndex: 1 },
  };
  return (
    <div className=" relative flex items-center flex-col justify-center h-screen mt-20">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "31%", position: "absolute",height:"650px" }}
        />
      ))}
      <div className="flex flex-row gap-3">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;