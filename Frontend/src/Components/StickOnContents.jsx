import React, { useState, useEffect } from "react";
import whatsappIcon from "../../src/assets/images/whatsapp_3670133.png";
import CallIcon from "../../src/assets/images/telephone_724664.png";
import { TbMessageCircleSearch } from "react-icons/tb";
import mobile from "../../src/assets/images/mobilepopup.png";
import desktop from "../../src/assets/images/desktopopup.png";
import { FiArrowRight } from "react-icons/fi";

 const StickOnContents = () => {
  const [showText, setShowText] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Cycle between text and icon for the "Enquire Now" button
    const cycleStates = () => {
      setShowText(false);
      setTimeout(() => {
        setShowText(true);
        setTimeout(cycleStates, 2000);
      }, 5000);
    };

    cycleStates();

    // Trigger popup after 5 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => {
      clearTimeout(cycleStates);
      clearTimeout(popupTimer);
    };
  }, []);



  return (
    <div className="fixed bottom-2 right-5 flex flex-col items-end space-y-4 z-50">
      {/* Icons Container */}
      <div className="flex flex-col items-end space-y-2">
        {/* Call Button */}
        <a
          href="tel:+91 98467 70771"
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
        >
          <img src={CallIcon} alt="Call Icon" />
        </a>

        {/* WhatsApp Button */}
        {/* <WhatsappBot/> */}
        <a
          href="https://wa.me/message/2JUOJKIQBVEUD1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center"
        >
          <img src={whatsappIcon} alt="WhatsApp Icon" />
        </a>
             {/* <button
          onClick={() => {
            // Trigger the chatbot interface when the WhatsApp button is clicked
            if (window.ktt10) {
              window.ktt10.openChat();  
            }
          }}
          className="w-14 h-14 rounded-full flex items-center justify-center"
        >
          <img src={whatsappIcon} alt="WhatsApp Icon" />
        </button> */}
      </div>

      {/* Enquire Now Button */}
      <div>
        <button
          onClick={() =>
            document.getElementById("contactSection").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="flex items-center justify-center px-6 py-6 rounded-full text-black font-semibold text-base transition-all duration-500 ease-in-out"
          style={{
            background: "linear-gradient(to right, #FFE902 0%, #FEBE10 100%)",
            width: showText ? "200px" : "60px", // Smooth width transition
          }}
        >
          <div
            className={`flex items-center justify-center transition-opacity duration-500 ease-in-out ${
              showText ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position: "absolute",
              visibility: showText ? "visible" : "hidden",
            }}
          >
            <span className="text-xl">Enquire Now</span>
          </div>
          <div
            className={`flex items-center justify-center transition-opacity duration-500 ease-in-out ${
              !showText ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position: "absolute",
              visibility: !showText ? "visible" : "hidden",
            }}
          >
            <TbMessageCircleSearch className="text-lg w-8 h-8 " />
          </div>
        </button>
      </div>

      {/* Popup Section */}
      {showPopup && (
  <div className="fixed inset-0 flex justify-center items-center z-50">
    <div className="w-[430px] h-[410px] lg:w-[550px] lg:h-[450px] xl:h-[450px] xl:w-[520px] p-4 rounded shadow-lg relative">
      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-4 right-4 lg:top-5 lg:right-5 text-white"
      >
        ✖
      </button>

      {/* Mobile Image */}
      <img
        src={mobile} // Replace with the small image URL
        alt="Popup Small"
        className="block lg:hidden w-full h-auto"
      />
      {/* Desktop Image */}
      <img
        src={desktop} // Replace with the large image URL
        alt="Popup Large"
        className="hidden lg:block w-full h-auto"
      />

      {/* Submit Now Button */}
      <div className="absolute bottom-4">
        <button
          onClick={() => {
            const contactSection = document.getElementById('contactSection');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
            setShowPopup(false); // Close the popup
          }}
          className="flex space-x-4 ml-52 -mb-5 sm:ml-52 sm:-mb-5 md:ml-44 lg:ml-72 lg:-mb-20 xl:ml-60 xl:-mb-10 px-3 py-2 md:px-4 md:py-2 sm:px-1 sm:py-1 xl:px-4 rounded-full bg-yellow-400 justify-center items-center text-black font-semibold text-base sm:text-xl"
        >
          <span>Join Now</span>
          <div className="bg-white w-7 sm:w-8 h-7 sm:h-8 rounded-full flex justify-center items-center">
            <FiArrowRight className="text-green-900 text-lg sm:text-xl" />
          </div>
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default StickOnContents;
