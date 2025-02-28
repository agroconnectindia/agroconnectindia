import React, { useEffect, useState } from 'react';
import './App.css'

import Report from './MyComponent/Report'
import About from './MyComponent/About'
import Dashboard from './MyComponent/Dashboard'
import News from './MyComponent/News'
import Marketplace from './MyComponent/Marketplace'
import Search from './MyComponent/Search';
import { Route, Routes } from 'react-router-dom'
import Recommendation from './MyComponent/Recommendation'
import Offlinepage from './MyComponent/Offlinepage'
import Profile from './MyComponent/Profile'
import Login from './MyComponent/Loginpage'
import Loginpage from './MyComponent/Loginpage';
import Registrationform from './MyComponent/registrationform'



export default function Home() {

   const [loading, setLoading] = useState(true);
  
      useEffect(() => {
          setTimeout(() => {
              setLoading(false);
          }, 3000); // Simulating a 2-second loading time
      }, []);
  return (
    
    
    <>
      {loading ? (
                <div className="flex justify-center items-center h-screen w-screen bg-white px-4">
                <svg className="w-full max-w-lg" viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg">
                  <style>
                    {`
                      .letter {
                        opacity: 0;
                        animation: fadeIn 1s ease-in-out forwards;
                      }
                      .letter:nth-child(n) { animation-delay: calc(var(--order) * 0.1s); }
                      @keyframes fadeIn {
                        0% { opacity: 0; transform: translateY(-10px); }
                        100% { opacity: 1; transform: translateY(0); }
                      }
                    `}
                  </style>
                  <text x="50%" y="50" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="clamp(24px, 5vw, 36px)" fill="black">
                    {"Agro Connect India.".split('').map((char, index) => (
                      <tspan key={index} className="letter" style={{ '--order': index }}>
                        {char}
                      </tspan>
                    ))}
                  </text>
                </svg>
              </div>
              
            ) : (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/Recomendations' element={<Recommendation/>} />
      <Route path='/News' element={<News/>} />
      <Route path='/Report' element={<Report/>} />
      <Route path='/Marketplace' element={<Marketplace/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Profile' element={<Profile/>} /> 
      <Route path='/Search' element={<Search/>} />
    </Routes>
          
            )}
            

    </>

    
    
  )

  
}

