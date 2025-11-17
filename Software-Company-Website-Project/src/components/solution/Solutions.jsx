import React from 'react'
import SoluCards from './SoluCards'
import dev1 from '../../assets/dev1.png'
import dev2 from '../../assets/dev2.png'
import dev3 from '../../assets/dev3.png'
import dev4 from '../../assets/dev4.png'
import dev5 from '../../assets/dev5.png'
import dev6 from '../../assets/dev6.png'
const Solutions = () => {
  return (
    <div className='mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto'>
      <div className='flex flex-col gap-4 items-center text-center mb-8 sm:mb-12'>
        <div className='inline-flex items-center gap-2 bg-[#161b22] px-4 py-2 rounded-full border border-[#30363d]'>
          <span className='w-2 h-2 bg-[#58a6ff] rounded-full animate-pulse'></span>
          <h6 className='text-xs sm:text-sm uppercase text-[#58a6ff] font-semibold tracking-wider'>your choice of weapon</h6>
        </div>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight max-w-4xl px-4'>
          <span className='text-white'>USE OUR </span>
          <span className='bg-gradient-to-r from-[#58a6ff] via-[#238636] to-[#ff6b35] bg-clip-text text-transparent'>END-TO-END</span>
          <br className='hidden sm:block' />
          <span className='text-white'>DIGITAL SOLUTIONS</span>
        </h2>
        <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed'>
          Transform your business with cutting-edge technology solutions designed for the modern digital landscape
        </p>
        <div className='w-24 h-1 bg-gradient-to-r from-[#58a6ff] to-[#238636] rounded-full mt-4'></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-6 lg:px-8'>
        <SoluCards icon={dev1} head='Mobile development' para='With the expertise of our development professionals, you can create intuitive mobile apps for iOS/Android or go cross-platform.'/>
        <SoluCards icon={dev2} head='web development' para='With the aid of a responsive and dynamic company or eCommerce website, you may strengthen your online presence.'/>
        <SoluCards icon={dev3} head='blockchain development' para='Cryptocurrency creation, wallet development, smart contract development, and multichain/ hyper ledger solutions are all possible with blockchain.'/>
        <SoluCards icon={dev4} head='progressive web application' para='Tech startups, multinational corporations, and large-scale organisations can benefit from our progressive web app development services.'/>
        <SoluCards icon={dev5} head='E-commerce & CMS' para='To provide end-to-end Magento, Shopify, and WordPress development solutions, our eCommerce and CMS development specialists use best development techniques.'/>
        <SoluCards icon={dev6} head='digital marketing' para='Our specialists will create digital marketing plans that will help you promote your business online.'/>
      </div>
    </div>
  )
}

export default Solutions
