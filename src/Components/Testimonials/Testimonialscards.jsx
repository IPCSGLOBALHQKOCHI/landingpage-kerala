// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './Testimonialscards.css';

// import { Autoplay, Pagination,Navigation } from 'swiper/modules';

// const cards =[
//   {
//     image:"/assets/DSC03468.JPG",
//     heading:"sgsgdfgdf"
//   },
//   {
//     image:"/assets/DSC03471.JPG",
//     heading:"gfdgdfgs"
//   }, 
//   {
//     image:"/assets/DSC03483.JPG",
//     heading:"gsgsdg"
//   } , 
//   {
//     image:"/assets/DSC03488.JPG",
//     heading:"gsgsdg"
//   },
//   {
//     image:"/assets/DSC03494.JPG",
//     heading:"gsgsdg"
//   },
// ]




// const  TestimonialsCards=()=> {
//   return (
//     <>
//      <Swiper
//         spaceBetween={30}
//         slidesPerView={2} // Show 2 slides at a time
//         loop={true} // Enable looping
//         autoplay={{
//           delay: 2500, // Set delay for autoplay
//           disableOnInteraction: false,
//         }}
//         navigation={true} // Optional navigation
//         modules={[Autoplay, Pagination, Navigation]}
//       >
//         {cards.map((slide) => (
//           <SwiperSlide key={slide.image}>
//             <div className="slide-content">
//               <img src={slide.image} alt={slide.heading} className="slide-image" />
//               <h3 className="slide-heading">{slide.heading}</h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }


// export default TestimonialsCards;


import React, { useState, useEffect } from 'react';
import './Testimonialscards.css';
const cards =[
  {
    image:"/assets/DSC03468.JPG",
    heading:"sgsgdfgdf"
  },
  {
    image:"/assets/DSC03471.JPG",
    heading:"gfdgdfgs"
  }, 
  {
    image:"/assets/DSC03483.JPG",
    heading:"gsgsdg"
  } , 
  {
    image:"/assets/DSC03488.JPG",
    heading:"gsgsdg"
  },
  {
    image:"/assets/DSC03494.JPG",
    heading:"gsgsdg"
  },
]


const TestimonialsCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2500);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Visible slides logic
  const visibleSlides = [
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
  ];

  return (
    <div className="testimonial-container">
      <div className="carousel-wrapper">
        {visibleSlides.map((card, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === 1 ? "slanting" : ""}`}
          >
            <img src={card.image} alt={card.heading} className="slide-image" />
            <h3 className="slide-heading">{card.heading}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCards;




