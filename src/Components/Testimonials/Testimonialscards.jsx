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

const cards = [
  { image: "/assets/DSC03468.JPG", heading: "Digital marketing <br/> Excutive",name:"Dviya Rajesh" },
  { image: "/assets/DSC03471.JPG", heading: "Digital marketing <br/> Excutive",name:"Annan"  },
  { image: "/assets/DSC03483.JPG", heading: "Digital marketing <br/> Excutive",name:"Anzil P s"  },
  { image: "/assets/DSC03488.JPG", heading: "Digital marketing <br/> Excutive",name:"Abhijith"  },
  { image: "/assets/DSC03494.JPG", heading: "Digital marketing <br/> Excutive",name:"Abhiram"  },
];

const TestimonialsCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // Match with the transition duration for smoothness
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
        <div className="rounded-lg flex flex-col items-center text-center"
         style={{
          background: 'linear-gradient(to bottom, #008145 0%, #002916 100%)',
          padding: '20px',
          color: 'white',
        }}>
          {/* Heading */}
          <h3 className="text-white font-semibold text-xl mb-1"dangerouslySetInnerHTML={{ __html: card.heading }}></h3>

          {/* Image */}
          <div className="w-full rounded-md">
            <img
              src={card.image}
              alt={card.heading}
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* Name */}
          <p className="text-white font-medium text-md mt-2">{card.name}</p>
          <div className="stars-container">
          <div> <span className="star">★★★★★</span></div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default TestimonialsCards;





