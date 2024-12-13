import React from 'react'
import Questions from "../Components/Questions/Question"
function QuestionSection() {
  return (
    <div
    className="w-full h-auto min-h-[600px] md:min-h-[750px] bg-cover bg-center py-10 pl-8"
    style={{
      background:
        "linear-gradient(to right, #001F11 0%, #002614 15%, #00361D 28%, #00351C 44%, #003F23 57%, #004F29 65%, #004F2A 79%, #00582E 92%)",
    }}
  >
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-yellow-400 font-semibold text-center text-3xl md:text-5xl pt-8 md:pt-16">
          Frequently Asked Questions
        </h1>
        <h5 className="text-center font-normal text-base md:text-lg mt-4 md:mt-6 text-white">
          All you need to know
        </h5>
      </div>
      {/* Render the Questions Component */}
      <div className="mt-8">
        <Questions />
      </div>
    </div>
  </div>
  
  )
}

export default QuestionSection