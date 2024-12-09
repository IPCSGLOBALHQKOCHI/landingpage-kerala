import React from 'react'
import PlacementImageSlider from '../Components/Placement/PlacementImageSlider';

function Placement() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
    <div className="mb-[80px] mt-8">
      <h1 className="text-black text-3xl sm:text-4xl md:text-5xl text-center font-semibold">
        Your FUTURE, 
        <span className="text-[#067D45]">Our FOCUS</span>, Your FULFILLMENT
      </h1>
      <h3 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-black text-opacity-70 mt-3">
        PLACEMENT ASSISTANCE
      </h3>
      <div className="mt-10">
        <PlacementImageSlider />
      </div>
    </div>
  </div>
  
  )
}

export default Placement;
