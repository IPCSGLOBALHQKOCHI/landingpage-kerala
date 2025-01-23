import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../../../src/assets/vectors/left.png";
import right from "../../../src/assets/vectors/rigt.png";

const videos = [
  { id: "FEgYxXBBjzg", title: "Video 1" },
  { id: "319XpzoOrnY", title: "Video 2" },
  { id: "N2Xso_Hxd0s", title: "Video 3" },
  { id: "ExjRwIgBJNo", title: "Video 4" },
  { id: "OxASXg9sW_U", title: "Video 5" },
  { id: "crCYEUnroNU", title: "Video 6" },
  { id: "9lDMNH4Ohz4", title: "Video 7" },
];

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-7 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-3xl z-20 cursor-pointer"
  >
    <img src={right} alt="Next Arrow" className="w-5 h-5" />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-7 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-3xl z-20 cursor-pointer"
  >
    <img src={left} alt="Previous Arrow" className="w-5 h-5" />
  </div>
);

const YoutubeCard = ({ video }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="p-6" ref={videoRef}>
      {isVisible ? (
        <iframe
          width="100%"
          height="205"
          src={`https://www.youtube.com/embed/${video.id}?mute=1`}
          title={video.title || "YouTube Video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      ) : (
        <div
          className="relative cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          {/* <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            className="w-full h-[205px] rounded-lg shadow-lg"
          /> */}
          {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 5v10l7-5-7-5z"></path>
            </svg>
          </div> */}
        </div>
      )}
    </div>
  );
};

const YoutubeVideos = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          touchMove: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index}>
            <YoutubeCard video={video} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YoutubeVideos;
