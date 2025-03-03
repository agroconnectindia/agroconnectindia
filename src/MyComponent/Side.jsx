import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLogout, MdMenu, MdClose } from "react-icons/md";

// Icons
import dashboard from './icon/dashboard.png';
import newsicon from './icon/news.png';
import stat from './icon/stat.png';
import market from './icon/market.png';
import recommendation from './icon/farm.png';
import about from './icon/about.png';
import profileMale from "./icon/malepfp.png";
import profileFemale from "./icon/femalepfp.png";
import ai from './icon/ai.svg';
import { logoutUser } from "./authentication/authService";
import { useNavigate } from "react-router-dom";

let name = 'Farmer';
export default function Side() {
  const [isOpen, setIsOpen] = useState(false);
  const gender = "male";
  const profileImage = gender === "male" ? profileMale : profileFemale;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      alert("Logged Out!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      {/* Toggle Button for Mobile */}
      <button 
        className="md:hidden fixed top-4 left-4 z-30 bg-gray-200 p-2 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed z-50 top-0 left-0 h-screen w-64 bg-gray-200 shadow-2xl p-4 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}>  
        <div className="flex justify-between items-center mb-4">
          
          {/* Close Button Inside Sidebar */}
          <button 
            className="md:hidden bg-gray-300 p-2 rounded-lg shadow-md"
            onClick={() => setIsOpen(false)}
          >
            <MdClose size={24} />
          </button>
        </div>

        <div className="items-center justify-center text-center mt-4">
          <Link to={'/Profile'}>
            <img className='md:h-32 h-16 bg-white rounded-full mx-auto' src={profileImage} alt="Profile" />
            <h1 className='font-bold text-2xl text-bold text-black my-3'>{name}</h1>
          </Link>
        </div>

        <nav className="mt-10 space-y-2 text-black">
          <Link to={'/dashboard'} className={`flex items-center px-4 py-2 hover:bg-gray-300 rounded text-black font-bold text-xl hover:text-gray-600 transition ${location.pathname === "/dashboard" ? "bg-gray-300" : "bg-transparent"}`}><img className='h-8 mr-2' src={dashboard} alt="" /> Dashboard</Link>
          <Link to={'/recomendations'} className={`flex items-center px-4 py-2 hover:bg-gray-300 rounded text-black font-bold text-lg hover:text-gray-600 transition ${location.pathname === "/recomendations" ? "bg-gray-300" : "bg-transparent"}`}><img className='h-8 mr-2' src={recommendation} alt="" /> Recommendations</Link>
          <Link to={'/News'} className={`flex items-center px-4 py-2 hover:bg-gray-300 rounded text-black font-bold text-xl hover:text-gray-600 transition ${location.pathname === "/News" ? "bg-gray-300" : "bg-transparent"}`}><img className='h-8 mr-2' src={newsicon} alt="" /> Latest News</Link>
          <Link to={'/Report'} className={`flex items-center px-4 py-2 hover:bg-gray-300 rounded text-black font-bold text-xl hover:text-gray-600 transition ${location.pathname === "/Report" ? "bg-gray-300" : "bg-transparent"}`}><img className='h-8 mr-2' src={stat} alt="" /> Report</Link>
          <Link to={'/Marketplace'} className={`flex items-center px-4 py-2 hover:bg-gray-300 rounded text-black font-bold text-xl hover:text-gray-600 transition ${location.pathname === "/Marketplace" ? "bg-gray-300" : "bg-transparent"}`}><img className='h-8 mr-2' src={market} alt="" /> Marketplace</Link>
          <Link to={'/Search'} className={`flex items-center px-4 py-2 hover:bg-gray-300 rounded text-black font-bold text-xl hover:text-gray-600 transition ${location.pathname === "/Search" ? "bg-gray-300" : "bg-transparent"}`}><img className='h-8 mr-2' src={ai} alt="" /> ChatBot</Link>
          <Link to={'/About'} className={`flex items-center px-4 py-2 hover:bg-gray-300 rounded text-black font-bold text-xl hover:text-gray-600 transition ${location.pathname === "/About" ? "bg-gray-300" : "bg-transparent"}`}><img className='h-8 mr-2' src={about} alt="" /> About</Link>
          
          
        </nav>
        <div className='absolute bottom-0 w-full my-5'>  
        <button onClick={handleLogout} className='flex items-center text-xl px-4 py-2 mt-6 bg-transparent font-bold text-red-600 hover:bg-gray-300 rounded'>
            <MdOutlineLogout className='text-2xl mr-2 text-center' /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
