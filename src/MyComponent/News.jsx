
import React, { useState } from 'react';
import gra from './icon/gradient.png'
import DashboardWrapper from './DashboardWrapper'
import Header from './Header'
import Footer from './Footer'

function Data() {
const data = [
{ id: 'a', imageSrc: {gra}, title: 'Item 1', info:  'Information about Item A' },
{ id: 'b', imageSrc: {gra}, title: 'Item 2', info: 'Information about Item B' },
{ id: 'c', imageSrc: {gra}, title: 'Item 3', info: 'Information about Item C' },
{ id: 'd', imageSrc: {gra}, title: 'Item 4', info: 'Information about Item D' },
{ id: 'f', imageSrc: {gra}, title: 'Item 5', info: 'Information about Item F' },
{ id: 'a', imageSrc: {gra}, title: 'Item 6', info: 'Information about Item A' },
{ id: 'b', imageSrc: {gra}, title: 'Item 7', info: 'Information about Item B' },
{ id: 'c', imageSrc: {gra}, title: 'Item 8', info: 'Information about Item C' },
{ id: 'd', imageSrc: {gra}, title: 'Item 9', info: 'Information about Item D' },
{ id: 'f', imageSrc: {gra}, title: 'Item 10', info: 'Information about Item F' },
{ id: 'a', imageSrc: {gra}, title: 'Item 11', info: 'Information about Item A' },
{ id: 'b', imageSrc: {gra}, title: 'Item B', info: 'Information about Item B' },
{ id: 'c', imageSrc: {gra}, title: 'Item C', info: 'Information about Item C' },
{ id: 'd', imageSrc: {gra}, title: 'Item D', info: 'Information about Item D' },
{ id: 'f', imageSrc: {gra}, title: 'Item F', info: 'Information about Item F' },
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



<div className=' md:w-[1250px] md:absolute md:top-6 md:left-[200px]  overflow-y-auto'>
  <Header pagename="LatestNews"/>
{/* <div className=' md:w-[1188px] md:absolute md:top-28 md:left-[200px] '> */}
 <div className='md:flex md:justify-center md:ml-[220px] mt-20'>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('all')}>All</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('a')}>Latest News</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('b')}>Crop Related</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('c')}>Govt. Related</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('d')}>Market Related</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('f')}>Weather Related</button>
</div>

<div className='h-[400px] md:ml-[200px] rounded-2xl bg-slate-100  overflow-scroll mt-8'>

<div className=' hidden'>

{isVisible && (
 <img
   src={gra} 
   alt="My Image"
   

   className={` object-cover absolute top-50 h-[400px] opacity-95  ${!isVisible && 'hidden'}`} // Hide using Tailwind CSS class
 />
)}
</div>

<div>
 <p className='flex m-4 font-bold text-2xl'>News</p>
</div>
{filteredData.map((item, index) => (
 <div className='bg-white m-4 shadow-xl rounded-2xl' key={index}>
   
   <h3 className='flex pt-3 px-2 font-bold text-xl'>{item.title}</h3>
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