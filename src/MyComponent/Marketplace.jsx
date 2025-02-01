import React, { useState , useEffect, useRef } from 'react'
import { gsap } from "gsap";
import DashboardWrapper from './DashboardWrapper'
import Header from './Header'
import Footer from './Footer'
import img from './icon/logo.png'
import agroLogo from './icon/logot.png'

function Marketplace() {

  
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleClick = (e, url) => {
    e.preventDefault();  // Prevent default link behavior
    setRedirectUrl(url);
    setLoading(true);
  
    setTimeout(() => {
      setLoading(false);
      window.location.href = url; // Redirect after animation
    }, 2000); // Increase time if animation needs more time
  };

  return (
    <DashboardWrapper>
    <div className=' md:w-[1250px] md:absolute md:top-6 md:left-[200px] bg-white overflow-y-auto'>
    <Header pagename='Marketplace'/>
    <div className="flex flex-col md:flex-row w-full ">
      {/* Sidebar Placeholder */}
      {/* <div className="hidden md:block w-1/4 bg-gray-100 h-screen"></div> */}
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-6 w-full md:w-3/4 mt-[160px] md:mt-20  md:ml-[200px]">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          All in 1 Solution to Seeds And Fertilizers
        </h1>
        <p className="text-center text-gray-600 max-w-xl mt-2">
          saurav zure nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate.
          Labore recusandae facilis veritatis consectetur expedita.
        </p>
        
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="flex items-center justify-center h-screen w-screen bg-black overflow-hidden">
      <svg width="600" height="100" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .letter {
              opacity: 0;
              animation: fadeIn 1s ease-in-out forwards;
            }

            .letter:nth-child(1) { animation-delay: 0.1s; }
            .letter:nth-child(2) { animation-delay: 0.2s; }
            .letter:nth-child(3) { animation-delay: 0.3s; }
            .letter:nth-child(4) { animation-delay: 0.4s; }
            .letter:nth-child(5) { animation-delay: 0.5s; }
            .letter:nth-child(6) { animation-delay: 0.6s; }
            .letter:nth-child(7) { animation-delay: 0.7s; }
            .letter:nth-child(8) { animation-delay: 0.8s; }
            .letter:nth-child(9) { animation-delay: 0.9s; }
            .letter:nth-child(10) { animation-delay: 1s; }
            .letter:nth-child(11) { animation-delay: 1.1s; }
            .letter:nth-child(12) { animation-delay: 1.2s; }
            .letter:nth-child(13) { animation-delay: 1.3s; }
            .letter:nth-child(14) { animation-delay: 1.4s; }
            .letter:nth-child(15) { animation-delay: 1.5s; }
            .letter:nth-child(16) { animation-delay: 1.6s; }
            .letter:nth-child(17) { animation-delay: 1.7s; }
            .letter:nth-child(18) { animation-delay: 1.8s; }
            .letter:nth-child(19) { animation-delay: 1.9s; }

            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translateY(-10px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>

        <text x="10" y="50" fontFamily="Arial, sans-serif" fontSize="36" fill="white" infinite>
          <tspan className="letter">A</tspan>
          <tspan className="letter">g</tspan>
          <tspan className="letter">r</tspan>
          <tspan className="letter">o</tspan>
          <tspan className="letter"> </tspan>
          <tspan className="letter">C</tspan>
          <tspan className="letter">o</tspan>
          <tspan className="letter">n</tspan>
          <tspan className="letter">n</tspan>
          <tspan className="letter">e</tspan>
          <tspan className="letter">c</tspan>
          <tspan className="letter">t</tspan>
          <tspan className="letter"> </tspan>
          <tspan className="letter">I</tspan>
          <tspan className="letter">n</tspan>
          <tspan className="letter">d</tspan>
          <tspan className="letter">i</tspan>
          <tspan className="letter">a.</tspan>
        </text>
      </svg>
    </div>
            </div>
          </div>
        )}
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
  <button onClick={(e) => handleClick(e, 'https://example.com/seeds')}>
    <div className='flex flex-col'>
      <div className="bg-gray-200 rounded-lg w-full h-52 flex items-center justify-center"></div>
      <p className='text-center font-bold mt-2 text-black'>Seeds</p>
    </div>
  </button>

  <button onClick={(e) => handleClick(e, 'https://example.com/fertilizer')}>
    <div className='flex flex-col'>
      <div className="bg-gray-200 rounded-lg w-full h-52 flex items-center justify-center"></div>
      <p className='text-center font-bold mt-2 text-black'>Fertilizer</p>
    </div>
  </button>

  <button onClick={(e) => handleClick(e, 'https://example.com/urea')}>
    <div className='flex flex-col'>
      <div className="bg-gray-200 rounded-lg w-full h-52 flex items-center justify-center"></div>
      <p className='text-center font-bold mt-2 text-black'>Urea</p>
    </div>
  </button>
</div>

<button
  className="mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg"
  onClick={(e) => handleClick(e, 'https://example.com/store')}>
  Jump to Store
</button>

        
        
      </div>
    </div>
    <Footer/>
    </div>
    </DashboardWrapper>
  )
}

export default Marketplace
