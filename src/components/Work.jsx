import React from "react";
import VolunteerOne from "../assets/VolunteerOne.png";
import VolunteerOne2 from "../assets/VolunteerOne2.png";

const Work = () => {
  return (
    <div className="bg-[#0a192f] w-full md:h-screen text-gray-300" name="work">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Grid Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${VolunteerOne2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Native App
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.youtube.com/watch?v=3n5qWAzflfk&t=8s&ab_channel=CeraSamson">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/VolunteerOne/volunteer-one-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
