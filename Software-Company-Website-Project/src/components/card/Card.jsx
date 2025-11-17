import React from "react";

const Card = ({ icon, head, para }) => {
  return (
    <div className="m-2 sm:m-4 px-4 sm:px-6 md:px-8 lg:px-9 transition-all duration-300 py-8 sm:py-10 pb-16 sm:pb-20 md:pb-24 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] hover:border-[#58a6ff]/50 transform hover:-translate-y-2 cursor-pointer rounded-2xl shadow-2xl hover:shadow-[0_10px_30px_rgba(88,166,255,0.3)] group">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full gradient-icon flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full" src={icon} alt="Card Icon" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight text-white group-hover:text-[#58a6ff] transition-colors duration-300 mb-3">{head}</h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed px-2 mb-4">{para}</p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#238636] rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default Card;
