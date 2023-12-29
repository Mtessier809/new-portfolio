import React from "react";
import cloudPractioner from "../assets/cloudPractioner.png";
import dva from "../assets/dva.png";

const Certifications = () => {
  return (
    <div
      name="certifications"
      className="w-full bg-[#0a192f] text-gray-300 min-h-screen flex items-center py-5"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
            Certifications
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-25 mx-auto"
              src={cloudPractioner}
              alt="HTML logo"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-25 mx-auto" src={dva} alt="HTML logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
