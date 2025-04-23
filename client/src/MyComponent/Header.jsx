import React, { useState, useEffect } from 'react';

function CurrentDateTime(props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const optionsForDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const optionsForTime = { hour: 'numeric', minute: '2-digit', hour12: true };

  const formattedDate = currentTime.toLocaleDateString('en-US', optionsForDate);
  const formattedTime = currentTime.toLocaleTimeString('en-US', optionsForTime);

  return (
    <>
    <div className="flex  justify-end  md:text-3xl">
      <p className='mr-auto md:ml-36 font-extrabold '>{props.pagename}</p>
      <p className="font-bold"> {formattedTime}</p>
    </div>

    <div className="flex justify-end  ">
    <p className='mr-auto md:ml-36 '>Farming Simplified.......</p>
   
      <p className="font-bold md:block hidden">{formattedDate} </p>
    </div>
    </>
    
  );
}

export default CurrentDateTime;

