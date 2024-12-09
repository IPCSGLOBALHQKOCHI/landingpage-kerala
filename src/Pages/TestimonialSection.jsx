import React from "react";
import TestimonialsCards from "../Components/Testimonials/Testimonialscards";
import CommaVector from "../../src/assets/vectors/Vector (5).png";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto my-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 h-auto lg:h-[680px] flex flex-col items-center lg:items-start px-6 lg:pl-32 lg:pt-28">
        <img
          src={CommaVector}
          className="w-[100px] h-[120px] lg:w-[140px] lg:h-[160px]"
          alt="Comma Icon"
        />
        <h1 className="text-center lg:text-left mt-4 lg:mt-6 text-2xl lg:text-4xl text-[#067D45] font-semibold">
          STUDENTS INSIGHTS
        </h1>
        <p className="text-center sm:text-center text-ellipsis lg:text-left xl:text-left mt-4 lg:mt-8 text-base lg:text-xl leading-normal font-normal text-[#212121]">
          From feeling lost to reaching our dreams, we've come a long way.
          Thanks to their expert guidance and dedication. In today’s digital
          world, staying ahead means going digital and choosing to study with
          the most experienced team has been our smartest move. We’re more than
          ready, we’re eager to take on new challenges and create our future!
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-auto lg:h-[680px] flex justify-center items-center mt-8 lg:mt-0">
        <TestimonialsCards />
      </div>
    </div>
  );
};



export default TestimonialSection;
