import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import javascriptLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import awsLogo from "../assets/aws.png";
import pythonLogo from "../assets/pythonLogo.png";
import gitLogo from "../assets/git.png";
import sqlLogo from "../assets/sql.jpg";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full bg-[#0a192f] text-gray-300 min-h-screen flex items-center py-5"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={htmlLogo} alt="HTML logo" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={cssLogo} alt="CSS logo" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={javascriptLogo}
              alt="JavaScript logo"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reactLogo} alt="React logo" />
            <p className="my-4">React.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={awsLogo} alt="AWS logo" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={pythonLogo} alt="Python logo" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={sqlLogo} alt="SQL logo" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={gitLogo} alt="Git logo" />
            <p className="my-4">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
