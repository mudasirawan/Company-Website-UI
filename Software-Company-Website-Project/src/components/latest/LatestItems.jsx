import React from 'react'
const LatestItems = ({img, head}) => {
  return (
    <div className='flex latestCard gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 sm:p-6 mx-4 sm:mx-6 md:mx-8 transition-all duration-300 bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] hover:border-[#58a6ff]/50 rounded-2xl shadow-xl hover:shadow-[0_10px_30px_rgba(88,166,255,0.3)] transform hover:-translate-y-2 group cursor-pointer overflow-hidden'>
      <div className='flex-shrink-0 pl-2'>
        <img className='w-12 h-12 sm:w-14 sm:h-14 latestImg group-hover:scale-110 transition-transform duration-300 rounded-lg object-cover' src={img} alt='Latest Thoughts Image'/>
      </div>
      <div className='flex flex-col gap-3 min-w-0 flex-1'>
        <h4 className='latestHead text-sm sm:text-base font-bold leading-tight text-white group-hover:text-[#58a6ff] transition-colors duration-300 line-clamp-2'>{head}</h4>
        <div className='flex items-center gap-2'>
          <h6 className='latestRead text-xs sm:text-sm text-gray-300 group-hover:text-[#58a6ff] transition-colors font-medium'>Read More</h6>
          <i className="ri-arrow-right-line text-[#58a6ff] group-hover:translate-x-1 transition-transform duration-300"></i>
        </div>
        <div className='w-10 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#238636] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
    </div>
  )
}

export default LatestItems
