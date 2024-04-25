import React from 'react';
import { CurrencyDollarIcon, ShareIcon } from '@heroicons/react/outline';
import FreeCodeCampIcon from './pic3.png';

const Rectangle = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full md:w-screen">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center pt-2 md:pt-0 md:ml-20">
          <CurrencyDollarIcon className="h-6 w-6 text-black font-bold mr-2" />
          <span className='text-black font-bold'>30 days money back Guarantee</span>
        </div>
        <div className="flex items-center pt-2 md:pt-0 md:ml-20">
          <img src={FreeCodeCampIcon} className="h-6 w-6 text-black mr-2" alt="FreeCodeCamp Icon" />
          <span className='text-black font-bold'>No setup fees 100% hassle-free</span>
        </div>
        <div className="flex items-center pt-2 md:pt-0 md:ml-20">
          <ShareIcon className="h-6 w-6 text-black font-bold mr-2" />
          <span className='text-black font-bold text-sm'>No monthly subscription Pay once and for all</span>
        </div>
      </div>
    </div>
  );
}

export default Rectangle;



