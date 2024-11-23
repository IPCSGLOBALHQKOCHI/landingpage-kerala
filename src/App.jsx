import React from 'react'
import IntroPage from './Pages/IntroPage'
import Counts from './Pages/Counts'
import SignatureCourses from './Pages/SignatureCourses'

function App() {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
<IntroPage />
<Counts/>
<SignatureCourses/>
    </div>
  )
}

export default App
