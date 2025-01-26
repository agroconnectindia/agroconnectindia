
import { useState } from 'react'
import './App.css'
import Side from './MyComponent/Side'
import Header from './MyComponent/Header'
import Main from './MyComponent/Main'
import Footer from './MyComponent/Footer'
import Sidebar from './MyComponent/Sidebar'
import MyComponent from './MyComponent/MyComponent'
import Dashboard from './MyComponent/Dashboard'




function Recommendation () {
  const [count, setCount] = useState(0)

  return (
    <>
    <body className='inline h-auto  '>
     




    {/* time date */}
    <div className='md:mt-0 mt-5 ml-5 md:ml-0'><Header/></div>
    {/* main dashboard */}
    {/* <Dashboard/> */}
    {/* Side bar Small */}
    <div className='md:hidden'>
    <Sidebar/>
    </div>
    {/* Side bar Big */}
    <Side/>
    <div className='mt-14'>
    <Footer/>
    </div>
    {/* <MyComponent/> */}
    </body>
    </>
  )
}



export default Recommendation
