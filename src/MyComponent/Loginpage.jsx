import React from 'react'
import logo from './icon/logot.png'


function Loginpage() {
  return (
    <>
       <div className="flex w-screen items-center justify-center min-h-screen bg-gray-200 p-4 ">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-4xl md:h-[600px] ">
        {/* Left Side - Logo */}
        <div className="flex flex-col md:rounded-l-2xl rounded-t-2xl items-center justify-center p-6 w-full md:w-1/2 bg-gray-100">
          <img
            src={logo} 
            alt="Agro Connect Logo"
            className="w-60 h-60 object-contain"
          />
          <div className=' absolute mt-52'>
            <p className='font-bold'>Agro-Connect India</p>
            <p className='font-normal text-xs ml-5'>Farming Simplified</p>
          </div>
        </div>
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">WELCOME BACK!</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <div className="flex items-center border rounded-lg p-2 mt-1 bg-white">
                <span className="text-gray-500 pr-2">👤</span>
                <input
                  type="text"
                  placeholder="Enter Username ..."
                  className="w-full outline-none bg-white text-gray-700"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <div className="flex items-center border rounded-md p-2 mt-1 bg-white">
                <span className="text-gray-500 pr-2">🔒</span>
                <input
                  type="password"
                  placeholder="Enter Password ..."
                  className="w-full outline-none bg-white text-gray-700"
                />
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Keep me logged in
              </label>
              <a href="#" className="text-blue-500">Forgot Password?</a>
            </div>
            {/* <button className="w-full  bg-black text-white py-2 rounded-md hover:bg-gray-800 ">Login</button> */}
          </form>
          <div className='md:mt-14 mt-4'>
          <button className="w-full  bg-black text-white py-2 rounded-md hover:bg-gray-800 ">Login</button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account yet? <a href="#" className="text-blue-500">Sign Up</a>
          </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Loginpage