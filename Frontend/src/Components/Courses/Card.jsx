import React from "react";

function Card({ bgImage, Image, title1, description }) {
  return (
    <div className="mt-14 xl:ml-8 md:ml-4 xl:mr-0 lg:ml-8 lg:mr-4 md:mr-3 sm:ml-10 sm:mr-10 mr-12 ml-12  gap-0  lg:gap-2 xl:gap-4 xl:w-[24rem] lg:w-[20rem]">
      <div
        className="relative bg-cover bg-center rounded-2xl shadow-lg"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "400px",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(0,70,37,0.9)] to-[rgba(0,16,9,0.9)] rounded-2xl"
          style={{
            mixBlendMode: "multiply",
          }}
        ></div>
        <div className="absolute flex ">
          <div className="flex flex-col w-[48%]">
            <div className="mt-[40%] ml-6  ">
              <h2 className="text-yellow-400 xs:font-bold sm:font-extrabold font-extrabold xs:text-xl sm:text-3xl text-2xl">
                {title1}
              </h2>
            </div>
            <div className="mt-[10%] ml-6">
              <p
                className="text-white xs:text-sm sm:text-base text-sm"
                // dangerouslySetInnerHTML={{ __html: description }}
              >
                {" "}
                {description}
              </p>
            </div>
            <div className="mt-6 ml-6">
              <button
                className="absolute  bg-yellow-400 text-black text-center font-medium py-2 px-2 sm:py-2 sm:px-2 md:py-2 md:px-3 lg:py-2 lg:px-4 xl:py-2 xl:px-4 rounded-full text-sm sm:text-base md:text-lg lg:text-xl"
                onClick={() =>
                  document
                    .getElementById("contactSection")
                    .scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                Enroll Now
              </button>
            </div>
          </div>
          <img
            src={Image}
            alt={title1}
            className="self-end right-44 w-[52%] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
