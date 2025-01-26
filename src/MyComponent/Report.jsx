import React from 'react';
import logo from './icon/report.png'
import DashboardWrapper from './DashboardWrapper'
import Header from './Header'
import Footer from './Footer'

function Report() {
 

  return (
    <DashboardWrapper>
    {/* 1st row */}
    <div className=' md:w-[1250px] md:absolute top-0 md:left-[200px]  overflow-y-auto mt-7 '>
        <Header pagename='Farm Records'/>
    <div className='m-4 grid grid-cols-2 md:grid-col-2 gap-4 sm:grid-cols-12 md:ml-36   '>
        <div className='min-h-[100px] sm:col-span-2   rounded-2xl backdrop-blur-2xl   shadow-2xl hidden md:block  '> <img className='h-36 m-2' src={logo} alt="" /> </div>
    <div  className='min-h-[100px] col-span-10   rounded-2xl backdrop-blur-2xl  shadow-2xl cursor-pointer    '>
            <div className='p-2' >
            <p className='md:text-xl text-sm pt-2 font-bold italic'>Yearly Income Overview</p>
            </div>
            <div className='mx-4 justify-center text-sm font-semibold gap-4 md:gap-20 md:text-xl'>
                <div className='bg-slate-300 h-24'>
                    <p>chart</p>
                </div>
            </div>
           
            </div>
    </div>
    


    
   <div className="main md:ml-[145px] flex m-2">


    <div className=' row2  md:w-[600px] md:h-auto mr-4'>
    <div className=' md:  h-auto ' >
            <p className='md:text-xl text-sm ml-3  font-bold italic'>Yearly Income Overview</p>
            </div>
            
    <div className='m-2 grid grid-cols-2 md:grid-col-2 gap-4 sm:grid-cols-12 md:ml-   '>
    
    <div  className='min-h-[100px] col-span-12   rounded-2xl backdrop-blur-2xl  shadow-2xl cursor-pointer    '>
            
            <div className='mx-4 justify-center text-xs font-semibold gap-4 md:gap-20 md:text-xl'>
                <div className=' m-2 flex justify-between text-base '>
                    <div className='month mr-4'>
                        <div className='text-center'>Month</div>
                        <div className='text-center font-normal'>September</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center'>Total Qty</div>
                    <div className='text-center font-normal'>500L</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center'>Rate</div>
                    <div className='text-center font-normal'>40(₹)</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center'>Total</div>
                    <div className='text-center font-normal'>₹ 20,000</div>
                    </div>

                    

                </div>
            </div>

            <hr className='text-black' />
           
           <div className='mx-6 my-2 flex justify-between text-base'>
           <div className='month mr-4'>
                        <div className='text-center font-semibold'>Old Month</div>
                        <div className='text-center font-normal'>September</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center font-semibold'>Total Qty</div>
                    <div className='text-center font-normal'>600L</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center font-semibold'>Rate</div>
                    <div className='text-center font-normal'>42(₹)</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center font-semibold'>Total</div>
                    <div className='text-center font-normal'>₹ 25,200</div>
                    </div>
           </div>
            </div>

            
    </div>
    </div>




    <div className=' md:w-[600px]  mr-4 '>
    
            <div className='  mt- h-auto ' >
            <p className='md:text-xl text-sm  font-bold italic ml-4'>Poultry Record</p>
            </div>
    <div className='m-2 grid grid-cols-2 md:grid-col-2 gap-4 sm:grid-cols-12    '>
    
    <div  className='min-h-[100px] col-span-12   rounded-2xl backdrop-blur-2xl  shadow-2xl cursor-pointer    '>
            
            <div className='mx-4 justify-center text-xs font-semibold gap-4 md:gap-20 md:text-xl'>
                <div className=' m-2 flex justify-between text-base '>
                    <div className='month mr-4'>
                        <div className='text-center'>Month</div>
                        <div className='text-center font-normal'>September</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center'>Total Egg</div>
                    <div className='text-center font-normal'>500</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center'>Rate(₹)</div>
                    <div className='text-center font-normal'>10(₹)</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center'>Total</div>
                    <div className='text-center font-normal'>₹ 5,000</div>
                    </div>

                    

                </div>
            </div>

            <hr className='text-black' />
           
           <div className='mx-6 my-2 flex justify-between text-base'>
           <div className='month mr-4'>
                        <div className='text-center font-semibold'>Old Month</div>
                        <div className='text-center font-normal'>September</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center font-semibold'>Total Egg</div>
                    <div className='text-center font-normal'>600</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center font-semibold'>Rate (₹)</div>
                    <div className='text-center font-normal'>15(₹)</div>
                    </div>

                    <div className='month mr-4'>
                    <div className='text-center font-semibold'>Total</div>
                    <div className='text-center font-normal'>₹ 9,000</div>
                    </div>
           </div>
            </div>

            
    </div>
    </div>
   
   </div>

    </div>
    </DashboardWrapper>
  );
}

export default Report;
