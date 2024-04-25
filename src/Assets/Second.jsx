import React from 'react'
import pic2 from './pic2.png'
import Rectangle from './Rectangle'
import Bottom from './Bottom'
const Second = () => {
  return (
    <section>
    <div className=' bg-blue '>
     <div className='flex justify-center items-center relative '>
      <img src={pic2} className=' w-40 h-40 pt-6  pl-95 ' />
    </div>
    <h1 className='text-white text-center  font-bold text-2xl pt-0'>Premium PRO</h1>
    <h1 className='text-white text-center  font-bold text-2xl pt-0'>$329</h1>
    <h1 className='text-white text-center text-xl pt-0 pb-2'>billed just once</h1>
    </div>
    <div className='pt-2'>
    <Rectangle/>
    </div>
    <div className='pt-2'>
    < Bottom />
    
    </div>
   
    </section>
  )
}

export default Second