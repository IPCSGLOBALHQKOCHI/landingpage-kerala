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
  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full z-10 
  sm:ml-[360px] md:ml-[480px] lg:ml-[630px] xl:ml-[720px] mt-[830px] sm:mt-[330px] md:mt-[330px] lg:mt-[330px] xl:mt-[330px]"
>
  {'<'} {/* Left Arrow */}
</button>

<button
  onClick={handleBack}
  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full z-10 
  sm:mr-[2px] md:mr-[8px] lg:mr-[10px] xl:mr-[16px] mr-[0px] mt-[830px] sm:mt-[330px] md:mt-[330px] lg:mt-[330px] xl:mt-[330px] "
>
  {'>'}{/* Right Arrow */}
</button>


      {/* Video Carousel */}
      <div className="w-full md:w-5/12 flex justify-center items-center relative">
  {videos.map((video, index) => (
    <motion.video
      key={index}
      src={video}
      className="rounded-[30px] absolute w-[220px] sm:w-[200px] md:w-3/5 lg:w-3/5 xl:w-3/5 sm:ml-[360px] md:ml-[480px] lg:ml-[630px] xl:ml-[700px] mt-[1660px] lg:mt-[720px] md:mt-[700px] sm:mt-[640px] xl:mt-[640px] ml-[20px]"
      initial="center"
      animate={Object.keys(imageVariants)[positionIndexes[index]]}
      variants={imageVariants}
      transition={{ duration: 0.5 }}
      controls
      muted
    />
  ))}
</div>
    </div>
  );
};

export default VideoSlider;
