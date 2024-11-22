function Counts() {
  return (
    <div className="w-full h-auto flex flex-col sm:flex-row justify-between items-center mt-8 mb-8 space-y-8 sm:space-y-0 sm:space-x-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
      {/* Presence Across Country Card */}
      <div className="w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 h-[275px] bg-[#CFCFCF66] rounded-2xl">
        <div className="bg-[#CBEADB] w-24 h-24 mt-6 mx-auto rounded-full flex justify-center items-center">
          <img
            src="/assets/_x31_33_x2C__Globe_x2C__Location_x2C__Seo.png"
            className="w-16 h-16"
            alt="Icon"
          />
        </div>
        <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-4 text-[#026336] bg-opacity-100">
          30+
        </h4>
        <h6 className="text-black text-center sm:text-left ml-3 mt-4 font-semibold text-lg">
          Presence Across Country
        </h6>
      </div>

      {/* Industrial Projects Card */}
      <div className="w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 h-[275px] bg-[#CFCFCF66] rounded-2xl">
        <div className="bg-[#CBEADB] w-24 h-24 mt-6 mx-auto rounded-full flex justify-center items-center">
          <img
            src="/assets/gear_850752 1.png"
            className="w-16 h-16"
            alt="Icon"
          />
        </div>
        <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-4 text-[#026336] bg-opacity-100">
          1200+
        </h4>
        <h6 className="text-black text-center sm:text-left mt-4 ml-10 font-semibold text-lg">
          Industrial Projects
        </h6>
      </div>

      {/* Trained Professionals Card */}
      <div className="w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 h-[275px] bg-[#CFCFCF66] rounded-2xl">
        <div className="bg-[#CBEADB] w-24 h-24 mt-6 mx-auto rounded-full flex justify-center items-center">
          <img
            src="/assets/Vector (2).png"
            className="w-16 h-16"
            alt="Icon"
          />
        </div>
        <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-4 text-[#026336] bg-opacity-100">
          15000
        </h4>
        <h6 className="text-black text-center sm:text-left mt-4 ml-9 font-semibold text-lg">
          Trained Professionals
        </h6>
      </div>

      {/* Corporate Partners Card */}
      <div className="w-full sm:w-64 md:w-64 lg:w-64 xl:w-64 h-[275px] bg-[#CFCFCF66] rounded-2xl">
        <div className="bg-[#CBEADB] w-24 h-24 mt-6 mx-auto rounded-full flex justify-center items-center">
          <img
            src="/assets/Vector (3).png"
            className="w-16 h-16"
            alt="Icon"
          />
        </div>
        <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-4 text-[#026336] bg-opacity-100">
          120+
        </h4>
        <h6 className="text-black text-center sm:text-left mt-4 font-semibold ml-10 text-lg">
          Corporate Partners
        </h6>
      </div>
    </div>
  );
}

export default Counts;
