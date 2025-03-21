import React, { useState } from 'react';
import DashboardWrapper from './DashboardWrapper';
import Header from './Header';
import Footer from './Footer';
import pro1 from './icon/pro1.png';
import pro2 from './icon/pro2.png';
import pro3 from './icon/pro3.png';

function Marketplace() {
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleClick = (e, url) => {
    e.preventDefault();
    setRedirectUrl(url);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.location.href = url;
    }, 2000);
  };

  return (
    <DashboardWrapper>
      <div className='md:w-[1250px] md:absolute md:top-6 md:left-[200px] bg-white overflow-y-auto'>
        <Header pagename='Marketplace' />
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col items-center justify-center p-6 w-full md:w-3/4 mt-[160px] md:mt-10 md:ml-[200px]">
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              All in 1 Solution to Seeds And Fertilizers
            </h1>
            <p className="text-center text-gray-600 max-w-xl mt-2">
              Saurav Zure nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate.
              Labore recusandae facilis veritatis consectetur expedita.
            </p>

            {loading && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                  <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
                  <p className="mt-4 text-gray-700">Redirecting...</p>
                </div>
              </div>
            )}

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <button className='bg-transparent' onClick={(e) => handleClick(e, 'http://agrostore.lovestoblog.com/')}>
                <div className='flex flex-col bg-white'>
                  <img className='p-5 h-64' src={pro1} alt="Seeds" />
                  <p className='text-center font-bold mt-2 text-black'>Seeds</p>
                </div>
              </button>

              <button className='bg-transparent' onClick={(e) => handleClick(e, 'http://agrostore.lovestoblog.com/')}>
                <div className='flex flex-col bg-white'>
                  <img className='p-5 h-64' src={pro2} alt="Fertilizer" />
                  <p className='text-center font-bold mt-2 text-black'>Fertilizer</p>
                </div>
              </button>

              <button className='bg-transparent' onClick={(e) => handleClick(e, 'http://agrostore.lovestoblog.com/')}>
                <div className='flex flex-col bg-white'>
                  <img className='p-5 h-64' src={pro3} alt="Urea" />
                  <p className='text-center font-bold mt-2 text-black'>Urea</p>
                </div>
              </button>
            </div>

            <button
              className="mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg"
              onClick={(e) => handleClick(e, 'http://agrostore.lovestoblog.com/')}>
              Jump to Store
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </DashboardWrapper>
  );
}

export default Marketplace;
