import React, { Fragment,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SuccessVideo.css";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const slides = [
  {
    video: "/videos/Muhammed Sinan Testimonial for Web.mp4",
  },
  {
    video: "/videos/Ruksana Testimonial for Web.mp4",
  },
  {
    video: "/videos/Sinu Jasmin Testimonial for Web.mp4",
  },
  {
    video: "/videos/Muhammed Sinan Testimonial for Web.mp4",
  },
  {
    video: "/videos/Ruksana Testimonial for Web.mp4",
  },
  {
    video: "/videos/Sinu Jasmin Testimonial for Web.mp4",
  },
  {
    video: "/videos/Muhammed Sinan Testimonial for Web.mp4",
  },
  {
    video: "/videos/Muhammed Sinan Testimonial for Web.mp4",
  },
  {
    video: "/videos/Muhammed Sinan Testimonial for Web.mp4",
  },
  {
    video: "/videos/Muhammed Sinan Testimonial for Web.mp4",
  },
  {
    video: "/videos/Muhammed Sinan Testimonial for Web.mp4",
  },
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
        spaceBetween={140}
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
            <SwiperSlide className="flex flex-col gap-10 rounded-2xl justify-center text-center min-h-[450px] md:min-h-[500px]">
              <video
                src={video}
                // autoPlay
                // controls
                className={`w-[18rem] h-[26rem] rounded-xl ${
                  isDragging ? "pointer-events-none" : "pointer-events-auto"
                }`}
              />
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessSlider;
