import React from 'react'
import { CheckIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/outline';
const Rectangle = () => {
  return (
    
      <div className=' flex justify-center  items-center '> 
    <div className='bg-white h-64 w-64 rounded-md'>
    <p className='text-black pt-5 pl-4 text-justify  justify-start'>
    Access these features when you <br/>
    get this pricing package for your <br/>
    business.
    </p>
    <div className="flex items-center pt-3 pl-4">
      <CheckIcon className=" h-6 pr-0 w-6 text-blue " />
      <span className=' text-xs '>Internation Calling and messaging API</span>
    </div>
    <div className="flex items-center pt-0 pl-4">
      <CheckIcon className=" h-6 pr-0 w-6 text-blue " />
      <span className=' text-xs '> Additional Phone Numbers</span>
    </div>
    <div className="flex items-center pt-0 pl-4">
      <CheckIcon className=" h-6 pr-0 w-6 text-blue " />
      <span className=' text-xs '>Automated messages via zappier</span>
    </div>
    <div className="flex items-center pt-0 pl-4">
      <CheckIcon className=" h-6 pr-0 w-6 text-blue " />
      <span className=' text-xs '>24/7 support and consulting</span>
    </div>
    <div className='flex item-center pt-6'>
    <section className=' pl-4 '>
    <div className="flex items-center bg-blue pl-0 h-6 w-6 ">
      <ShoppingCartIcon className=" h-10 w-10 text-white mr-2" />
    </div>
    </section>
    <button className="  h-6 w-44 pl-16 bg-blue flex items-center ml-4 text-white  text-center  ">Buy Now</button>
   </div>

    </div>
    </div>

    
  )
}

export default Rectangle
