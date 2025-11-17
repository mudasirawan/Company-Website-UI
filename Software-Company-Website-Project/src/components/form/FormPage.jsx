import React, { useState } from "react";
import dotBack from '../../assets/formBack.png'
const FormPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mgvrqrgw', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setError(err.message);
    }

    setIsSubmitting(false);
  };

  if (success) {
    return (
      <div className="p-4 sm:p-6 md:p-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:gap-12 bg-[#0d1117] md:flex-row md:justify-center mt-16 sm:mt-20 md:mt-24 w-full max-w-[1600px] mx-auto">
        <div className="lg:h-fit md:w-[50%] lg:w-[40%] mb-6 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-bold leading-tight text-white">Thanks for joining!</h1>
          <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 w-full md:w-fit leading-relaxed text-gray-300">
            We will get back to you soon.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div id="form" className="p-4 sm:p-6 md:p-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:gap-12 bg-[#0d1117] md:flex-row md:justify-center mt-16 sm:mt-20 md:mt-24 w-full max-w-[1600px] mx-auto">
      <div className="lg:h-fit md:w-[50%] lg:w-[40%] mb-6 md:mb-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-bold leading-tight text-white">Drop us a line</h1>
        <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 w-full md:w-fit leading-relaxed text-gray-300">
          Stay Ahead of Competition with an Intuitive Mobile App for Your Business.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4 lg:w-[60%] px-2 w-full">
        <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col gap-6 flex-1">
            <input
              id="name"
              name="name"
              className="w-full text-sm sm:text-base lg:text-lg bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 outline-none focus:border-[#58a6ff] transition-colors text-white placeholder-gray-400"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              id="email"
              name="email"
              className="w-full text-sm sm:text-base lg:text-lg bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 outline-none focus:border-[#58a6ff] transition-colors text-white placeholder-gray-400"
              type="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <input
              id="phone"
              name="phone"
              className="w-full text-sm sm:text-base lg:text-lg bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 outline-none focus:border-[#58a6ff] transition-colors text-white placeholder-gray-400"
              type="tel"
              placeholder="Phone Number"
            />
            <input
              id="skype"
              name="skype"
              className="w-full text-sm sm:text-base lg:text-lg bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 outline-none focus:border-[#58a6ff] transition-colors text-white placeholder-gray-400"
              type="text"
              placeholder="Skype"
            />
          </div>
        </div>
        <textarea
          id="message"
          name="message"
          className="w-full bg-[#161b22] border border-[#30363d] rounded-lg text-sm sm:text-base lg:text-lg px-4 py-3 outline-none focus:border-[#58a6ff] transition-colors text-white placeholder-gray-400 resize-none"
          rows="4"
          placeholder="Add Description"
          required
        ></textarea>
        {error && <p className="text-red-400">{error}</p>}
        <button type="submit" disabled={isSubmitting} className="uppercase px-8 py-3 text-sm sm:text-base lg:text-lg bg-gradient-to-r from-[#58a6ff] to-[#238636] text-white rounded-lg w-fit mt-6 cursor-pointer hover:from-[#4a90ff] hover:to-[#1e7e34] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FormPage;
