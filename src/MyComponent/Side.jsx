import React from 'react'
import { Link } from 'react-router-dom';
import pfp from './icon/pfp.png'
import news from './icon/news.png'

///// Big screen /////
import Dashboard from './Dashboard';
import Recommendation from './Recommendation';
import News from './News'



let name= 'Saurav Zure';
export default function Side() {


  return (
    <div className='absolute z-20'>
      <section>
      <div className='flex '>
      <div className=" md:w-64 h-screen fixed top-0 left-0 flex flex-col text-black  bg-gray-200 shadow-2xl">
        
       <div className=" items-center justify-center h-20 flex-col">
        
      <img className='  md:h-20 h-10  md:ml-20 my-4  bg-black rounded-[50%] mb-5' src={pfp} alt="Dashboard" />
      <h1 className='font-bold text-3xl mt-4   text-center'> {name} </h1>
        </div>
        
        <nav className="flex flex-col flex-grow overflow-y-auto mt-32"> 
           
          <div className='text-center'>
            <Link to={'/'}><span className='text-bold font-sp-bold text-black text-xl '>Dashboard</span></Link>
            <br />
            <Link to={'/recomendations'}><span>Recomendations</span></Link>
            <br />
            <Link to={'/News'} ><span>LatestNews</span></Link>
            <br />
            <Link to={'/Report'} ><span>Report</span></Link>
            <br />
            <Link to={'/Marketplace'} ><span>Marketplace</span></Link>
            <br />
            <Link to={'/About'} ><span>About</span></Link>
          </div>
          
          </nav>


          
          
        
        
        </div>
        </div>
        
        </section>
    </div>

    

    
  )
}
