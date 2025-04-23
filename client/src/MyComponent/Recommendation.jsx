// import React from 'react'
import React, { useState , useEffect } from 'react';


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


    const dataArray = [
      { name:"Amsac", text: "Amsac is a insecticide effective as a foliage spray for the control of insect pests ", image: "https://www.atul.co.in/wp-content/uploads/2024/02/Amsac.jpg", date:"5" },
      {name:"Balio", text: "Balio is an organophosphorus and synthetic pyrethroid group insecticide.", image: "https://www.atul.co.in/wp-content/uploads/2024/02/Balio.jpg", date:"6" },
      { name:"Galastar",text: "It acts on the nervous system by interacting with the sodium channel.", image: "https://www.atul.co.in/wp-content/uploads/2022/04/Galastar.jpg", date:"7" },
     
    ];

    const dataArray1 = [
      { typ: "Black Soil", image: "https://img.freepik.com/premium-photo/close-up-black-soil-pattern-concepts_105428-1041.jpg", data:"Black soil retains moisture and is ideal for cotton and oilseeds." },
      { typ: "Brown Soil", image:"https://bachatkart.in/image/cache/catalog/product/gardening/blk%20soil-700x700.jpg", data:"Brown soil is fertile and supports a variety of crops like wheat and maize." },
      { typ: "Red Soil ", image: "https://cpimg.tistatic.com/07937318/b/4/Red-Soil.jpg", data:"Red soil is rich in iron and good for crops like millet, pulses, and groundnuts." },
     
    ];
  

    const dataArray2 = [
      { name: "Urea Fertilizer", text: "Urea is a nitrogen-rich fertilizer that enhances plant growth and improves crop yield.", image: "data:image/jpeg;base64,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", date: "1" },
      { name: "Granular Urea", text: "Granular Urea dissolves slowly, providing a steady nitrogen supply for crops over time.", image: "https://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2020-04/UREA_0.png", date: "2" },
      { name: "Coated Urea", text: "Coated Urea has a protective layer that ensures controlled nitrogen release for plants.", image: "https://kissanemart.com/storage/spic-neem-coated-urea-major-nutrient.jpg", date: "3" },
      { name: "Prilled Urea", text: "Prilled Urea consists of small spherical particles, making it easy to spread evenly over fields.", image: "https://5.imimg.com/data5/ANDROID/Default/2022/12/WM/LD/FJ/178563913/product-jpeg.jpg", data: "4" },
     
    ];
  
    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
      }, 10000); // Change every 10 seconds

      const interval1 = setInterval(() => {
        setIndex1((prevIndex) => (prevIndex + 1) % dataArray1.length);
      }, 5000);
      

      const interval2 = setInterval(() => {
        setIndex2((prevIndex) => (prevIndex + 1) % dataArray2.length);
      }, 1000);

      return () => clearInterval(interval); 
      return () => clearInterval(interval1); 
      return () => clearInterval(interval2); // Cleanup on unmount
    }, []);
    
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
        <div  className='min-h-[100px]  sm:col-span-5   rounded-2xl backdrop-blur-2xl  shadow-2xl cursor-pointer flex   '>
            <div>
            <p className='p-2 font-bold text-2xl'>Soil Information</p>
            <div className='flex'>
            <div className='h-28 w-40'><img className=' aspect-square h-28 w-40 ml-2 rounded-xl' src={dataArray1[index].image} alt="" /></div>
            <div className='ml-2 p-2 '>
              <p className='font-semibold'>{dataArray1[index].typ}</p>
              <p>{dataArray1[index].data}</p>
              </div>
            </div>
            
            </div>
            </div>



{/* popover */}
<div className={`absolute  md:h-[560px] md:w-[1100px] h-[200px] bg-white  shadow-2xl rounded-2xl p-4 ${isPopoverOpen ? 'block' : 'hidden'} z-50  `}>
<button  className="absolute bg-black text-white top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10 '>
    <p className='text-black font-bold'>
     laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


{/* popover 2 */}
<div className={`absolute  md:h-[560px] md:w-[1100px] h-[200px] bg-white  shadow-2xl rounded-2xl p-4 ${isOpen ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee} className="absolute bg-black text-white top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10   '>
    <p className='text-black font-bold'>
     saurav zure laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


{/* popover 3 */}
<div className={`absolute  md:h-[560px] md:w-[1100px] h-[200px] bg-white shadow-2xl rounded-2xl p-4 ${isOpen1 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee1} className="absolute bg-black text-white top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10   '>
    <p className='text-black font-bold'>
     saurav zure  nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


{/* popover 4 */}
<div className={`absolute  md:h-[560px] md:w-[1100px] h-[200px] bg-white  shadow-2xl rounded-2xl p-4 ${isOpen2 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee2} className="absolute bg-black text-white top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10  '>
    <p className='text-black font-bold'>
      1 laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>

{/* popover 4 for crop info */} 
<div className={`absolute md:h-[560px] md:w-[1100px] h-[200px] bg-white shadow-2xl rounded-2xl p-4 ${isOpen3 ? 'block' : 'hidden'} z-50  `}>
            
            <button onClick={handleClosee3} className="absolute top-2 right-2 bg-black text-white font-extrabold ">
    X
  </button>
  <div className=' w-full z-50 mt-10  '>
    <p className='text-black font-bold'>
     saurav3112 laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
            
</div>


        <div   className='min-h-[100px] sm:col-span-5 md:w-[400px] p-4 cursor-pointer  rounded-2xl backdrop-blur-2xl  shadow-2xl '>
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
    <div  className='m-4 grid grid-cols-1 gap-4 sm:grid-cols-12  md:ml-32 p-4 '>
        <div className='min-h-[150px] w-auto rounded-2xl shadow-2xl flex  backdrop-blur-2xl sm:col-span-6 '>
        <div className='flex flex-col justify-center text-center align-middle items-center'>
            <p className='md:text-xl pt-2 font-bold italic flex ml-10'>Interval
            </p>
            <p className='md:text-5xl pt-2 font-bold italic flex ml-10 '>{dataArray[index].date}</p>
            <p className='md:text-xl pt-2 font-bold italic flex ml-10 '>Days</p>
            </div>
            <div className='p-2'>
              <div className='flex'><p className='md:text-xl pt-2 font-bold italic flex ml-10' >Pesticide Recommendation</p></div>
              <div className='flex justify-start ml-10 mt-2'>
                <div><img className='  mr-5' src={dataArray[index].image} alt="" /></div>
                <div className=''>
                  <p className='font-bold italic flex justify-center'>{dataArray[index].name}</p>
                  <div className='flex'>
                  <p className='flex p-2 '>{dataArray[index].text}</p>
                
                  </div>
                  </div>

              </div>
            </div>
        </div>


        <div  className='min-h-[100px] w-auto rounded-2xl shadow-2xl   flex backdrop-blur-2xl sm:col-span-6'>
        <div className='min-h-[150px] w-auto rounded-2xl shadow-2xl flex  backdrop-blur-2xl sm:col-span-6 '>
        <div className='flex flex-col justify-center text-center align-middle items-center'>
            <p className='md:text-xl pt-2 font-bold italic flex ml-10'>Interval
            </p>
            <p className='md:text-5xl pt-2 font-bold italic flex ml-10 '>{dataArray2[index].date}</p>
            <p className='md:text-xl pt-2 font-bold italic flex ml-10 '>Days</p>
            </div>
            <div className='p-2'>
              <div className='flex'><p className='md:text-xl pt-2 font-bold italic flex ml-10' >Urea Recommendation</p></div>
              <div className='flex justify-start ml-10 mt-2'>
                <div><img className='h-36 w-60  mr-5' src={dataArray2[index].image} alt="" /></div>
                <div className=''>
                  <p className='font-bold italic flex justify-center'>{dataArray2[index].name}</p>
                  <div className='flex'>
                  <p className='flex p-2 '>{dataArray2[index].text}</p>
                
                  </div>
                  </div>

              </div>
            </div>
        </div>

        </div>
        
    </div>
    {/* 3rd row */}
    <div className='m-4 grid grid-cols-3 gap-4 sm:grid-cols-12 md:ml-36'>
        
    
        <div  className='min-h-[150px] w-auto rounded-2xl  shadow-2xl  backdrop-blur-2xl p-4 pt-4 sm:col-span-8 '>
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
                  <p className='flex justify-start pt-7 w-[400px] '>Cotton seeds are essential for growing cotton plants, which produce natural fibers widely used in the textile industry. </p>
                
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
