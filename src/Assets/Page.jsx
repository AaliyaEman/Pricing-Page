import React from 'react'
 import page1 from './page1.png'
 import {Link } from 'react-router-dom';
 import Second from './Second.jsx'
const Page = () => {
  return (
    <div>
    <div className='flex justify-center items-center relative '>
      <img src={page1} className=' w-96 h-96 pt-28  pl-95 ' />
    </div>
    <h1 className=' pt-8 text-black font-semibold text-4xl  leading-12 tracking-tight text-center' >Simple pricing for your business</h1>
  <h3 className=' text-black text-center  text-lg pt-4'>Plans that are carefully crafted to suit your business.</h3>
  <div class="flex justify-center items-center pt-7">
  <Link  to="/next " class=" text-white pl-4 pt-2 pb-2 rounded-xl text-bold w-28 h-10 bg-blue  cursor-pointer ">
    Get Started
  </Link>
</div>

    </div>
  )
}

export default Page
