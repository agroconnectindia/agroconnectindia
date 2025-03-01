import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineLogout } from "react-icons/md";

//icons
import pfp from './icon/pfp.png'
import dashboard from './icon/dashboard.png'
import newsicon from './icon/news.png'
import stat from './icon/stat.png'
import market from './icon/market.png'
import recommendation from './icon/farm.png'
import about from './icon/about.png'
import profileMale from "./icon/malepfp.png";
import profileFemale from "./icon/femalepfp.png";
import ai from './icon/ai.svg'
import { logoutUser } from "./authentication/authService";
import { useNavigate } from "react-router-dom";



let name= 'Saurav Zure';
export default function Side() {

  const gender = "male"; // Change to "female" to test
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
    <div className='absolute z-20'>
      <section>
      <div className='flex  '>
      <div className=" md:w-64 h-screen fixed top-0 left-0 flex flex-col text-black  bg-gray-200 shadow-2xl">
        
       <div className=" items-center justify-center h-20 flex-col mt-10">
       <Link to={'/Profile'} ><img className='  md:h-32 h-10  md:ml-14 my-4  bg-white rounded-[50%] mb-5' src= {profileImage} alt="Dashboard" /></Link>
      
      <h1 className='font-bold text-3xl mt-4   text-center'> {name} </h1>
        </div>
        
        <nav className="flex flex-col flex-grow overflow-y-auto mt-36"> 
           
          <div className='text-center'>
           <div className='flex text-center ml-6 mb-4 '> <img className='h-8 mr-2 ' src={dashboard} alt="" /><Link to={'/dashboard'}><div className='text-bold font-bold  text-black text-xl mb-2 hover:text-gray-600  '>Dashboard</div></Link></div>
           <div className='flex text-center ml-6 mb-4 '> <img className='h-8 mr-2 ' src={recommendation} alt="" /><Link to={'/recomendations'}><div className='text-bold font-bold  text-black text-xl mb-2 hover:text-gray-600   '>Recomendations</div></Link></div>
           <div className='flex text-center ml-6 mb-4 '> <img className='h-8 mr-2 ' src={newsicon} alt="" /><Link to={'/News'} ><div className='text-bold font-bold  text-black text-xl  mb-2 hover:text-gray-600  '>LatestNews</div></Link></div>
           <div className='flex text-center ml-6 mb-4 '> <img className='h-8 mr-2 ' src={stat} alt="" /><Link to={'/Report'} ><div className='text-bold font-bold  text-black text-xl mb-2 hover:text-gray-600   '>Report</div></Link></div>
           <div className='flex text-center ml-6 mb-4 '> <img className='h-8 mr-2 ' src={market} alt="" /><Link to={'/Marketplace'} ><div className='text-bold font-bold  text-black text-xl mb-2 hover:text-gray-600   '>Marketplace</div></Link> </div>
           <div className='flex text-center ml-6 mb-4 '> <img className='h-8 mr-2 ' src={ai} alt="" /><Link to={'/Search'} ><div className='text-bold font-bold  text-black text-xl hover:text-gray-600 '>ChatBot</div></Link> </div>
           <div className='flex text-center ml-6 mb-4 '> <img className='h-8 mr-2 ' src={about} alt="" /><Link to={'/About'} ><div className='text-bold font-bold  text-black text-xl hover:text-gray-600 '>About</div></Link> </div>
           <div onClick={handleLogout} className='flex text-center ml-6 mt-6  '> <MdOutlineLogout className='text-3xl mx-1  text-red-600' /><Link to={'/About'} ><div className='text-bold font-bold  text-red-600 text-xl hover:text-gray-600 '>Logout</div></Link> </div>           
          



            
          </div>
          
          </nav>


          
          
        
        
        </div>
        </div>
        
        </section>
    </div>

    

    
  )
}
