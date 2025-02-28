import React from "react";
import DashboardWrapper from "./DashboardWrapper";
import Header from "./Header";
import Footer from "./Footer";
import profileMale from "./icon/malepfp.png";
import profileFemale from "./icon/femalepfp.png";

const Profile = () => {
  // User Information
  let name = "Saurav Zure";
  let email = "pandurangzure@gmail.com";
  let phone = "1212121212";

  // Gender-based profile image selection
  const gender = "male"; // Change to "female" to test
  const profileImage = gender === "male" ? profileMale : profileFemale;

  return (
    <DashboardWrapper>
      <div className="md:ml-[200px]">
        <Header pagename="Profile" />
      </div>

      <div className="w-full md:w-[1250px] mx-auto p-4 md:p-6 md:ml-[250px]">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-6 gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0 md:ml-20">
            <img
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
              src={profileImage} // ✅ Corrected image source
              alt="Profile"
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col text-center md:my-10 md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">
              Username: <span className="font-normal">{name}</span>
            </h2>
            <h2 className="text-xl md:text-2xl font-bold mt-2">
              Email: <span className="font-normal">{email}</span>
            </h2>
            <h2 className="text-xl md:text-2xl font-bold mt-2">
              Phone no: <span className="font-normal">{phone}</span>
            </h2>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:ml-20">
          {[
            "Agriculture land size",
            "Soil Type",
            "Current Season",
            "Current Crop",
            "Have Dairy?",
            "Have Poultry?",
            "Soil Type",
            "Current Season",
            "Current Crop",
            "Have Dairy?",
            "Have Poultry?",
            "Soil Type",
          ].map((item, index) => (
            <p
              key={index}
              className="font-semibold text-lg text-center py-3 px-5 rounded-lg border shadow-xl border-gray-500"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Logout Button */}
        <div className="flex items-center justify-center mt-4">
          <button className="text-red-600 bg-white shadow-2xl font-bold px-10 py-2 border border-black rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Profile;
