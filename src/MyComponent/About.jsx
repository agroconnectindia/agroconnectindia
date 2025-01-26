import React from 'react'
import logo from './icon/account.png'
import logot from './icon/logot.png'
import DashboardWrapper from './DashboardWrapper'
import Header from './Header'


function About() {
  return (
    

    <DashboardWrapper>
    <div className="body ">
    <div className=' md:w-[1250px] md:absolute md:top-6 md:left-[200px]  overflow-y-auto '>
  <Header pagename="About Us"/>
    <div className='mx-4 grid grid-cols-2 md:grid-col-2 gap-4 sm:grid-cols-12 md:ml-36  mt-5  '>
        <div className='min-h-[100px] sm:col-span-2   rounded-2xl backdrop-blur-2xl   shadow-2xl hidden md:block  '> <img className='h-40' src={logot} alt="" /> </div>
            <div  className='min-h-[100px] col-span-10   rounded-2xl backdrop-blur-2xl  shadow-2xl cursor-pointer    '>
                    <div className='p-2' >
                    <p className='md:text-xl text-sm pt-2 font-bold italic'>Support</p>
                    </div>
                    <div className='mx-4 justify-center text-sm font-semibold gap-4 md:gap-20 md:text-xl'>
                        <div className=' h-24 text-base'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium maiores sapiente recusandae voluptate velit fugit non aspernatur cumque, labore tempora officia molestiae amet pariatur odio et rem obcaecati enim.
                            Harum architecto nobis, qui sed veritatis laborum. Sequi, blanditiis? Omnis harum sed recusandae facilis delectus! Reprehenderit itaque, maxime ullam consectetur ad molestias illo reiciendis sint deleniti qui eum pariatur blanditiis.</p>
                        </div>
                    </div>
                   
                    </div>
        </div>
        </div>
        
    </div>
    <div className=' md:w-[1400px]   md:ml-[180px]  overflow-y-auto mt-7 '>
    <div className=' grid grid-cols-2 md:grid-col-2 gap-6 sm:grid-cols-12 md:ml-44    '>
    <div className="min-h-[100px] sm:col-span-2 rounded-2xl backdrop-blur-2xl shadow-2xl md:block flex items-center justify-center ">
  <img className="h-40 ml-2 aspect-square " src={logo} alt="" />
  <div className='text-center mb-2'>
  <p className='font-semibold'>Omkar Saundore</p>
  <p className='font-light'>Designer</p>
  </div>

</div>

<div className="min-h-[100px] sm:col-span-2 rounded-2xl backdrop-blur-2xl shadow-2xl md:block flex items-center justify-center ">
  <img className="h-40 ml-2 aspect-square " src={logo} alt="" />
  <div className='text-center mb-2'>
  <p className='font-semibold'>Pandurang Zure</p>
  <p className='font-light'>Frontend-Developer</p>
  </div>

</div>

<div className="min-h-[100px] sm:col-span-2 rounded-2xl backdrop-blur-2xl shadow-2xl md:block flex items-center justify-center ">
  <img className="h-40 ml-2 aspect-square " src={logo} alt="" />
  <div className='text-center mb-2'>
  <p className='font-semibold'>Tejas Mahajan</p>
  <p className='font-light'>Frontend-Developer</p>
  </div>

</div>


<div className="min-h-[100px] sm:col-span-2 rounded-2xl backdrop-blur-2xl shadow-2xl md:block flex items-center justify-center ">
  <img className="h-40 ml-2 aspect-square " src={logo} alt="" />
  <div className='text-center mb-2'>
  <p className='font-semibold'>Prajwal Dhage </p>
  <p className='font-light'>Backend-Developer</p>
  </div>

</div>


<div className="min-h-[100px] sm:col-span-2 rounded-2xl backdrop-blur-2xl shadow-2xl md:block flex items-center justify-center ">
  <img className="h-40 ml-2 aspect-square " src={logo} alt="" />
  <div className='text-center mb-2'>
  <p className='font-semibold'>Samarth Naikwade </p>
  <p className='font-light'>Backend-Developer</p>
  </div>

</div>



        
        </div>
        </div>
    
       
    </DashboardWrapper>
  )
}

export default About;