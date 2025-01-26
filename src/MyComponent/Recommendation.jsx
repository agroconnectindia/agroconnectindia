// import React from 'react'
import React, { useState } from 'react';


import logo from './icon/logot.png'
import soil from './icon/soil.png'
import urea from './icon/urea.png'
import pes from './icon/PesticideRecommendation.png'
import DashboardWrapper from './DashboardWrapper';
import Header from './Header'
import Footer from './Footer'


export default function Recommendation() {
    let soilinfo = 31 ;
    let soilinfo1 = 'Brown' ;
    let water =90 ;
    let Sunlight = 50;

    let ExpectedResult = 100 ;
    let CumulativeEggs = 18125 ;
    let Trays = 18125 ;
    let EggProduction = 80 ;
    let TotalFeedIntake = 1260 ;
    let CostPerEgg = 23;
    let GramsPerEgg = 50;
    
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

return (

    <DashboardWrapper>

    
    
    <div className='md:w-[1250px] md:absolute md:top-6 md:left-[200px]  overflow-y-auto '> 

        {/*  */}
        <Header pagename='Recommendation'/>
    <div className='m-4 md:grid grid-cols-2 md:grid-col-2 gap-4 sm:grid-cols-12 md:ml-36   '>
        <div className='min-h-[100px] sm:col-span-2    rounded-2xl backdrop-blur-2xl   shadow-2xl hidden md:block  '> <img className='h-40' src={logo} alt="" /> </div>
        <div onClick={handleDivClick} className='min-h-[100px]  sm:col-span-5   rounded-2xl backdrop-blur-2xl  shadow-2xl cursor-pointer flex   '>
            <div className='p-2 ' >
            <p className='md:text-2xl flex ml-4  text-sm pt-2 font-bold italic'>Soil Information</p>
            <p className='flex mx-16 mt-4 font-bold text-3xl'>{soilinfo} %</p>
            <div className='ml-4 mt-3 font-semibold text-2xl italic '>Good For            </div>
            </div>
            <div className='main py-6 '>
              {/* <div className='h-28 w-28  rounded-2xl ' ><img src={soil} alt="" /></div> */}
            </div>
            <div className=''> 
            
            <div className='ml-4  text-xl pr-3 '>Soil Type : <span className='ml-4  font-semibold text-2xl'>{soilinfo1}</span></div>
            <div className=' md:mr-10 h-28 w-28  rounded-2xl  ' ><img src={soil} alt="" /></div>
            
            </div>
            </div>



{/* popover */}
<div className={`absolute md:h-[600px] md:w-[1100px] h-[800px] w-[350px] backdrop-blur-lg shadow-2xl rounded-2xl p-4 ${isPopoverOpen ? 'block' : 'hidden'} z-50  `}>
<button onClick={handleClose} className="absolute top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10 '>
    <p className='text-black font-bold'>
     laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


{/* popover 2 */}
<div className={`absolute md:h-[600px] md:w-[1100px] h-[800px] w-[350px] backdrop-blur-lg shadow-2xl rounded-2xl p-4 ${isOpen ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee} className="absolute top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10   '>
    <p className='text-black font-bold'>
     saurav zure laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


{/* popover 3 */}
<div className={`absolute md:h-[600px] md:w-[1100px] h-[800px] w-[350px] backdrop-blur-lg shadow-2xl rounded-2xl p-4 ${isOpen1 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee1} className="absolute top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10   '>
    <p className='text-black font-bold'>
     saurav zure  nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


{/* popover 4 */}
<div className={`absolute md:h-[600px] md:w-[1100px] h-[800px] w-[350px] backdrop-blur-lg shadow-2xl rounded-2xl p-4 ${isOpen2 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee2} className="absolute top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10  '>
    <p className='text-black font-bold'>
      1 laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>

{/* popover 4 for crop info */} 
<div className={`absolute md:h-[550px] md:w-[1100px] h-[800px] bg-white shadow-2xl rounded-2xl p-4 ${isOpen3 ? 'block' : 'hidden'} z-50  `}>
            
            <button onClick={handleClosee3} className="absolute top-2 right-2 bg-white font-extrabold ">
    X
  </button>
  <div className=' w-full z-50 mt-10  '>
    <p className='text-black font-bold'>
     saurav3112 laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
            
</div>


        <div onClick={handleDivvClick3}  className='min-h-[100px] sm:col-span-5 md:w-[400px] p-4  rounded-2xl backdrop-blur-2xl  shadow-2xl '>
        <div >
            <p className='text-2xl pt-2 flex  ml-3 font-bold italic'>Crop Information</p>

            <div className='flex-col '>
            <div className=''>
            <p className=' pt-2  flex ml-3  italic'>Expected Result:{ExpectedResult } %</p>
            
            </div>
            <div>
            <p className=' pt-2 flex  ml-3  italic'>Planted Result:</p>
            </div>
            </div>

           


            <div className='flex  '>

            {/* <div><p>Water</p></div> */}
            <div className="flex flex-col   h-9 w-20 mr-10  ">
      <div className={`p-4  flex  ${water >= 90 ? 'block' : 'hidden'}`}>
        {/* Value is 90+ */}
        
        
        <div className='flex gap-2  '>
        <p className=' text-black font-bold pb-2'>Water</p>
          <div className='bg-green-500 h-3 w-3 gap-1 mt-2 rounded-full'></div>
          <div className='bg-green-500 h-3 w-3 gap-1 mt-2 rounded-full'></div>
          <div className='bg-green-500 h-3 w-3 gap-1 mt-2 rounded-full'></div>
        </div>
      </div>
      <div className={`p-4 flex  ${water >= 50 && water < 90 ? 'block' : 'hidden'}`}>
        {/* Value is between 50 and 89 */}
        
        <div className='flex gap-2 ml-4  '>
        <p className=' text-black font-bold pb-2 '>Water</p>
          <div className='bg-orange-600 h-3 w-3 mt-2 gap-1 rounded-full'></div>
          <div className='bg-orange-600 h-3 w-3 mt-2 gap-1 rounded-full'></div>
          
        </div>
      </div>
      <div className={`p-4  flex ${water < 50 ? 'block' : 'hidden'}`}>
        {/* Value is less than 50 */}
        
        <div className='flex gap-2  ml-4 '>
        <p className=' text-black font-bold pb-2 '>Water</p>
          <div className='bg-red-700 h-3 w-3 gap-1 mt-2 rounded-full'></div>
          
        </div>
      </div>
    </div>
            
            
            {/* <div><p>Sunlight</p></div> */}
            <div className="flex flex-col   h-9 w-20 ml-10  ">
      <div className={`p-4  flex  ${Sunlight >= 90 ? 'block' : 'hidden'}`}>
        {/* Value is 90+ */}
        
        
        <div className='flex gap-2  '>
        <p className=' text-black font-bold pb-2 '>Sunlight</p>
          <div className='bg-green-500 h-3 w-3 gap-1 mt-2 rounded-full'></div>
          <div className='bg-green-500 h-3 w-3 gap-1 mt-2 rounded-full'></div>
          <div className='bg-green-500 h-3 w-3 gap-1 mt-2 rounded-full'></div>
        </div>
      </div>
      <div className={`p-4 flex  ${Sunlight >= 50 && Sunlight < 90 ? 'block' : 'hidden'}`}>
        {/* Value is between 50 and 89 */}
        
        <div className='flex gap-2 ml-4  '>
        <p className=' text-black font-bold pb-2 '>Sunlight</p>
          <div className='bg-orange-600 h-3 w-3 mt-2 gap-1 rounded-full'></div>
          <div className='bg-orange-600 h-3 w-3 mt-2 gap-1 rounded-full'></div>
          
        </div>
      </div>
      <div className={`p-4  flex ${Sunlight < 50 ? 'block' : 'hidden'}`}>
        {/* Value is less than 50 */}
        
        <div className='flex gap-2  ml-4 '>
        <p className=' text-black font-bold pb-2 '>Sunlight</p>
          <div className='bg-red-700 h-4 w-4 gap-1 rounded-full'></div>
          
        </div>
      </div>
    </div>
            

            </div>
            </div>
        </div>
    </div>
    {/* 2nd row */}
    <div onClick={handleDivvClick2} className='m-4 grid grid-cols-1 gap-4 sm:grid-cols-12  md:ml-32 p-4 '>
        <div className='min-h-[150px] w-auto rounded-2xl shadow-2xl flex  backdrop-blur-2xl sm:col-span-6 '>
        <div>
            <p className='md:text-xl pt-2 font-bold italic flex ml-10'>Interval
            </p>
            <p className='md:text-5xl pt-2 font-bold italic flex ml-10 '>15</p>
            <p className='md:text-xl pt-2 font-bold italic flex ml-10 '>Days</p>
            </div>
            <div className=''>
              <div className='flex'><p className='md:text-xl pt-2 font-bold italic flex ml-10' >Pesticide Recommendation</p></div>
              <div className='flex justify-start ml-10 mt-2'>
                <div><img className='h-[100px]  mr-5' src={pes} alt="" /></div>
                <div className=''>
                  <p className='font-bold italic flex justify-center'>Insecticides</p>
                  <div className='flex'>
                  <p className='flex p-2 '>chemicals used to kill insects.  Help <br /> to protect crops from  pests but  <br />   harm beneficial insects.</p>
                
                  </div>
                  </div>

              </div>
            </div>
        </div>


        <div  className='min-h-[100px] w-auto rounded-2xl shadow-2xl   flex backdrop-blur-2xl sm:col-span-6'>
        <div className='flex'>
        <div >
            <p className='md:text-xl pt-2 font-bold italic flex ml-10'>Interval
            </p>
            <p className='md:text-5xl pt-2 font-bold italic flex ml-12 '>8</p>
            <p className='md:text-xl pt-2 font-bold italic flex ml-10 '>Days</p>
            </div>
            <div>
              <div className='flex'><p className='md:text-xl pt-2 font-bold italic flex ml-10' >Urea Recommendation
              </p></div>
              <div className='flex justify-start ml-10 mt-2'>
                <div><img className='h-[100px]  mr-5' src={urea} alt="" /></div>
                <div className=''>
                  <p className='font-bold italic flex justify-center'>Nano Urea</p>
                  <div className='flex'>
                  <p className='flex justify-start  w-[250px] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim natus illum aperiam, quos sed  .</p>
                
                  </div>
                  </div>

              </div>
            </div>
            </div>
        </div>
        
    </div>
    {/* 3rd row */}
    <div className='m-4 grid grid-cols-3 gap-4 sm:grid-cols-12 md:ml-36'>
        
    
        <div onClick={handleDivvClick1} className='min-h-[150px] w-auto rounded-2xl  shadow-2xl  backdrop-blur-2xl p-4 pt-4 sm:col-span-8 '>
        <div className='flex'>
        <div >
            <p className='md:text-xl pt-2 font-bold italic  ml-10'>Next Season Seed
            </p>
            <p className='md:text-5xl pt-2 font-bold italic flex ml-12 '>8</p>
            <p className='md:text-xl pt-2 font-bold italic flex ml-10 '>Days</p>
            </div>
            <div>
              
              <div className='flex justify-start ml-10 mt-2'>
              
                <div className=''>
                  
                  <div className='flex'>
                  <p className='flex justify-start pt-7 w-[400px] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim natus illum aperiam, quos sed quidem recusandae maxime aliquam numquam unde officiis illo incidunt qui eaque similique ad nisi vel quia.</p>
                
                  </div>
                  </div>

              </div>
            </div>
            </div>
        </div>
        
    </div>

    

    {/* 4th row */}
    

    <Footer/>
    </div>

    
    
    </DashboardWrapper>

  )
}
