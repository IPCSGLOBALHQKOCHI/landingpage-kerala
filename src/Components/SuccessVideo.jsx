import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SuccessVideo.css";

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
const slides=[
    {
        video:"/videos/Muhammed Sinan Testimonial for Web.mp4"
    },  {
        video:"/videos/Ruksana Testimonial for Web.mp4"
    },  {
        video:"/videos/Sinu Jasmin Testimonial for Web.mp4"
    },  {
        video:"/videos/Muhammed Sinan Testimonial for Web.mp4"
    },  {
        video:"/videos/Ruksana Testimonial for Web.mp4"
    },  {
        video:"/videos/Sinu Jasmin Testimonial for Web.mp4"
    },  {
        video:"/videos/Muhammed Sinan Testimonial for Web.mp4"
    }
]
const SuccessSlider= () => {
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
            stretch: 80,
            depth: 200,
            modifier: 1,
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          style={{zIndex:"0 !important"}}
          spaceBetween={330}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="!z-0"
        >
          {slides.map(
            ( { video, heading }, index) => (
              <Fragment key={index}>
                <SwiperSlide className="flex flex-col gap-10 justify-center text-center min-h-[450px] md:min-h-[500px]">
                  <video
                    src={video}
                    alt="slide_image"
                    className="w-[18rem] h-[26rem] rounded-none"
                  />
                  {/* <h1 className=" text-[20px] font-medium">
                    {slide.heading}
                  </h1> */}
                </SwiperSlide>
              </Fragment>
            )
          )}
        </Swiper>
      </div>
    );
  };
  
  export default SuccessSlider;
