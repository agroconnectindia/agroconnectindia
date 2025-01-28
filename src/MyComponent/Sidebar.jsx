import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


//icons
import pfp from './icon/pfp.png'
import dashboard from './icon/dashboard.png'
import newsicon from './icon/news.png'
import stat from './icon/stat.png'
import market from './icon/market.png'
import recommendation from './icon/farm.png'
import about from './icon/about.png'




// small screen
let name= 'Saurav Zure';
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
      <div className='w-auto z-auto'>
    
    <div className="flex md:hidden mt-0 z-40">
      <div className={`fixed  md:hidden top-0 left-0 z-50 flex items-center justify-center w-16 h-16 text-white cursor-pointer ${isSidebarOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes color="black" size="30px" /> : <FaBars color="black" size="30px"  />}
      </div>

      <div className={`fixed top-0 left-0 h-full w-64 flex md:hidden z-50 bg-gray-200 shadow-md transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex  md:hidden flex-col h-full">
          <div className="flex  md:hidden items-center justify-center h-20">
            {/* Close button */}
            <button className="absolute top-4 right-4 text-white bg-transparent hover:border-none" onClick={closeSidebar}>
              <FaTimes color="black" size="30px" />
            </button>
          </div>
          <div className=" items-center justify-center h-20 flex-col">
        
      <img className='  h-20   ml-20 my-4  bg-black rounded-[50%] mb-5' src={pfp} alt="Dashboard" />
      <h1 className='font-bold text-3xl mt-4 ml-8  text-center'> {name} </h1>
        </div>
        
        <nav className="flex flex-col flex-grow overflow-y-auto mt-32"> 
           
          <div className='text-center'>
           <div className='flex text-center ml-6 mb-4 hover:text-gray-500'> <img className='h-8 mr-2 ' src={dashboard} alt="" /><Link to={'/'}><div className='text-bold font-bold  text-black text-xl mb-2  '>Dashboard</div></Link></div>
           <div className='flex text-center ml-6 mb-4 hover:text-gray-500'> <img className='h-8 mr-2 ' src={recommendation} alt="" /><Link to={'/recomendations'}><div className='text-bold font-bold  text-black text-xl mb-2  '>Recomendations</div></Link></div>
           <div className='flex text-center ml-6 mb-4 hover:text-gray-500'> <img className='h-8 mr-2 ' src={newsicon} alt="" /><Link to={'/News'} ><div className='text-bold font-bold  text-black text-xl  mb-2 '>LatestNews</div></Link></div>
           <div className='flex text-center ml-6 mb-4 hover:text-gray-500'> <img className='h-8 mr-2 ' src={stat} alt="" /><Link to={'/Report'} ><div className='text-bold font-bold  text-black text-xl mb-2  '>Report</div></Link></div>
           <div className='flex text-center ml-6 mb-4 hover:text-gray-500'> <img className='h-8 mr-2 ' src={market} alt="" /><Link to={'/Marketplace'} ><div className='text-bold font-bold  text-black text-xl mb-2  '>Marketplace</div></Link> </div>
           <div className='flex text-center ml-6 mb-4 hover:text-gray-500'> <img className='h-8 mr-2 ' src={about} alt="" /><Link to={'/About'} ><div className='text-bold font-bold  text-black text-xl '>About</div></Link> </div>
            
            



            
          </div>
          
          </nav>
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
