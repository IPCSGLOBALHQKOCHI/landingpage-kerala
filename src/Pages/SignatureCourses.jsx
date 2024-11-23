import { FiArrowRight } from "react-icons/fi";
import ImageSlider from '../Components/ImageSlider'

function SignatureCourses() {
  return (
    <div className=' w-full h-screen mt-28'>
        <div>
            <h1 className='text-black text-center text-4xl font-bold'>Signature <span className='text-[#008145]'>Courses</span></h1>
            <h3 className='text-center text-lg font-normal mt-3'>check our extensive range of educational offerings</h3>
            <ImageSlider/>
            <div>
            <button className=" flex ml-[550px] items-center mt-16 mb-44 space-x-4 pr-2 rounded-full py-[5px] pl-10 bg-yellow-400 text-black font-semibold text-lg ">
          <span>Explore Courses</span>
          <div className="bg-white w-10 h-10 rounded-full">
            <FiArrowRight className="w-7 h-7 ml-2 mt-1 text-green-900" />
          </div>
        </button>
            </div>
        </div>
    </div>
  )
}

export default SignatureCourses
