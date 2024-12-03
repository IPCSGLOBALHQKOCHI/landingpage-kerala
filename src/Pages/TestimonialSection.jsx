import React from "react";
import TestimonialsCards from "../Components/Testimonials/Testimonialscards";
import CommaVector from "../../src/assets/vectors/Vector (5).png";

function TestimonialSection() {
  return (
    <div className="flex w-full h-auto">
    {/* Left Section */}
    <div className="w-1/2 h-[680px]">
      <div className="ml-32 mt-28">
        <img src={CommaVector} className="w-[140px] h-[160px]" />
      </div>
      <h1 className="text-left ml-32 mt-6 text-4xl text-[#067D45] font-semibold">
        STUDENTS INSIGHTS
      </h1>
      <p className="text-left ml-32 mt-8 leading-normal text-xl mr-3 font-normal text-[#212121]">
        From feeling lost to reaching our dreams, we've come a long way. Thanks
        to their expert guidance and dedication. In today’s digital world,
        staying ahead means going digital and choosing to study with the most
        experienced team has been our smartest move. We’re more than ready,
        we’re eager to take on new challenges and create our future!
      </p>
    </div>
  
    {/* Right Section */}
    <div className="w-1/2 h-[680px] flex">
      <TestimonialsCards />
    </div>
  </div>
  
  );
}

export default TestimonialSection;
