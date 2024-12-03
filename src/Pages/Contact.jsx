import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "../Components/ContactForm/ContactForm";
import ContactImage from "../../src/assets/images/ea93a0a6-cdfe-4f9f-9e1e-4ff62834d446 1.png";
import LogoVector from "../../src/assets/vectors/IPCS GLOBAL logo-01 (1) 2 (2).png";
import WhatsappLogo from "../../src/assets/images/whatsappLogo.png.png"
import { div } from "framer-motion/client";
function Contact() {
  return (

<div className="w-full h-[500px] bg-white grid grid-rows-[auto_1fr_auto]">
  {/* Content Row */}
  <div className="flex justify-start">
    {/* Left Section with Green Gradient and JOIN NOW Text */}
    <div
      className="h-[348px] w-[550px] ml-32 rounded-2xl relative overflow-visible"
      style={{
        background:
          "radial-gradient(circle, rgba(0,60,40,1) 0%, rgba(0,44,26,1) 60%, rgba(0,32,20,1) 100%)",
      }}
    >
      {/* Image Section */}
      <div className="absolute left-24 top-9 w-full h-1/2 flex items-center justify-center z-20">
        <img
          src={ContactImage}
          alt="contactimage"
          className="w-80 h-[450px] object-cover"
        />
      </div>

      {/* Text "JOIN NOW" section */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <h2
          className="text-black w-20 p-4 mr-[470px] h-[350px] text-center bg-yellow-500 rounded-tr-2xl rounded-br-2xl text-4xl font-semibold rotate-[-180deg]"
          style={{
            writingMode: "vertical-rl", // Make the text flow from top to bottom
            whiteSpace: "nowrap", // Prevent text from wrapping
          }}
        >
          JOIN NOW
        </h2>
      </div>

      {/* Logo below "JOIN NOW" text but above the background */}
      <div className="absolute bottom-40 left-40 transform -translate-x-1/2 z-40 p-2 rounded-full">
        <img src={LogoVector} alt="logovector" className="w-52 h-52 opacity-10" />
      </div>
    </div>
    {/* Right Section */}
    <div className="w-1/2">
      <ContactForm />
    </div>
  </div>

  {/* Button Centered Below */}
  <div className="flex justify-center  mt-12 mb-12">
    <button className="flex items-center border-2 border-[#014F2A] text-green-600 px-8 rounded-xl">
      <FaWhatsapp className="text-xl pr-2 w-10 h-10" />
      <span className="text-2xl font-medium text-[#026336]">Get Free Admission Counselling</span>
    </button>
  </div>
</div>


  );
}

export default Contact;
