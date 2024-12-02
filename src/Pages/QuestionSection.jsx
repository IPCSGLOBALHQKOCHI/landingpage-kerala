import React from 'react'
import Questions from "../Components/Questions/Question"
function QuestionSection() {
  return (
    <div className='w-full h-[750px] bg-cover bg-center'
    style={{
        background:
          "linear-gradient(to right, #001F11 0%, #002614 15%, #00361D 28%, #00351C 44%, #003F23 57%, #004F29 65%, #004F2A 79%, #00582E 92%)",
      }}>
        <div>
          <h1 className='text-yellow-400 font-semibold text-center text-5xl pt-16'>Frequently Asked Questions</h1>
          <h5 className='text-center font-normal text-lg mt-6 text-white'> All you need to know</h5>
        </div>
        <Questions/>
      
    </div>
  )
}

export default QuestionSection
