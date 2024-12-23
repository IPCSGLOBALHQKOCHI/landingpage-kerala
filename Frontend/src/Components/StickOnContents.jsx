import React from 'react';
import whatsappIcon from "../../src/assets/images/whatsapp_3670133.png"
import CallIcon from "../../src/assets/images/telephone_724664.png"
const StickOnContents = () => {
  return (
    <div className="fixed  bottom-2 right-5 flex flex-col items-end space-y-4 z-50">
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
      <a
        href="https://wa.me/message/2JUOJKIQBVEUD1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center"
      >
        <img src={whatsappIcon} alt="WhatsApp Icon" />
      </a>
    </div>
  
    {/* Enquire Now Button */}
    <div>
      <button
        onClick={() =>
          document.getElementById("contactSection").scrollIntoView({
            behavior: "smooth",
          })
        }
        className="flex items-center justify-center px-6 py-3 rounded-full text-black font-semibold text-base"
        style={{
          background: "linear-gradient(to right, #FFE902 0%, #FEBE10 100%)",
        }}
      >
        <span className="text-xl">Enquire Now</span>
      </button>
    </div>
  </div>  
  );
};

export default StickOnContents;
