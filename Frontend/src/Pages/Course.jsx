import React from 'react'
import CourseLists from '../Components/Courses/CourseLists'
function Course() {
    return (
        <div id="courses" className=' absloute w-full h-[3200px] sm:h-[480px]  mt-20 mb-40'>
            <div>
                <h1 className='text-black text-center text-4xl font-bold'>Signature <span className='text-[#008145]'>Courses</span></h1>
                <h3 className='text-center text-lg font-medium text-black text-opacity-80 !px-2 mt-3'>Check our extensive range of educational offerings</h3>
                <CourseLists /> 
            </div>
            {/* <button className=" relative flex ml-[140px] sm:ml-[250px] md:ml-[380px] lg:ml-[470px] xl:ml-[580px] items-center mt-4 mb-44 space-x-4 pr-2 rounded-full py-[5px] pl-10 bg-yellow-400 text-black font-semibold text-lg ">
              <span>Explore Courses</span>
              <div className="bg-white w-10 h-10 rounded-full">
                <FiArrowRight className="w-7 h-7 ml-2 mt-1 text-green-900" />
              </div>
            </button> */}
        </div>
      )
}

export default Course
