import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import dashboard from './icon/dashboard.png'
import daily from './icon/Daily.png'
import farm from './icon/farm.png'
import stat from './icon/stat.png'
import market from './icon/market.png'
import img from './icon/b.png'
import about from './icon/image1.png'
import pfp from './icon/pfp.png'



// small screen
let name= 'User Name';
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    // <body className='mt-0'>
      <div className='w-auto'>
    
    <div className="flex md:hidden mt-0">
      <div className={`fixed  md:hidden top-0 left-0 z-50 flex items-center justify-center w-16 h-16 text-white cursor-pointer ${isSidebarOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes color="black" size="30px" /> : <FaBars color="black" size="30px"  />}
      </div>

      <div className={`fixed top-0 left-0 h-full w-64 flex md:hidden bg-gray-200 shadow-md transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex  md:hidden flex-col h-full">
          <div className="flex  md:hidden items-center justify-center h-20">
            {/* Close button */}
            <button className="absolute top-4 right-4 text-white bg-transparent hover:border-none" onClick={closeSidebar}>
              <FaTimes color="black" size="30px" />
            </button>
          </div>
          <div>
          <div className=" items-center justify-center h-20 mb-10   flex-co l">
        
      <img className='  h-20 ml-[33%]  my-4 mx-2 bg-black rounded-[50%] mb-5 ' src={pfp} alt="Dashboard" />
      <h1 className='font-bold text-2xl mt-4 md:block   '> {name} </h1>
        </div>
        <div className=''>
          <ul className='mt-20'>
            <li className="py-2 m-2  text-black font-extrabold hover:text-slate-600  hover:bg-gray-400 text-center"> <div className='flex text-center ml-12'> <img className='h-8 mr-2 ' src={dashboard} alt="Dashboard" /><a className='text-black  hover:text-slate-600' href='#'>Dashboard</a></div></li>
            <li className="py-2 m-2  text-black font-extrabold hover:text-slate-600  hover:bg-gray-400 text-center">  <div className='flex text-center ml-12'> <img className='h-8 mr-2 ' src={daily} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Recommendation</a></div></li>
            <li className="py-2 m-2  text-black font-extrabold hover:text-slate-600  hover:bg-gray-400 text-center">  <div className='flex text-center ml-12'> <img className='h-8 mr-2 ' src={daily} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Latest News</a></div></li>
            <li className="py-2 m-2  text-black font-extrabold hover:text-slate-600  hover:bg-gray-400 text-center">  <div className='flex text-center ml-12'> <img className='h-8 mr-2 ' src={daily} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Daily Record</a></div></li>
            
            <li className="py-2 m-2  text-black font-extrabold hover:text-slate-600  hover:bg-gray-400 text-center"> <div className='flex text-center ml-12'> <img className='h-8 mr-2 ' src={farm} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Farm Record</a></div></li>
            <li className="py-2 m-2  text-black font-extrabold hover:text-slate-600  hover:bg-gray-400 text-center"> <div className='flex text-center ml-12'> <img className='h-8 mr-2 ' src={stat} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Statistics Report</a></div></li>
            <li className="py-2 m-2  text-black font-extrabold hover:text-slate-600  hover:bg-gray-400 text-center">  <div className='flex text-center ml-12'> <img className='h-8 mr-2 ' src={market} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Marketplace</a></div></li>
            <li className="py-2 m-2  text-black font-extrabold hover:text-slate-600  hover:bg-gray-400 text-center"><div className='flex text-center ml-12'> <img className='h-8 mr-2 ' src={img} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Business Hub</a></div></li>
            <li className="py-2 m-2  text-black font-extrabold hover:text-slate-600  hover:bg-gray-400 text-center"> <div className='flex text-center ml-12'> <img className='h-8 mr-2 ' src={about} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>About</a></div></li>
          
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div className="flex-1 p-4">
        {/* Main content */}
      </div>
    </div>
    </div>
    // </body>
  );
}

export default Sidebar;
