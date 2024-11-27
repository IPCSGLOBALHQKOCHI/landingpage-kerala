import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { slides } from "../Slides/PlacementSlides";
import "../Components/PlacementSlides.css";

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

const PlacementImageSlider = () => {
  return (
    <div className="mt-20">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={2000}
        slidesPerView={6}
        coverflowEffect={{
          rotate: 0,
          stretch: 30, 
          depth: 200,
          modifier: 1,
        }}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        spaceBetween={20} // Add equal spacing between slides
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="!z-0"
      >
        {slides.map((slide, index) => (
          <Fragment key={index}>
            <SwiperSlide
              className="flex flex-col gap-4 justify-center text-center min-h-[450px] md:min-h-[500px] transition-transform duration-500"
            >
              <img
                src={slide.imageUrl}
                alt="slide_image"
                className={`w-[200px] h-[250px] object-cover rounded-full transition-all duration-500 ${
                  index === 3 ? "w-[400px]" : "w-[200px]" // Double width for the middle image (active)
                }`}
              />
              {/* <h1 className="text-[16px] font-medium">{slide.name}</h1> */}
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
      <style>
        {`
          .swiper-slide-active {
            transform: scale(1.2) !important; 
            transition: transform 0.5s ease-in-out; 
          }

          .swiper-slide-active img {
            width: 400px !important; 
          }
        `}
      </style>
    </div>
  );
};

export default PlacementImageSlider;


// import { useState, useEffect } from "react";
// import { slides } from "../Slides/PlacementSlides";

// const PlacementImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleSlides = () => {
//     const visibleSlides = [];
//     for (let i = -3; i <= 3; i++) {
//       const slideIndex = (currentIndex + i + slides.length) % slides.length; // Ensure it's within bounds
//       visibleSlides.push(slides[slideIndex]);
//     }
//     return visibleSlides;
//   };

//   const visibleSlides = getVisibleSlides();

//   return (
//     <div className="flex flex-col items-center px-3">
//       <div className="relative overflow-hidden w-full">
//         <div className="flex transition-all duration-1000 ease-in-out">
//           {visibleSlides.map((slide, index) => {
//             return (
//               <div
//                 key={index}
//                 className={`p-1 transition-all transform-gpu duration-1000 ease-in-out`}
//               >
//                 <img
//                   src={slide.imageUrl}
//                   alt={slide.name}
//                   className="w-full h-full min-h-[300px] object-cover rounded-lg"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacementImageSlider;







