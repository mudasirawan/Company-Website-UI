import React from 'react'
import FootHead from './FootHead'
import Footitems from './FootItems'
import spon1 from '../../assets/spon1.png'
import spon2 from '../../assets/spon2.png'
import spon3 from '../../assets/spon3.png'
import spon4 from '../../assets/spon4.png'

const Footer = () => {
  return (
    <footer className='grid items-center gap-6 sm:gap-8 w-full mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 lg:px-8 max-w-[1700px] mx-auto py-8 sm:py-10 md:grid-cols-2 lg:grid-cols-4 overflow-x-hidden'>
      <div className='w-full flex flex-col items-center lg:items-start gap-4 px-4 lg:px-6'>
        <FootHead head='services'/>
        <ul className='flex flex-col items-center lg:items-start gap-3'>
            <Footitems item='mobile app development'/>
            <Footitems item='web app development'/>
            <Footitems item='animation services'/>
            <Footitems item='video production services'/>
        </ul>
      </div>
      <div className='w-full flex flex-col items-center lg:items-start gap-4 px-4 lg:px-6'>
        <FootHead head='industries'/>
        <ul className='flex flex-col items-center lg:items-start gap-3'>
            <Footitems item='healthcare'/>
            <Footitems item='real estate'/>
            <Footitems item='retail & E-Commerce'/>
            <Footitems item='automotive'/>
            <Footitems item='education'/>
            <Footitems item='entertainment'/>
        </ul>
      </div>
      <div className='w-full flex flex-col items-center lg:items-start gap-4 px-4 lg:px-6'>
        <FootHead head='company'/>
        <ul className='flex flex-col items-center lg:items-start gap-3'>
            <Footitems item='about'/>
            <Footitems item='blog'/>
            <Footitems item='careers'/>
            <Footitems item='appointments'/>
            <Footitems item='process'/>
            <Footitems item='contact us'/>
        </ul>
      </div>
      <div className='w-full flex flex-col items-center lg:items-start gap-4 px-4 lg:px-6'>
        <FootHead head='contact us'/>
        <h4 className='text-sm sm:text-base md:text-lg font-medium'>+92 341 4658001</h4>
        <div className='flex gap-3 sm:gap-4 mt-3'>
            <div className='cursor-pointer border-2 border-zinc-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:border-zinc-500 transition-colors'>
              <i className="text-lg sm:text-xl ri-facebook-fill"></i>
            </div>
            <div className='cursor-pointer border-2 border-zinc-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:border-zinc-500 transition-colors'>
              <i className="text-lg sm:text-xl ri-mail-fill"></i>
            </div>
            <div className='cursor-pointer border-2 border-zinc-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:border-zinc-500 transition-colors'>
              <i className="text-lg sm:text-xl ri-twitter-fill"></i>
            </div>
        </div>
        <div className='flex gap-3 sm:gap-4 mt-2'>
            <a href="https://www.linkedin.com/company/smarttechone/" target="_blank" rel="noopener noreferrer" className='cursor-pointer border-2 border-zinc-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:border-zinc-500 transition-colors'>
              <i className="text-lg sm:text-xl ri-linkedin-fill"></i>
            </a>
            <div className='cursor-pointer border-2 border-zinc-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:border-zinc-500 transition-colors'>
              <i className="text-lg sm:text-xl ri-instagram-line"></i>
            </div>
            <div className='cursor-pointer border-2 border-zinc-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:border-zinc-500 transition-colors'>
              <i className="text-lg sm:text-xl ri-whatsapp-line"></i>
            </div>
        </div>
      </div>
      <div className='col-span-full flex flex-col text-center items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12 lg:mt-16 w-full border-t border-zinc-300 pt-6 sm:pt-8'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 w-full'>
          <h6 className='copyright text-xs sm:text-sm md:text-base text-center md:text-left'>&copy;2020-2025 Capital Smart City PVT LTD. All rights reserved.</h6>
          <div className='flex gap-4 sm:gap-6 md:gap-8 justify-center'>
            <h5 className='text-xs sm:text-sm md:text-base text-blue-700 cursor-pointer hover:text-blue-800 transition-colors'>Privacy Policy</h5>
            <h5 className='text-xs sm:text-sm md:text-base text-blue-700 cursor-pointer hover:text-blue-800 transition-colors'>Terms & Condition</h5>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full'>
          <div className='flex items-center gap-3 sm:gap-4'>
            <img className='h-8 sm:h-10 md:h-12 cursor-pointer hover:opacity-80 transition-opacity' src={spon1} alt='Sponsors Image'/>
            <img className='h-6 sm:h-8 md:h-10 cursor-pointer hover:opacity-80 transition-opacity' src={spon2} alt='Sponsors Image'/>
            <img className='h-6 sm:h-8 md:h-10 cursor-pointer hover:opacity-80 transition-opacity' src={spon3} alt='Sponsors Image'/>
            <img className='h-8 sm:h-10 md:h-12 cursor-pointer hover:opacity-80 transition-opacity' src={spon4} alt='Sponsors Image'/>
          </div>
          <div className='flex mt-2 sm:mt-0'>
            <h3 className='bg-yellow-400 px-2 py-1 text-white text-xs sm:text-sm font-bold'>DMCA</h3>
            <h3 className='bg-black text-white px-2 py-1 text-xs sm:text-sm font-bold'>PROTECTED</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
