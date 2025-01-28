import React from 'react'
import './App.css'
import Side from './MyComponent/Side'
import Sidebar from './MyComponent/Sidebar'
import Report from './MyComponent/Report'
import About from './MyComponent/About'
import Dashboard from './MyComponent/Dashboard'
import Footer from './MyComponent/Footer'
import News from './MyComponent/News'
import Marketplace from './MyComponent/Marketplace'
import { Route, Routes } from 'react-router-dom'
import Recommendation from './MyComponent/Recommendation'
import Offlinepage from './MyComponent/Offlinepage'



export default function Home() {
  return (
    
    <Offlinepage>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/Recomendations' element={<Recommendation/>} />
      <Route path='/News' element={<News/>} />
      <Route path='/Report' element={<Report/>} />
      <Route path='/Marketplace' element={<Marketplace/>} />
      <Route path='/About' element={<About/>} />
      
    </Routes>
    {/* <body className='inline-block overflow-hidden'>
    <div className='md:mt-0 mt-5 ml-5 md:ml-0 text-black'><Header /></div>  
    
    <Dashboard/>
    <Side/>
     mobile side bar
    <div className='md:hidden'>
    <Sidebar/>
    </div>
    <Side/> 
    <div className=''>
    <Footer/>
    </div>
    </body> */}

    </Offlinepage>
  )
}
