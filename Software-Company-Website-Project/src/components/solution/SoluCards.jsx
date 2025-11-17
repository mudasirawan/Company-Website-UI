import React from 'react'

const SoluCards = ({icon, head, para}) => {
  return (
    <div className='devParent flex flex-col sm:flex-row max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl cursor-pointer transition-all duration-300 group rounded-2xl py-6 sm:py-8 px-4 sm:px-6 mx-auto bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] hover:border-[#58a6ff]/50 items-center text-center sm:text-left shadow-2xl hover:shadow-[0_10px_30px_rgba(88,166,255,0.3)] transform hover:-translate-y-2'>
      <div className='flex-shrink-0 mb-4 sm:mb-0 sm:mr-6'>
        <div className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full gradient-icon flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
          <img className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full' src={icon} alt='Dev Icon'/>
        </div>
      </div>
      <div className='flex flex-col gap-3 flex-1'>
        <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#58a6ff] transition-colors duration-300 leading-tight'>{head}</h3>
        <p className='text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300'>{para}</p>
        <div className='w-12 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#238636] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
    </div>
  )
}

export default SoluCards
