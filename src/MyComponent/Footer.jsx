import React from 'react'
import grass from './icon/grass.png'

export default function Footer() {
  return (
    <>
    {/* <div>
    <img className='h-32 absolute' src={grass} alt="" />
    </div> */}

    <div className='flex text-black '>
    <div className="flex text-black  font-extrabold md:ml-[200px]  ">
    © Agro Connect India
    </div>
    <div className=" flex font-extrabold md:ml-[700px]">
    Version 1.1
    </div>
    </div>
    
    </>
  )
}
