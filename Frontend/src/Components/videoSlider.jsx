import { useState } from "react";
import { motion } from "framer-motion";
import video1 from "../../src/assets/videos/Ruksana Testimonial for Web.mp4";
import video2 from "../../src/assets/videos/Muhammed Sinan Testimonial for Web.mp4";
import video3 from "../../src/assets/videos/Sinu Jasmin Testimonial for Web.mp4";

const VideoSlider = () => {
  const videos = [video1, video2, video3];
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % videos.length)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
    );
  };

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-35%", scale: 0.8, zIndex: 2 },
    right: { x: "35%", scale: 0.8, zIndex: 1 },
  };

  return (
    <div className="relative flex items-center justify-center ">
      {/* Navigation Arrows */}
      <button
        onClick={handleNext}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full z-10 ml-[750px] mt-[350px]"
      >
        {'<'} {/* Left Arrow */}
      </button>

      <button
        onClick={handleBack}
        className="absolute right-7 top-1/2 transform -translate-y-1/2 text-white p-1 rounded-2xl z-10 mr-[45px] mt-[350px]"
      >
        {'>'}{/* Right Arrow */}
      </button>

      {/* Video Carousel */}
      <div className="w-full md:!w-5/12 flex justify-center  mr-0 sm:mr-80 md:mr-40 xl:ml-36 items-center">
        {videos.map((video, index) => (
          <motion.video
            key={index}
            src={video}
            className="rounded-[30px] absolute"
            initial="center"
            animate={Object.keys(imageVariants)[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "22%",height:"520px", position: "absolute",marginLeft:"720px",marginTop:"700px" }}
            controls
            muted
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
