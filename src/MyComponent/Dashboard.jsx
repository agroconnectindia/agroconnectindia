// import React from 'react'
import React, { useEffect,useState } from 'react';
import data from './Variable'; 

import logo from './icon/logot.png'
import DashboardWrapper from './DashboardWrapper';
import Header from './Header'
import Footer from './Footer'


export default function Dashboard() {
    let Name = 3112 ;
    let NetProfit = 322 ;
    let Exeniture = 10020 ;
    let CumulativeEggs = 18125 ;
    let Trays = 18125 ;
    let EggProduction = 80 ;
    let TotalFeedIntake = 1260 ;
    let CostPerEgg = 23;
    let GramsPerEgg = 50;
    let Weather = 44;
    


    

    
    
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);


  const handleDivClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleClose = () => {
    setIsPopoverOpen(false);
  };

//   2nd
const handleDivvClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClosee = () => {
    setIsOpen(false);
  };

//   3rd
const handleDivvClick1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleClosee1 = () => {
    setIsOpen1(false);
  };

  //4th
  const handleDivvClick2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleClosee2 = () => {
    setIsOpen2(false);
  };

  //5th
  const handleDivvClick3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleClosee3 = () => {
    setIsOpen3(false);
  };


  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [feels_like, setFeels_like] = useState(null);
  const [wind_speed, setWind_speed] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/weather")
      .then((response) => response.json())
      .then((data) => {
        //working on 2 feb data stored in react hook and stored in temperature
        setTemperature(data.temperature);
        setHumidity(data.humidity);
        setFeels_like(data.feels_like);
        setWind_speed(data.wind_speed);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

// 

const tabs = ["Daily", "Monthly", "Yearly", "All Time"];
  const data = [
    { month: "January", oldMonth: "December", qty: 170, rate: 7, total: 2700 },
    { month: "January", oldMonth: "December", qty: 170, rate: 7, total: 2700 },
    { month: "January", oldMonth: "December", qty: 170, rate: 7, total: 2700 },
    { month: "January", oldMonth: "December", qty: 170, rate: 7, total: 2700 },
    { month: "January", oldMonth: "December", qty: 170, rate: 7, total: 2700 },
    { month: "January", oldMonth: "December", qty: 170, rate: 7, total: 2700 },
  ];



return (

    
    <DashboardWrapper>

    
    <div className='overflow-y-auto mt-[100px] h-screen'>
    {/* main div */}
    <div className=' md:w-[1250px] md:absolute md:top-6 md:left-[200px]  overflow-y-auto  '>
    
        {/* sub divs */}
        {/* 1st row */} 
        <Header pagename='Dashboard'/>
 


    <div className='m-4 grid grid-cols-2 md:grid-col-2 gap-4 sm:grid-cols-12 md:ml-36   '>
    {/* <div className='m-4 grid  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:ml-36   '> */}
        <div className='min-h-[100px] sm:col-span-2   rounded-2xl backdrop-blur-2xl   shadow-2xl hidden md:block  '> <img className='h-40' src={logo} alt="" /> </div>
        <div onClick={handleDivClick} className='min-h-[100px] sm:col-span-6   rounded-2xl backdrop-blur-2xl  shadow-2xl cursor-pointer    '>
            <div className='p-2' >
            <p className='md:text-2xl text-sm pt-2 font-bold italic'>Statistics Overview (Current Year)</p>
            </div>
            <div className='flex justify-center text-sm font-semibold gap-4 md:gap-20 md:text-xl'>
                <p className='pt-4 '>Net Profit</p>
                <p className='pt-4 '>Exeniture</p>
            </div>
            <div className='flex justify-center  gap-3 font-sans md:gap-28 text-lg'>
                <p className='pt-1 pb-2 '>Rs.{NetProfit}</p>
                <p className='pt-1 pb-2 md:ml-0 ml-4'>Rs.{Exeniture}</p>
                
            </div>
            </div>



{/* popover */}
<div className={`absolute md:h-[530px] md:w-[1090px] h-[600px] w-[350px] bg-white shadow-2xl rounded-2xl p-4 ${isPopoverOpen ? 'block' : 'hidden'} z-50  `}>
<button onClick={handleClose} className="absolute text-white top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10 '>
    <p className='text-black font-bold'>
     s axjk laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>

{/* popover 2 */}
<div className={`absolute md:h-[530px] md:w-[1090px] h-[600px] w-[350px] bg-white shadow-2xl rounded-2xl p-4 ${isOpen ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee} className="absolute  text-white top-2 right-2 ">
    X
  </button>
  {/* egg */}
</div>


{/* popover 3 */}
<div className={`absolute md:h-[530px] md:w-[1090px] h-[650px] w-[400px] bg-white shadow-2xl rounded-2xl p-4 ${isOpen1 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee1} className="absolute  text-white top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10   '>
  <div className="max-w-4xl mx-auto p-6   rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Form Inputs */}
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="w-24 font-semibold ">Date:</label>
              <input 
              className='bg-slate-200 text-black p-2 rounded-md w-full'
               type="date" 
               style={{
                color: "black", 
                WebkitTextFillColor: "black", 
                WebkitAppearance: "none"
              }} />
              
            </div>

            <div className="flex items-center">
              <label className="w-24 font-semibold">Qty:</label>
              <input
                type="number"
                
                className="border p-2 rounded-md w-full bg-gray-200"
                
              />
            </div>

            <div className="flex items-center">
              <label className="w-24 font-semibold">Rate:</label>
              <input
                type="number"
                
                className="border p-2 rounded-md w-full bg-gray-200"
                
              />
            </div>

            <div className="flex items-center">
              <label className="w-24 font-semibold">Amount:</label>
              <input
                type="number"
                
                className="border p-2 rounded-md w-full bg-gray-200"
                
              />
            </div>

            <button className="w-full bg-gray-300 text-black font-semibold py-2 rounded-md shadow">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Right Side: Weekly Summary */}
        <div className="p-4 flex flex-col justify-center text-center">
          <div className="text-xl font-bold">Total Milk (Week)</div>
          <div className="text-2xl font-semibold bg-gray-200 py-2 px-4 rounded-md">
            154 L
          </div>

          <div className="mt-4 text-xl font-bold">Total Amount (Week)</div>
          <div className="text-2xl font-semibold bg-gray-200 py-2 px-4 rounded-md">
            25000.87
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/* popover 4 */}
<div className={`absolute md:h-[530px] md:w-[1090px] h-[600px] w-[350px] bg-white shadow-2xl rounded-2xl p-4 ${isOpen2 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee2} className="absolute  text-white top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10  '>
    <p className='text-black font-bold'>
     s laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>

{/* popover 4 */}
<div className={`absolute md:h-[530px] md:w-[1090px] h-[600px] w-[400px] bg-white shadow-2xl rounded-2xl p-4 ${isOpen3 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee3} className="absolute  text-white top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10  '>
    {/* add code */}
    
      {/* Weather Icon and Temperature */}
      <div className="flex flex-col items-center">
        <div className="text-9xl mb-2">🌤️</div>
        <h2 className="text-6xl mt-4 mb-4 font-bold text-gray-800">
          Pune <span className="text-gray-600">{temperature} °C</span>
        </h2>
      </div>
      <hr className=''/>
      {/* Weather Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-black md:mt-10 text-center">
        <div>
          <p className="font-bold text-lg md:text-2xl ">Humidity</p>
          <p className="text-lg mt-1  md:text-2xl ">{humidity} %</p>
        </div>
        <div>
          <p className="font-bold text-lg md:text-2xl">Feels like</p>
          <p className="text-lg mt-1 md:text-2xl">{feels_like} °</p>
        </div>
        <div>
          <p className="font-bold text-lg md:text-2xl">Wind</p>
          <p className="text-lg mt-1 md:text-2xl">{wind_speed} mph</p>
        </div>
        <div>
          <p className="font-bold text-lg md:text-2xl">Chance of rain</p>
          <p className="text-lg mt-1 md:text-2xl">{} %</p>
        </div>
      </div>
    </div>
  
</div>


        <div onClick={handleDivvClick3} className='min-h-[100px] sm:col-span-4 cursor-pointer   rounded-2xl backdrop-blur-2xl  shadow-2xl '>
        <div>
            <h1 className='text-2xl text-center  pt-2 font-bold italic'>Weather info</h1>
            <div className="flex flex-col items-center">
        <div className="text-6xl mb-2">🌤️</div>
        <h2 className="text-3xl  mb-4 font-bold text-gray-800">
          Pune <span className="text-gray-600">{temperature} °C</span>
        </h2>
      </div>
            </div>
        </div>
    </div>
    {/* 2nd row */}
    <div className='m-4 grid grid-cols-1 gap-4 sm:grid-cols-12  md:ml-36 '>
        <div className='min-h-[100px] w-auto rounded-2xl shadow-2xl   backdrop-blur-2xl sm:col-span-6 '>
        <div>
            <p className='md:text-sm pt-2 font-bold italic flex ml-3'>Farm Weekly Record</p>
            </div>
            <div className='content '>
              <p className='md:p-5 p-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium sapiente esse alias, autem debitis ex corporis, maiores deleniti eveniet voluptates odio ratione optio qui odit a expedita dolorum officia architecto.
              </p>
            </div>
        </div>
        <div className='min-h-[100px] w-auto rounded-2xl shadow-2xl   backdrop-blur-2xl sm:col-span-6'>
        <div>
            <p className='md:text-sm pt-2 font-bold italic flex ml-3'>Seed Information</p>
            </div>
            <div>
            <p className='md:p-5 p-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium sapiente esse alias, autem debitis ex corporis, maiores deleniti eveniet voluptates odio ratione optio qui odit a expedita dolorum officia architecto.
              </p>
            </div>
        </div>
        
    </div>
    {/* 3rd row */}
    <div className='m-4 grid grid-cols-2  gap-4 sm:grid-cols-12 md:ml-36'>
        <div onClick={handleDivvClick} className='min-h-[150px] w-auto rounded-2xl cursor-pointer  shadow-2xl  backdrop-blur-2xl p-4 pt-4 sm:col-span-6 '>
        <div className='md:flex '>
            <div className=''>
            <p className='md:text-2xl font-bold italic flex  '>Egg Production</p>
            <p className='flex md:mx-10 mx-4 my-4 font-bold text-3xl '>{EggProduction}%</p>
            </div>

            <div className='md:ml-10  gap-6'>
            <div className=''>
            <p className='md:text-sm pt-  italic flex '>Cumulative Eggs</p>
            <p className='flex mx-2 my-2  text-2xl'>{CumulativeEggs}</p>
            </div>

            <div className='text-center '>
            <p className='md:text-sm pt-  italic flex '>Egg Production</p>
            <p className='flex mx-6 my-2  text-2xl    '>{EggProduction}</p>
            </div>
            </div>
            
            </div>
        </div>
    
        <div onClick={handleDivvClick1} className='min-h-[150px] w-auto rounded-2xl cursor-pointer shadow-2xl  backdrop-blur-2xl p-4 pt-4 sm:col-span-6 '>
        <p className='text-2xl pt-2 font-bold italic'>Milk Production</p>
        </div>
        
    </div>
    <Footer  />
    

    


    </div>

    
    </div>
    
    </DashboardWrapper>

  )
}
