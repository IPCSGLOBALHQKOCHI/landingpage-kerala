import { div } from 'framer-motion/client'
import React from 'react'

function SuccessStrories() {
  return (
    <div className='w-full h-[700px] bg-cover bg-center'
     style={{
         background:
         "linear-gradient(to right, #001F11 0%, #002614 15%, #00361D 28%, #00351C 44%, #003F23 57%, #004F29 65%, #004F2A 79%, #00582E 92%)",
        }}>
      <h1 className='text-center text-5xl text-yellow-400 font-semibold'>Success Stories</h1>
      <h3>View our successes! Hear directly from our students whose achievements reflect our dedication</h3>
    </div>
  )
}

export default SuccessStrories
