import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SuccessVideo.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

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
    video: "https://www.instagram.com/p/DB8X-NQCIJx/embed",
  },
  {
    video: "https://www.instagram.com/reel/DCWf2dMCS9Y/embed",
  },
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
    video: "https://www.instagram.com/p/DB8X-NQCIJx/embed",
  },
  {
    video: "https://www.instagram.com/reel/DCWf2dMCS9Y/embed",
  },
  {
    video: "https://www.instagram.com/reel/DByZfw_CSyP/embed",
  },
  {
    video: "https://www.instagram.com/p/DB8X-NQCIJx/embed",
  },
  {
    video: "https://www.instagram.com/reel/DCWf2dMCS9Y/embed",
  },
];

const SuccessSlider = () => {
  return (
    <div className="mt-10">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        spaceBetween={220}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="custom-swiper-1"
        pagination={{ clickable: true }}
        simulateTouch={false} // Disable drag option
      >
        {slides.map(({ video }, index) => (
          <Fragment key={index}>
            <SwiperSlide className="custom-slide-1 flex flex-col gap-10 rounded-2xl justify-center text-center min-h-[450px] md:min-h-[650px]">
              <iframe
                src={`${video}`}
                className="custom-iframe-1 w-auto h-[600px] rounded-xl"
                frameBorder="0"
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
