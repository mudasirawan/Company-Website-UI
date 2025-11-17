import React from 'react'
import latest from '../../assets/latest-main.jpg'
import latest1 from '../../assets/latest1.jpg'
import latest2 from '../../assets/latest2.jpg'
import latest3 from '../../assets/latest3.jpg'
import LatestItems from './LatestItems' 
const Latest = () => {
  return (
    <div className='px-2 sm:px-3 mt-12 sm:mt-16 md:mt-20 max-w-[1600px] mx-auto'>
      <div className='flex flex-col items-center gap-2'>
        <h6 className='text-xs sm:text-sm uppercase'>INSIGHTS</h6>
        <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase text-center px-2'>our latest thoughts</h2>
      </div>
      <div className='mt-6 sm:mt-8 md:mt-10 lg:flex lg:p-4 xl:p-8 lg:gap-4 xl:gap-6'>
        <div className='w-full flex flex-col items-center lg:w-[50%] mb-6 lg:mb-0'>
            <img className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg' src={latest} alt='Latest Main Image'/>
        </div>
        <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center lg:w-[50%] lg:mt-0'>
            <LatestItems img={latest1} head='Online Marketplace App Development Guide Before You Startup'/>
            <LatestItems img={latest2} head='MEAN Stack VS MERN Stack: Which Full Stack Web App Development Framework Should You Go For Your Business?'/>
            <LatestItems img={latest3} head='Top Mobile Application Development Trends To Look Out For in 2021'/>
        </div>
      </div>
    </div>
  )
}

export default Latest
