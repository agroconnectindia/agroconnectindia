import React from 'react'
import logo from './icon/account.png'
import logot from './icon/logot.png'
import DashboardWrapper from './DashboardWrapper'
import Header from './Header'


function About() {

  

  const teamMembers = [
    { name: "Omkar Saundore", role: "Designer" },
    { name: "Pandurang Zure", role: "Frontend" },
    { name: "Tejas Mahajan", role: "Frontend" },
    { name: "Prajwal Dhage", role: "Backend" },
    { name: "Samarth Nalkwade", role: "Backend" },
  ];

  return (
    

    <DashboardWrapper>
    <div className="body max-h-full">
    <div className=' md:w-[1250px] md:absolute  top-6 md:left-[200px]  overflow-y-auto '>
  <div >
  <Header pagename="About Us"/>
  </div>
  <div className="w-full flex flex-col items-center p-6 ">
      {/* Support Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 max-w-5xl text-center flex flex-col md:flex-row items-center gap-6 md:ml-20">
        <img
          src={logot}
          alt="Agro Connect Logo"
          className="h-24 w-24 md:h-32 md:w-32 md:block hidden"
        />
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-2">Support</h2>
          <p className="text-gray-700">
            If you need assistance with Agro Connect, we’re here to help! Whether you
            have questions about using the platform, need technical support, or want
            to provide feedback, our team is ready to assist you. Your feedback is
            valuable in helping us improve Agro Connect, so don’t hesitate to get in touch!
          </p>
        </div>
      </div>

      {/* Developer Section */}
      <h2 className="text-2xl font-bold mt-10 mb-6 text-center">
        About the Developers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-40 h-40"
          >
            <div className="h-16 w-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-2xl">👤</span>
            </div>
            <p className="text-sm font-semibold mt-3">{member.name}</p>
            <p className="text-xs text-gray-600">({member.role})</p>
          </div>
        ))}
      </div>
    </div>



        
        </div>
        </div>
    
       
    </DashboardWrapper>
  )
}

export default About;