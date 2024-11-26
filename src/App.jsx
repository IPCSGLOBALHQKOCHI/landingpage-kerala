import React from 'react'
import IntroPage from './Pages/IntroPage'
import Counts from './Pages/Counts'
import SignatureCourses from './Pages/SignatureCourses'
import Placement from './Pages/Placement'
import SuccessStrories from './Pages/SuccessStrories'

function App() {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
<IntroPage />
<Counts/>
<SignatureCourses/>
<Placement/>
<SuccessStrories/>
    </div>
  )
}

export default App
