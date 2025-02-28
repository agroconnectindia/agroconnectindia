import React from 'react'
import logo from './icon/logot.png'
import { Link } from 'react-router-dom';
import RegistrationForm from './registrationform';
import { useState } from "react";
import { loginUser , registerUser } from "./authentication/authService";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "./authentication/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Loginpage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      

      let errorMsg = "An unknown error occurred. Please try again."; // Default error message
  
      // Check if error has a message property
      if (error?.message) {
        errorMsg = error.message
          .replace(/^Firebase: /, "") // Remove "Firebase: " prefix
          .replace(/\(auth\//, "") // Remove "(auth/"
          .replace(/\)\./, "") // Remove ")." // Remove anything in parentheses (e.g., error codes)
          .trim();
          setErrorMessage(errorMsg);

      }
  
      setErrorMessage(errorMsg);
    }
  };


  

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success("Login Successful with Google!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast.error({errorMessage}, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    }
  };


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
                  type="email"
                  placeholder="Enter Username ..."
                  className="w-full outline-none bg-white text-gray-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
        onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            {/* <button className="w-full  bg-black text-white py-2 rounded-md hover:bg-gray-800 ">Login</button> */}
          </form>
          <div className='md:mt-14 mt-4'>
          <button onClick={handleLogin} className="w-full  bg-black text-white py-2 rounded-md hover:bg-gray-800  ">Login</button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account yet? <Link to={'/register'} className="text-blue-500">Sign Up</Link>
          </p>
          <div className='flex justify-center mt-4 '>
          <button onClick={handleGoogleSignIn} className='w-full bg-white border border-black text-black py-2 rounded-md hover:bg-gray-100'>
          <div className='flex text-center justify-center'>
            <div><FcGoogle className='text-2xl mr-2' /> </div>
          <p>Continue with Google</p>
          </div>
      </button>
          </div>
      {errorMessage && (
  <p className="text-red-500 text-md mt-2 text-center font-semibold">{errorMessage}</p> // Error will now be visible
)}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  )
}

export default Loginpage