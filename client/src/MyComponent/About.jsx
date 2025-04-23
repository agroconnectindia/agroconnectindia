import React, { useState } from "react";
import logo from "./icon/account.png";
import logot from "./icon/logot.png";
import DashboardWrapper from "./DashboardWrapper";
import Header from "./Header";

function About() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
        <div className="md:w-[1250px] md:absolute top-6 md:left-[200px] overflow-y-auto">
          <Header pagename="About Us" />

          <div className="w-full flex flex-col items-center p-6">
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
                  If you need assistance with Agro Connect, we’re here to help!
                  Whether you have questions about using the platform, need
                  technical support, or want to provide feedback, our team is
                  ready to assist you. Your feedback is valuable in helping us
                  improve Agro Connect, so don’t hesitate to get in touch!
                </p>
              </div>
            </div>

            {/* Developer Section */}
            <h2 className="text-2xl font-bold mt-10 mb-6 text-center">
              About the Developers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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

          {/* Contact Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="text-center bg-transparent border border-black px-8 py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              Contact
            </button>
          </div>

          {/* Popup Modal */}
          {isPopupOpen && (
            
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
              <div className="bg-white p-6 rounded-lg shadow-lg md:w-[60%] w-[80%] md:ml-36 h-[70%]">
              <button
                    onClick={() => setIsPopupOpen(false)}
                    className="px-4 py-2  text-white text-extrabold rounded-lg  transition absolute">
                    X
                  </button>
                  <div className="py-4 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h2>
          <form action="#" className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardWrapper>
  );
}

export default About;
