import React from "react";
import VolunteerOne2 from "../assets/VolunteerOne2.png";
import editTable from "../assets/editTable.png";

const Work = () => {
  return (
    <div
      className="bg-[#0a192f] w-full text-gray-300 min-h-screen flex items-center py-5"
      name="work"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
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
            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-start h-full w-full overflow-hidden">
              <span className="text-2xl font-bold text-white text-center tracking-wider h-1/4 px-2 pt-3">
                VolunteerOne
              </span>
              <p className=" h-1/2 p-2">
                Social-media-based Volunteering app that connects volunteers and
                organizations together. Built in React Native and Go.
              </p>
              <div className="text-center h-1/4">
                <a href="https://www.youtube.com/watch?v=3n5qWAzflfk&t=8s&ab_channel=CeraSamson">
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/VolunteerOne/volunteer-one-app">
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${editTable})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-start h-full w-full overflow-hidden">
              <span className="text-2xl font-bold text-white text-center tracking-wider h-1/4 px-2 pt-3">
                Editable Table
              </span>
              <p className=" h-1/2 p-2">
                Table that can perform CRUD operations on a MySQL Database. Made
                with React.js and Express. Also includes client-side pagination,
                filtering, and sorting.
              </p>
              <div className="text-center h-1/4">
                <a href="">
                  <button
                    className="text-center rounded-lg px-3 py-2 m-2 bg-white text text-gray-700 font-bold text-lg disabled:opacity-70"
                    disabled
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Mtessier809/editable-table">
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text text-gray-700 font-bold text-lg">
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
