import React from 'react';
import DashboardWrapper from './DashboardWrapper'
import Header from './Header'
import logo from './icon/logot.png'
import Footer from './Footer'

function Report() {
 

  return (
    <DashboardWrapper>
    {/* 1st row */}
    <div className=' md:w-[1250px] w-full  md:absolute top-0 md:left-[200px]  overflow-y-auto  '>
        <div className='hidden md:block mt-10'>
        <Header pagename='Farm Records'/>
        </div>
    <div className='m-4 grid grid-cols-2 md:grid-col-2 gap-4 sm:grid-cols-12 md:ml-36   '>
        <div className='min-h-[100px] sm:col-span-2   rounded-2xl backdrop-blur-2xl   shadow-2xl hidden md:block  '> <img className='h-36 m-2' src={logo} alt="" /> </div>
    <div  className='min-h-[100px] col-span-10 mr-5 w-full  rounded-2xl backdrop-blur-2xl  shadow-2xl cursor-pointer    '>
            <div className='p-2' >
            <p className='md:text-xl text-sm pt-2 font-bold italic'>Yearly Income Overview</p>
            </div>
            <div className='mx-4 justify-center text-sm font-semibold gap-4 md:gap-20 md:text-xl'>
                <div className=' h-24'>
                    <p></p>
                </div>
            </div>
           
            </div>
    </div>

    <div className='md:ml-[120px]'>
    <p className='ml-10 font-bold text-xl'>Record</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <div className="text-sm font-semibold md:text-base flex justify-between">
          <div className="text-center">
            <div>Month</div>
            <div className="font-normal">September</div>
          </div>
          <div className="text-center">
            <div>Total Qty</div>
            <div className="font-normal">500L</div>
          </div>
          <div className="text-center">
            <div>Rate</div>
            <div className="font-normal">40(₹)</div>
          </div>
          <div className="text-center">
            <div>Total</div>
            <div className="font-normal">₹ 20,000</div>
          </div>
        </div>
        <hr className="border-gray-300 my-3" />
        <div className="text-sm font-semibold md:text-base flex justify-between">
          <div className="text-center">
            <div>Old Month</div>
            <div className="font-normal">August</div>
          </div>
          <div className="text-center">
            <div>Total Qty</div>
            <div className="font-normal">600L</div>
          </div>
          <div className="text-center">
            <div>Rate</div>
            <div className="font-normal">42(₹)</div>
          </div>
          <div className="text-center">
            <div>Total</div>
            <div className="font-normal">₹ 25,200</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <div className="text-sm font-semibold md:text-base flex justify-between">
          <div className="text-center">
            <div>Month</div>
            <div className="font-normal">September</div>
          </div>
          <div className="text-center">
            <div>Total Qty</div>
            <div className="font-normal">500 Eggs</div>
          </div>
          <div className="text-center">
            <div>Rate</div>
            <div className="font-normal">5(₹)</div>
          </div>
          <div className="text-center">
            <div>Total</div>
            <div className="font-normal">₹ 2500</div>
          </div>
        </div>
        <hr className="border-gray-300 my-3" />
        <div className="text-sm font-semibold md:text-base flex justify-between">
          <div className="text-center">
            <div>Old Month</div>
            <div className="font-normal">August</div>
          </div>
          <div className="text-center">
            <div>Total Qty</div>
            <div className="font-normal">600 Eggs</div>
          </div>
          <div className="text-center">
            <div>Rate</div>
            <div className="font-normal">5(₹)</div>
          </div>
          <div className="text-center">
            <div>Total</div>
            <div className="font-normal">₹ 3000</div>
          </div>
        </div>
      </div>
    </div>
    </div>

    

    <div className='md:ml-[120px]'>
    <p className='ml-10 font-bold text-xl'>Record</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 justify-center">
      <div className="bg-white rounded-2xl shadow-2xl px-6">
        <div className="text-sm font-semibold md:text-base flex justify-between">
          <div className="text-center">
            <div>Month</div>
            <div className="font-normal">June</div>
          </div>
          <div className="text-center">
            <div>Total Qty</div>
            <div className="font-normal">500L</div>
          </div>
          <div className="text-center">
            <div>Rate</div>
            <div className="font-normal">40(₹)</div>
          </div>
          <div className="text-center">
            <div>Total</div>
            <div className="font-normal">₹ 20,000</div>
          </div>
        </div>
        <hr className="border-gray-300 my-3" />
        <div className="text-sm font-semibold md:text-base flex justify-between">
          <div className="text-center">
            <div>Old Month</div>
            <div className="font-normal">July</div>
          </div>
          <div className="text-center">
            <div>Total Qty</div>
            <div className="font-normal">600L</div>
          </div>
          <div className="text-center">
            <div>Rate</div>
            <div className="font-normal">42(₹)</div>
          </div>
          <div className="text-center">
            <div>Total</div>
            <div className="font-normal">₹ 25,200</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <div className="text-sm font-semibold md:text-base flex justify-between">
          <div className="text-center">
            <div>Month</div>
            <div className="font-normal">June</div>
          </div>
          <div className="text-center">
            <div>Total Qty</div>
            <div className="font-normal">500 Eggs</div>
          </div>
          <div className="text-center">
            <div>Rate</div>
            <div className="font-normal">5(₹)</div>
          </div>
          <div className="text-center">
            <div>Total</div>
            <div className="font-normal">₹ 2500</div>
          </div>
        </div>
        <hr className="border-gray-300 my-3" />
        <div className="text-sm font-semibold md:text-base flex justify-between">
          <div className="text-center">
            <div>Old Month</div>
            <div className="font-normal">July</div>
          </div>
          <div className="text-center">
            <div>Total Qty</div>
            <div className="font-normal">600 Eggs</div>
          </div>
          <div className="text-center">
            <div>Rate</div>
            <div className="font-normal">5(₹)</div>
          </div>
          <div className="text-center">
            <div>Total</div>
            <div className="font-normal">₹ 3000</div>
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
