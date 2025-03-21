import React from 'react'
import logo from './icon/logot.png'
import { useState } from "react";
import { registerUser } from "./authentication/authService";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {

  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [soilType, setSoilType] = useState("");
  const [currentCrop, setCurrentCrop] = useState("");
  const [harvestTime, setHarvestTime] = useState("");
  const [fertilizerFrequency, setFertilizerFrequency] = useState("");
  const [ureaFrequency, setUreaFrequency] = useState("");
  const [haveDairy, setHaveDairy] = useState(false);
  const [havePoultry, setHavePoultry] = useState(false);
  const navigate1 = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser(email1, password1);
      
      navigate1("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };


  return (
    <>
      <div className="flex w-screen pt-[350px] md:pt-0 items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-4xl md:h-[600px]">
          {/* Left Side - Logo */}
          <div className=" hidden md:flex flex-col md:rounded-l-2xl rounded-t-2xl items-center justify-center p-6 w-full md:w-1/3 bg-gray-100">
            <img
              src={logo}
              alt="Agro Connect Logo"
              className="w-60 h-60 object-contain"
            />
            <div className="absolute mt-56 ">
              <p className="font-bold">Agro-Connect India</p>
              <p className="font-normal text-xs ml-5">Farming Simplified</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 max-w-4xl min-h-full ">


          <div className='flex md:hidden items-center justify-center'>
          <img
              src={logo}
              alt="Agro Connect Logo"
              className="w-40 h-40 object-contain"
            />
            
          </div>

            <h2 className="text-xl font-semibold text-center mb-4">R E G I S T E R</h2>
            <form className="space-y-4" method = "POST" action='http://127.0.0.1:5000/register'>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <label className="block">Name
                  <input
                    type="text"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                    required
                    autoComplete="name"
                  />
                </label>
                
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">Email
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                    required
                    value={email1} 
                    onChange={(e) => setEmail1(e.target.value)} 
                  />
                </label>
                <label className="block">Password
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                    required
                    value={password1} 
                    onChange={(e) => setPassword1(e.target.value)}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">City
                  <select
                  value={city} onChange={(e) => setCity(e.target.value)}
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm"
                    required
                  >
                    <option value="">Select City</option>
                    
                    <option value="Mumbai">Mumbai</option>
    <option value="Pune">Pune</option>
    <option value="Nagpur">Nagpur</option>
    <option value="Nashik">Nashik</option>
    <option value="Aurangabad">Aurangabad</option>
    <option value="Thane">Thane</option>
    <option value="Solapur">Solapur</option>
    <option value="Amravati">Amravati</option>
    <option value="Kolhapur">Kolhapur</option>
    <option value="Sangli">Sangli</option>
    <option value="Akola">Akola</option>
    <option value="Jalgaon">Jalgaon</option>
    <option value="Latur">Latur</option>
    <option value="Dhule">Dhule</option>
    <option value="Ahmednagar">Ahmednagar</option>
    <option value="Chandrapur">Chandrapur</option>
    <option value="Nanded">Nanded</option>
    <option value="Bhiwandi">Bhiwandi</option>
    <option value="Malegaon">Malegaon</option>
    <option value="Parbhani">Parbhani</option>
    <option value="Beed">Beed</option>
    <option value="Ratnagiri">Ratnagiri</option>
    <option value="Satara">Satara</option>
    <option value="Wardha">Wardha</option>
    <option value="Yavatmal">Yavatmal</option>
    <option value="Baramati">Baramati</option>
    <option value="Osmanabad">Osmanabad</option>
    <option value="Gondia">Gondia</option>
    <option value="Jalna">Jalna</option>
    <option value="Hingoli">Hingoli</option>
    <option value="Karad">Karad</option>
    <option value="Kalyan-Dombivli">Kalyan-Dombivli</option>
    <option value="Ulhasnagar">Ulhasnagar</option>
    <option value="Vasai-Virar">Vasai-Virar</option>
    <option value="Ichalkaranji">Ichalkaranji</option>
    <option value="Navi Mumbai">Navi Mumbai</option>
    <option value="Mira-Bhayandar">Mira-Bhayandar</option>
    <option value="Panvel">Panvel</option>
    <option value="Chandwad">Chandwad</option>
    <option value="Malkapur">Malkapur</option>
    <option value="Bhandara">Bhandara</option>
    <option value="Sindhudurg">Sindhudurg</option>
    <option value="Washim">Washim</option>
    <option value="Hinganghat">Hinganghat</option>
    <option value="Pandharpur">Pandharpur</option>
    <option value="Palghar">Palghar</option>
    <option value="Wardha">Wardha</option>
    <option value="Alibag">Alibag</option>
    <option value="Mahad">Mahad</option>
    <option value="Chiplun">Chiplun</option>
                    
                  </select>
                </label>
                <label className="block">State
                  <select
                  value={state} onChange={(e) => setState(e.target.value)}
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Maharashtra">Maharashtra</option>
                    {/* <option value="Delhi">Delhi</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Gujarat">Gujarat</option> */}
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 md:mt-2">
              <div>
  <p>Gender</p>
  <div className='flex mt-2'>
  <label className="flex items-center gap-2 w-full md:w-auto mr-10">
    <input value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} type="radio" name="gender" className="w-4 h-4"  /> Male
  </label>
  <label className="flex items-center gap-2 w-full md:w-auto">
    <input value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} type="radio" name="gender" className="w-4 h-4"  /> Female
  </label>
  </div>
</div>

              </div>
                <label className="block">Soil Type
                  <select
                  value={soilType} onChange={(e) => setSoilType(e.target.value)}
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm"
                    placeholder="SoilType"
                  >
                    <option value="">Select Soil Type</option>
                    <option value="Sandy">Sandy</option>
                    <option value="Clay">Clay</option>
                  </select>
                </label>
              </div>

              {/* <div className="flex flex-col md:flex-row items-center gap-4">
                <label className="flex items-center gap-2 w-full md:w-auto">
                  <input type="checkbox" className="w-4 h-4" /> Have Dairy?
                </label>
                <label className="flex items-center gap-2 w-full md:w-auto">
                  <input type="checkbox" className="w-4 h-4" /> Have Poultry?
                </label>
              </div> */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="block">Current Crop
                  <input
                  value={currentCrop} 
                  onChange={(e) => setCurrentCrop(e.target.value)}
                    type="text"
                    placeholder="Current Crop"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                  />
                </label>
                <label className="block">Harvest Time
                  <input
                  value={harvestTime} 
                  onChange={(e) => setHarvestTime(e.target.value)}
                    type="text"
                    placeholder="Harvest Time"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                  />
                </label>
                <label className="block">Fertilizer Frequency
                  <input
                  value={fertilizerFrequency} 
                  onChange={(e) => setFertilizerFrequency(e.target.value)}
                    type="text"
                    placeholder="Fertilizer Frequency"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                  />
                </label>
              </div>

            




              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="block">Urea Frequency
                <input
                value={ureaFrequency} onChange={(e) => setUreaFrequency(e.target.value)}
                  type="text"
                  placeholder="Urea Frequency"
                  className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                />
              </label>

              <div className="flex flex-col md:flex-row items-center gap-4 md:mt-6">
                <label className="flex items-center gap-2 w-full md:w-auto">
                  <input type="checkbox" checked={haveDairy} onChange={() => setHaveDairy(!haveDairy)} className="w-4 h-4 " /> Have Dairy?
                </label>
                <label className="flex items-center gap-2 w-full md:w-auto">
                  <input checked={havePoultry} onChange={() => setHavePoultry(!havePoultry)} type="checkbox" className="w-4 h-4" /> Have Poultry?
                </label>
              </div>
              </div>

              <button type="button" onClick={handleRegister} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 text-sm">
  Register
</button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
