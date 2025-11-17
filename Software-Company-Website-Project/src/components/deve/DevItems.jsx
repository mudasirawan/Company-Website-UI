import React from 'react'

const DevItems = ({icons, name}) => {
  return (
    <div className='flex items-center flex-col gap-3 cursor-pointer transition-all duration-300 py-4 sm:py-6 px-4 sm:px-6 rounded-2xl bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] hover:border-[#58a6ff]/50 min-w-[140px] sm:min-w-[160px] shadow-xl hover:shadow-[0_10px_30px_rgba(88,166,255,0.3)] transform hover:-translate-y-1 group'>
        <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full gradient-icon flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
          <img className='w-12 h-12 sm:w-14 sm:h-14 rounded-full' src={icons} alt='Icons Image'/>
        </div>
        <h5 className='capitalize text-sm sm:text-base text-center leading-tight text-white group-hover:text-[#58a6ff] transition-colors duration-300 font-semibold'>{name}</h5>
        <div className='w-8 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#238636] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
    </div>
  )
}

export default DevItems
