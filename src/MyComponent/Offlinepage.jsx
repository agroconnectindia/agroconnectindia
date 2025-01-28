import React from 'react'
import { Detector } from 'react-detect-offline';
import nointernet from './icon/oninternet.png'


const offlinepage = props => {
    return (
      <Detector
        render={({ online }) => (
          online ? props.children : (
            <div className="relative md:ml-[600px] ml-10 h-screen flex items-center justify-center"> 
  <div className=" bg-white p-10 rounded-lg "> 
    <div className="text-center">
      <img src={nointernet} alt="No internet connection" className="h-28 mb-4 mx-auto" />
      <h1 className="text-3xl font-bold mb-2">No Connection</h1>
      <p className="text-gray-500">Please check your internet connection</p>
    </div>
  </div>
</div>

          )
        )}
      />
    );
  };
  
  export default offlinepage;