import { Swiper, SwiperSlide } from "swiper/react";
import BottomImage from "/assets/WHITE HALF CIRCLE 1 (1).png";
import Topimage from "/assets/Half circle 2 1.png";
import TopVector from "/assets/Group 427319131.png"
import Bottomvector from "/assets/Group 427319132.png"
import CCTVImage from "/Images/white-security-camera-cctv-securtiy-camera 2.png"
import "swiper/css";
import "swiper/css/pagination";
import "./ImageSlider.css";

const cards = [
  {
    title1: "Software",
    title2: "Testing",
    description: "SELENIUM WEBDRIVER | JIRA | CI/CD INTEGRATION",
    buttonText: "Download Brochure",
    image: "/path-to-your-image-1.png",
  },
  {
    title1: "Python and",
    title2: "Data Science",
    description: "PYTHON.DATA SCIENCE | ANDROID APP DEVELOPMENT",
    buttonText: "Download Brochure",
    image: "/path-to-your-image-2.png",
  },
  {
    title1: "BMS and ",
    title2: "CCTV",
    description: "SECURITY SYSTEM | FIRE ALARM | ACCESS CONTROL SYSTEM | KERAS",
    buttonText: "Download Brochure",
    image: {CCTVImage},
  },
  {
    title1: "Software",
    title2: "Testing",
    description: "SELENIUM WEBDRIVER | JIRA | CI/CD INTEGRATION",
    buttonText: "Download Brochure",
    image: "/path-to-your-image-1.png",
  },
  {
    title1: "Python and",
    title2: "Data Science",
    description: "PYTHON.DATA SCIENCE | ANDROID APP DEVELOPMENT",
    buttonText: "Download Brochure",
    image: "/path-to-your-image-2.png",
  },
  {
    title1: "BMS and ",
    title2: "CCTV",
    description: "SECURITY SYSTEM | FIRE ALARM | ACCESS CONTROL SYSTEM | KERAS",
    buttonText: "Download Brochure",
    image: "/path-to-your-image-3.png",
  },
  {
    title1: "Software",
    title2: "Testing",
    description: "SELENIUM WEBDRIVER | JIRA | CI/CD INTEGRATION",
    buttonText: "Download Brochure",
    image: "/path-to-your-image-1.png",
  },
  {
    title1: "Python and",
    title2: "Data Science",
    description: "PYTHON.DATA SCIENCE | ANDROID APP DEVELOPMENT",
    buttonText: "Download Brochure",
    image: "/path-to-your-image-2.png",
  },
  {
    title1: "BMS and ",
    title2: "CCTV",
    description: "SECURITY SYSTEM | FIRE ALARM | ACCESS CONTROL SYSTEM | KERAS",
    buttonText: "Download Brochure",
    image: "/path-to-your-image-3.png",
  },
];

const ImageSlider = () => {
  return (
    <div className="custom-swiper-container">
      {/* Top Image */}
      <div className="top-image-container">
        <img src={BottomImage} alt="Top Design" className="top-image" />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={110}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3},
        }}
        centeredSlides={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="swiper-wrapper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              {/* <img src={TopVector} alt="topvector" className="top-vector" /> */}
              <div className="card-content">
                <h2 className="card-title">
                  <span className="yellow-half">{card.title1}</span>
                  <span className="white-half">{card.title2}</span>
                </h2>

                <div className="divider"></div>
                <p className="card-description">{card.description}</p>
                <button className="card-button">{card.buttonText}</button>
              </div>
              {/* <img src={Bottomvector} alt="bottomvector" className="bottom-vector"/> */}
              {/* <img src={card.image} className="card-image" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Image */}
      <div className="bottom-image-container">
        <img src={Topimage} alt="Bottom Design" className="bottom-image" />
      </div>
    </div>
  );
};

export default ImageSlider;
