import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Footer from "./components/footer/Footer";
import CardPage from "./components/card/CardPage";
import FormPage from "./components/form/FormPage";
import Solutions from "./components/solution/Solutions";
import Dev from "./components/deve/Dev";
import Latest from "./components/latest/Latest";
import Header from './Header'

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0d1117] text-white min-h-screen overflow-hidden">
      <Header />

      {/* Dynamic Animated Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ zIndex: 1 }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]"></div>

          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="hero-particle absolute w-1 h-1 bg-[#58a6ff] rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `particleFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Geometric Shapes */}
          <div
            className="hero-geometric absolute top-20 left-10 w-32 h-32 border border-[#58a6ff] opacity-20"
            style={{
              transform: `translateY(${scrollY * 0.2}px) rotate(${45 + scrollY * 0.05}deg)`,
              animation: `geometricRotate 20s linear infinite`,
            }}
          ></div>
          <div
            className="hero-geometric absolute top-40 right-20 w-24 h-24 border border-[#238636] opacity-20"
            style={{
              transform: `translateY(${scrollY * 0.3}px) rotate(${12 + scrollY * 0.03}deg)`,
              animation: `geometricRotate 25s linear infinite reverse`,
            }}
          ></div>
          <div
            className="hero-geometric absolute bottom-40 left-20 w-40 h-40 border border-[#ff6b35] opacity-10 rounded-full"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
              animation: `geometricRotate 30s linear infinite`,
            }}
          ></div>

          {/* Code Snippets Animation */}
          <div
            className="absolute top-32 right-10 text-[#58a6ff] font-mono text-sm opacity-30"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            <div className="animate-pulse">{'{'} code: "innovation" {'}'}</div>
          </div>
          <div
            className="absolute bottom-32 left-10 text-[#238636] font-mono text-sm opacity-30"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          >
            <div className="animate-pulse">function develop() {'{'}</div>
            <div className="animate-pulse ml-4">return "success";</div>
            <div className="animate-pulse">{'}'}</div>
          </div>

          {/* Floating Tech Icons */}
          <div
            className="absolute top-1/4 left-1/4 text-4xl text-[#58a6ff] opacity-20"
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
            }}
          >
            <i className="ri-code-s-slash-line animate-bounce"></i>
          </div>
          <div
            className="absolute top-1/3 right-1/3 text-3xl text-[#238636] opacity-20"
            style={{
              transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.03}deg)`,
            }}
          >
            <i className="ri-git-branch-line animate-pulse"></i>
          </div>
          <div
            className="absolute bottom-1/4 right-1/4 text-5xl text-[#ff6b35] opacity-10"
            style={{
              transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.02}deg)`,
            }}
          >
            <i className="ri-rocket-line animate-bounce"></i>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Animated Title */}
          <div
            className="mb-6 sm:mb-8"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-[#58a6ff] via-[#238636] to-[#ff6b35] bg-clip-text text-transparent animate-pulse">
                Build & Ship
              </span>
              <br />
              <span className="text-white">Software</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58a6ff] to-[#238636] mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Animated Subtitle */}
          <div
            className="mb-8 sm:mb-10"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 max-w-4xl leading-relaxed">
              Transform ideas into production-ready applications with our
              <span className="text-[#58a6ff] font-semibold"> collaborative platform</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-gray-400">
              <span className="bg-[#161b22] px-3 py-1 rounded-full border border-[#30363d]">⚡ Fast Development</span>
              <span className="bg-[#161b22] px-3 py-1 rounded-full border border-[#30363d]">🚀 Scalable Solutions</span>
              <span className="bg-[#161b22] px-3 py-1 rounded-full border border-[#30363d]">🔒 Secure & Reliable</span>
            </div>
          </div>

          {/* Animated CTA Section */}
          <div
            className="w-full max-w-2xl"
            style={{
              transform: `translateY(${scrollY * -0.02}px)`,
            }}
          >
            <div className="bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#58a6ff] text-center">Start Building Today</h3>
              <div className="flex justify-center">
                <button
                  onClick={() => document.getElementById('form').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-[#58a6ff] to-[#238636] hover:from-[#4a90ff] hover:to-[#1e7e34] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  Get Started
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                Join 10,000+ developers building the future
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#58a6ff] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#58a6ff] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="main py-3 mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-8">

        <Solutions />
        <Dev />
        <CardPage />
        <Latest />
      </div>
      <div className="max-1700px mx-auto w-screen">
        <FormPage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
