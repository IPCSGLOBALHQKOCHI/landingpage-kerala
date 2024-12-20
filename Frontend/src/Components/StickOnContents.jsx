import React from 'react';
import whatsappIcon from "../../src/assets/images/whatsapp_3670133.png"
import CallIcon from "../../src/assets/images/telephone_724664.png"
const StickOnContents = () => {
  return (
    <div className="fixed bottom-14 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 flex flex-col space-y-4 z-50">
           <a
        href="tel:+91 98467 70771"
        className="w-[52px]  h-[52px] rounded-full flex items-center justify-center"
      >
        <img src={CallIcon} />
      </a>
      <a
        href="https://wa.me/message/2JUOJKIQBVEUD1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center"
      >
        <img src={whatsappIcon} />
      </a>
    </div>
  );
};

export default StickOnContents;
