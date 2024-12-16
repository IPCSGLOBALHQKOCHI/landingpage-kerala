import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SuccessVideo.css";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const slides = [
  {
    video: "https://www.instagram.com/reel/DCB3QsjCr-O/embed",
  },
  {
    video: "https://www.instagram.com/reel/DC7AH-azDgs/embed",
  },
  {
    video: "https://www.instagram.com/reel/DByZfw_CSyP/embed",
  },
  {
    video: "https://www.instagram.com/reel/DByZfw_CSyP/embed",
  },
  {
    video: "https://www.instagram.com/p/DB8X-NQCIJx/embed",
  },
  {
    video: "https://www.instagram.com/p/DB8X-NQCIJx/embed",
  },
  {
    video: "https://www.instagram.com/reel/DCWf2dMCS9Y/embed",
  }
];

const SuccessSlider = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="mt-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={2000}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 100,
          modifier: 1,
        }}
        spaceBetween={120}
        //       pagination={{
        //   clickable: true, // Make dots clickable
        //   type: "bullets", // Use bullets (dots)
        // }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="!z-0"
        navigation={true}
        onTouchStart={() => setIsDragging(true)} // Start dragging
        onTouchEnd={() => setIsDragging(false)} // End dragging
      >
        {slides.map(({ video }, index) => (
          <Fragment key={index}>
            <SwiperSlide className="flex flex-col gap-10 rounded-2xl justify-center text-center min-h-[450px] md:min-h-[650px]">
              <iframe
                src={`${video}`} // Use embeddable URL
                className={`w-auto h-[600px] rounded-xl ${
                  isDragging ? "pointer-events-none" : "pointer-events-auto"
                }`}
                frameBorder="0"
                overflow="false"
                allow="autoplay; fullscreen"
                scrolling="no"
                title={`Instagram Video ${index + 1}`}
              ></iframe>
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessSlider;
