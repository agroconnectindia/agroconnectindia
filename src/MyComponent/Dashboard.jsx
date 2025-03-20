// import React from 'react'
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import data from './Variable'; 
import logo from './icon/logot.png'
import cow from './icon/cow.png'
import egg from './icon/egg.png'
import eggs from './icon/eggs.jpg'
import milkp from './icon/milk.jpg'
import DashboardWrapper from './DashboardWrapper';
import Header from './Header'
import Footer from './Footer'
import product from './icon/urea.png'
import { gsap } from "gsap";
import {useRef} from 'react'
import { useGSAP } from '@gsap/react';
import temp from './icon/temp.jpg'
import aipic from './icon/ai-farm.webp'



export default function Dashboard() {
    let NetProfit = 322 ;
    let Exeniture = 10020 ;
    
    


    

    
    
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
  const [this_week, setThis_week] = useState(null)
  const [totalEgg, setTotalEgg] = useState(null)
  const [totalMilk, setTotalMilk] = useState(null)
  const [milkAmount, setMilkAmount] = useState(null)
  const [index, setIndex] = useState(0);


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


      fetch("http://127.0.0.1:5000/TotalEggsPerWeek")
      .then((response) => response.json())
      .then((data) => {
        //working on 2 feb data stored in react hook and stored in temperature
        setThis_week(data.total_amount_this_week)
        setTotalEgg(data.total_eggs_this_week)
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching weather data:", error));

      fetch("http://127.0.0.1:5000/TotalMilkPerWeek")
      .then((response) => response.json())
      .then((data) => {
        //working on 2 feb data stored in react hook and stored in temperature
        setTotalMilk(data.total_milk_this_week)
        setMilkAmount(data.total_amount_this_week)
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching weather data:", error));


      
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
      }, 10000);

      return () => clearInterval(interval); 
  }, []);

  const dataArray = [
    { name: "Wheat", text: "Wheat is a staple cereal crop, rich in carbohydrates and essential nutrients. It is widely used to make flour for bread, pasta, and various bakery products, serving as a primary food source worldwide.", image: "https://5.imimg.com/data5/GR/FY/MY-57993639/wheat-grains-1000x1000.jpg", data: "8" },
    { name: "Rice", text: "Rice is a widely consumed grain, serving as a primary food source worldwide. It is available in various varieties such as basmati, jasmine, and long-grain, and is a crucial component of many traditional dishes.", image: "https://5.imimg.com/data5/SELLER/Default/2023/7/322826204/BZ/MP/GJ/13537206/sona-masoori-raw-rice.jpg", data: "9" },
    { name: "Maize", text: "Maize is a versatile crop used for food, fodder, and industrial applications. It is processed into products such as cornmeal, popcorn, and corn syrup, and is also used as animal feed in the agricultural sector.", image: "https://5.imimg.com/data5/TN/ZN/JU/SELLER-75626100/65-kg-yellow-raw-maize-500x500.jpg", data: "10" },
    { name: "Soybean", text: "Soybean is a protein-rich legume widely used in food and oil production. It is a key ingredient in products like soy milk, tofu, and soybean oil, and is also used as animal feed due to its high protein content.", image: "https://img1.exportersindia.com/product_images/bc-small/2018/12/5680212/soy_beans_1024x1024--1546147199.jpg", data: "11" },
    { name: "Cotton", text: "Cotton is a fiber crop essential for textile production worldwide. The plant produces soft, fluffy fibers that are spun into thread or yarn for making fabric, while its seeds are used for oil extraction and cattle feed.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPhvBjiwXqx0XPxt0zKDCWTc6qOkv8NzhCQ&s", data: "12" },
    { name: "Groundnut", text: "Groundnut, also known as peanut, is an oilseed crop rich in protein. It is consumed as a snack, processed into peanut butter, and widely used for oil extraction, making it a valuable source of healthy fats and energy.", image: "https://m.media-amazon.com/images/I/51fS3LAFmwS.jpg", data: "13" },
    { name: "Mustard", text: "Mustard seeds are used for oil extraction and as a spice in cooking. They come in different varieties, including yellow, brown, and black, and are commonly used in condiments, pickling, and traditional medicinal remedies.", image: "https://tiimg.tistatic.com/fp/1/008/237/machine-cleaned-whole-dried-brown-mustard-seeds-sarson-for-cooking-405.jpg", data: "14" },
    { name: "Sunflower", text: "Sunflower seeds are a source of edible oil and protein-rich animal feed. They are consumed as a healthy snack, used in bakery products, and processed into sunflower oil, which is valued for its nutritional benefits.", image: "https://freshmills.in/cdn/shop/files/sunflower-seeds-442740.jpg?crop=center&height=1200&v=1717362348&width=1200", data: "15" },
];

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

    
    <div className='overflow-y-auto mt-[100px] h-full'>
    {/* main div */}
    <div className=' md:w-[1250px] md:absolute md:top-6 md:left-[200px]  overflow-y-auto  '>
    
        {/* sub divs */}
        {/* 1st row */} 
        <div className='md:block hidden'>
        <Header pagename='Dashboard'/>
        </div>
 


    <div className='m-4 grid grid-cols-2 md:grid-col-2 gap-4 sm:grid-cols-12 md:ml-36 mt-16 md:mt-3   '>
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
                <p className='pt-1 pb-2 '>Rs.70000</p>
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
  <div className="w-full z-50 mt-10">
    <div className="max-w-4xl mx-auto p-6 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Right Side: Weekly Summary (Now moved to left) */}
        <div className="p-4 flex flex-col justify-center text-center">
          <img src={egg} className='md:h-52 md:w-52  h-10 w-10 md:ml-9' alt="" />
          <div className='flex  gap-10'>
          <div className='mr-2'>
          <div className=" text-xl font-bold">Total Eggs</div>
          <div className="text-xl font-semibold py-2 px-4 rounded-md">
            {totalEgg} 
          </div>
          </div>

          <div>
          <div className=" text-xl font-bold">Total Amount</div>
          <div className="text-2xl font-semibold py-2 px-4 rounded-md">
          {this_week}
          </div>
          </div>
          </div>
        </div>

        {/* Left Side: Form Inputs (Now moved to right) */}
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="w-24 font-semibold">Date:</label>
              <input 
                className="bg-slate-200 text-black p-2 rounded-md w-full"
                type="date"
                style={{
                  color: "black", 
                  WebkitTextFillColor: "black", 
                  WebkitAppearance: "none"
                }} 
              />
            </div>

            <div className="flex items-center">
              <label className="w-24 font-semibold">Qty:</label>
              <input type="number" className="border p-2 rounded-md w-full bg-gray-200" />
            </div>

            <div className="flex items-center">
              <label className="w-24 font-semibold">Rate:</label>
              <input type="number" className="border p-2 rounded-md w-full bg-gray-200" />
            </div>

            <div className="flex items-center">
              <label className="w-24 font-semibold">Amount:</label>
              <input type="number" className="border p-2 rounded-md w-full bg-gray-200" />
            </div>

            <button className="w-full bg-gray-300 text-black font-semibold py-2 rounded-md shadow">
              SUBMIT
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>




{/* popover 3 */}
<div  className={`absolute md:h-[530px] md:w-[1090px] h-[650px] w-[400px] bg-white shadow-2xl rounded-2xl p-4 ${isOpen1 ? 'block' : 'hidden'} z-50`}>
  <button onClick={handleClosee1} className="absolute text-white top-2 right-2">
    X
  </button>
  
  <div  className="w-full z-50 mt-10">
    <div className="max-w-4xl mx-auto p-6 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Right Side: Weekly Summary (Now moved to left) */}
        <div className="p-4 flex flex-col justify-center text-center">
          <img src={cow} className='md:h-60 md:w-60 h-40 w-40 ' alt="" />
          <div className='flex  gap-10'>
          <div className='mr-2'>
          <div className=" text-xl font-bold">Total Milk</div>
          <div className="text-2xl font-semibold py-2 px-4 rounded-md">
            {totalMilk}
          </div>
          </div>

          <div>
          <div className=" text-xl font-bold">Total Amount</div>
          <div className="text-2xl font-semibold py-2 px-4 rounded-md">
          {milkAmount}
          </div>
          </div>
          </div>
        </div>

        {/* Left Side: Form Inputs (Now moved to right) */}
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="w-24 font-semibold">Date:</label>
              <input 
                className="bg-slate-200 text-black p-2 rounded-md w-full"
                type="date"
                style={{
                  color: "black", 
                  WebkitTextFillColor: "black", 
                  WebkitAppearance: "none"
                }} 
              />
            </div>

            <div className="flex items-center">
              <label className="w-24 font-semibold">Qty:</label>
              <input type="number" className="border p-2 rounded-md w-full bg-gray-200" />
            </div>

            <div className="flex items-center">
              <label className="w-24 font-semibold">Rate:</label>
              <input type="number" min="0" className="border p-2 rounded-md w-full bg-gray-200" />
            </div>

            <div className="flex items-center">
              <label className="w-24 font-semibold">Amount:</label>
              <input type="number" min="0" className="border p-2 rounded-md w-full bg-gray-200" />
            </div>

            <button className="w-full bg-gray-300 text-black font-semibold py-2 rounded-md shadow">
              SUBMIT
            </button>
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
<div style={{ backgroundImage: `url(${temp})` }}
 className={` bg-cover bg-center left-1 md:left-auto  absolute md:h-[530px] md:w-[1090px] h-[600px] w-[400px] bg-white shadow-2xl rounded-2xl p-4 ${isOpen3 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee3} className="absolute  text-white top-2 right-2 ">
    X
  </button>
  <div 
  
  className=' w-full z-50 mt-10 text-white  '>
    {/* add code */}
    
      {/* Weather Icon and Temperature */}
      <div  className="flex flex-col items-center bg-cover ">  
        <div className="text-9xl mb-2">🌤️</div>
        <h2 className="text-6xl mt-4 mb-4 font-bold text-black">
          Pune <span className="text-black ">{temperature} °C</span>
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
      <p className='text-center mt-3 text-black'>Pune, located in Maharashtra, India, has a tropical wet and dry climate, influenced by its elevation (560m above sea level) and proximity to the Western Ghats. </p>
    </div>
  
</div>


        <div onClick={handleDivvClick3} className='min-h-[100px] sm:col-span-4 cursor-pointer   rounded-2xl backdrop-blur-2xl  shadow-2xl '>
        <div>
            <h1 className='text-2xl text-center  pt-2 font-bold italic'>Weather info</h1>
            <div className="flex flex-col items-center">
        <div className="text-6xl mb-2">🌤️</div>
        <h2 className="text-3xl  mb-4 font-bold text-black`">
          Pune <span className="text-black">{temperature} °C</span>
        </h2>
       
      </div>
            </div>
        </div>
    </div>
    {/* 2nd row */}
    <div className='m-4 grid grid-cols-1 gap-4 sm:grid-cols-12  md:ml-36 '>
        <div className='min-h-[100px] w-auto rounded-2xl shadow-2xl p-3   backdrop-blur-2xl sm:col-span-6 '>
        <div>
            <p className='md:text-2xl pt-2 font-bold  flex ml-3'>AI Chatbot</p>
            </div>
            <div className='content px-4 '>
              <p>Solve your problem with the help of AI</p>
              <div className='grid grid-cols-2 p-0.5'>
              <li>Disease Detection </li>
              <li>Smart Irrigation</li>
              <li>Price Prediction</li>
              <li>Query with Crops</li>
              </div>
              <div className=' flex justify-end pt-1'>
                <Link to={'/Search'}><p className='font-bold'>Try it out</p></Link>
              </div>
            </div>
        </div>
        <div className='min-h-[100px] w-auto rounded-2xl shadow-2xl   backdrop-blur-2xl sm:col-span-6'>
        <div>
            <p className='md:text-sm pt-2 font-bold italic flex ml-3'>Seed Information</p>
            </div>
            <div className='flex justify-center items-center w-full'>
            <img className='h-36 p-4 pt-3 flex justify-center rounded-3xl' src={dataArray[index].image} alt="" />
            <div className='pb-2'>
            <p className='md:p- px-3 font-bold'>{dataArray[index].name}</p>
            <p className='md:p- px-3'>
              
            {dataArray[index].text}
              </p>
            </div>
            </div>
        </div>
        
    </div>
    {/* 3rd row */}
    <div className='m-4 grid grid-cols-2  gap-4 sm:grid-cols-12 md:ml-36'>
        <div onClick={handleDivvClick} className='min-h-[150px] w-auto rounded-2xl cursor-pointer  shadow-2xl  backdrop-blur-2xl   sm:col-span-6 '>
        
        <div className=" flex  justify-center text-center md:p-0 p-6">
          <div className='hidden md:block'>
          <img src={eggs} className='md:h-[200px] md:w-full aspect-square rounded-l-2xl  h-10 w-10 ' alt="" />
          </div>
          <div className=' gap-10'>
            <div>
            {/* <img src={egg} className='md:h-20 md:w-20  h-10 w-10 md:ml-9 ' alt="" /> */}
            <p className='md:text-2xl text-lg pt-2 font-bold italic text-center'>Egg Production</p>
            </div>

          <div className='flex mt-5 '>
          <div className='mr-2 '>
          <div className="md:text-xl font-bold">Total Eggs (Week)</div>
          <div className="md:text-xl   py-2 px-4 rounded-md">
          {totalEgg}
          </div>
          </div>

          <div>
          <div className="md:text-xl font-bold">Total Amount (Week)</div>
          <div className="md:text-2xl  py-2 px-4 rounded-md">
          {this_week}
          </div>
          </div>
          </div>

          </div>
        </div>
        </div>
    
        <div onClick={handleDivvClick1} className='min-h-[150px] w-auto rounded-2xl cursor-pointer shadow-2xl  backdrop-blur-2xl sm:col-span-6 '>
        <div className=" flex  justify-center text-center md:p-0 p-6">
          <div className='hidden md:block'>
          <img src={milkp} className='md:h-[200px] md:w-full aspect-square  rounded-l-2xl  h-10 w-10' alt="" />
          </div>
          <div className=' gap-10'>
            <div>
            {/* <img src={egg} className='md:h-20 md:w-20  h-10 w-10 md:ml-9 ' alt="" /> */}
            <p className='md:text-2xl text-lg pt-2 font-bold italic text-center'>Milk Production</p>
            </div>

          <div className='flex mt-5 '>
          <div className='mr-2 '>
          <div className="md:text-xl font-bold">Total Milk (Week)</div>
          <div className="md:text-xl   py-2 px-4 rounded-md">
            {totalMilk}
          </div>
          </div>

          <div>
          <div className="md:text-xl font-bold">Total Amount (Week)</div>
          <div className="md:text-2xl  py-2 px-4 rounded-md">
            {milkAmount}
          </div>
          </div>
          </div>

          </div>
        </div>
        </div>
        
    </div>
  

  <div className=''>
  <Footer  />
  </div>
    </div>

    
    </div>
    
    </DashboardWrapper>

  )
}
