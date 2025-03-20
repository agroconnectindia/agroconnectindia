
import React, { useState } from 'react';
import gra from './icon/gradient.png'
import DashboardWrapper from './DashboardWrapper'
import Header from './Header'
import Footer from './Footer'

function Data() {
const data = [
  { id: 'a', imageSrc: {gra}, title: 'PM-KISAN', info: 'A government scheme providing financial support to Indian farmers.' },
  { id: 'b', imageSrc: {gra}, title: 'Organic Farming', info: 'India is rapidly adopting organic farming to reduce chemical use in agriculture.' },
  { id: 'c', imageSrc: {gra}, title: 'Subsidies & Policies', info: 'The Indian government offers subsidies on fertilizers, seeds, and irrigation for farmers.' },
  { id: 'd', imageSrc: {gra}, title: 'Agri Markets', info: 'APMCs regulate market prices and ensure fair trade for Indian farmers.' },
  { id: 'f', imageSrc: {gra}, title: 'Monsoon Impact', info: 'The Indian agriculture sector is highly dependent on monsoons for irrigation.' },
  { id: 'a', imageSrc: {gra}, title: 'E-NAM', info: 'An online trading platform connecting farmers with national markets for better pricing.' },
  { id: 'b', imageSrc: {gra}, title: 'Crop Insurance', info: 'Pradhan Mantri Fasal Bima Yojana (PMFBY) provides financial protection against crop loss.' },
  { id: 'c', imageSrc: {gra}, title: 'Irrigation Techniques', info: 'Drip and sprinkler irrigation systems are helping Indian farmers save water.' },
  { id: 'd', imageSrc: {gra}, title: 'Agri Exports', info: 'India is a major exporter of rice, spices, and wheat to global markets.' },
  { id: 'f', imageSrc: {gra}, title: 'Climate Change', info: 'Rising temperatures and unpredictable rainfall affect Indian agriculture significantly.' },
  { id: 'a', imageSrc: {gra}, title: 'Smart Farming', info: 'AI and IoT are transforming Indian agriculture with precision farming techniques.' },
  { id: 'b', imageSrc: {gra}, title: 'Soil Health', info: 'Government soil health cards help farmers analyze nutrient levels in their fields.' },
  { id: 'c', imageSrc: {gra}, title: 'Horticulture Growth', info: 'India is the second-largest producer of fruits and vegetables globally.' },
  { id: 'd', imageSrc: {gra}, title: 'Agro Startups', info: 'Many agritech startups in India are helping farmers with technology and data-driven solutions.' },
  { id: 'f', imageSrc: {gra}, title: 'Weather Forecasts', info: 'AI-driven weather predictions help farmers plan their sowing and harvesting better.' }

// ... more items (if needed)
];

const [filterType, setFilterType] = useState('all'); // 'all', 'a', 'b', 'c', 'd', 'f'

const filteredData = data.filter((item) => {
if (filterType === 'all') {
return true; // Show all items
} else {
return item.id === filterType; // Show only items with matching ID
}
});

const handleFilterClick = (type) => {
setFilterType(type);
};

//img hide
const [isVisible, setIsVisible] = useState(true);
const [buttonText, setButtonText] = useState('Read More');

const handleButtonClick = () => {
setIsVisible(!isVisible);
setButtonText(buttonText === 'Read More' ? 'Show Less' : 'Read More');
};




return (
<DashboardWrapper>



<div className=' md:w-[1250px] justify-center md:absolute md:top-6 md:left-[200px]  overflow-y-auto'>
  <div className='md:block hidden'>
  <Header pagename="LatestNews"/>
  </div>
{/* <div className=' md:w-[1188px] md:absolute md:top-28 md:left-[200px] '> */}
 <div className='md:flex text-center justify-center md:ml-[220px] mt-20'>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('all')}>All</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('a')}>Latest News</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('b')}>Crop Related</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('c')}>Govt. Related</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('d')}>Market Related</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('f')}>Weather Related</button>
</div>

<div className='h-[400px] md:ml-[200px] rounded-2xl bg-slate-100  overflow-scroll mt-8 mx-3'>



<div>
 <p className='flex m-4 font-bold text-2xl'>News</p>
</div>
{filteredData.map((item, index) => (
 <div className='bg-white m-4 shadow-xl rounded-2xl' key={index}>
   
   <h3 className='flex pt-3 px-2 font-bold text-lg'>{item.title}</h3>
   <p  className='flex pb-3 px-2'>{item.info}</p>
 </div>
 
 
))}
</div>
<div className='mt-5'>
<Footer/>
</div>
</div>



</DashboardWrapper>
);
}

export default Data;