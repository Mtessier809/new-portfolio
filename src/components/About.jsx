import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Mathis, nice to meet you. Please take a look around.</p>
          </div>
          <p>
            I currently work at a fintech startup called Intellimind as a Junior
            Software Engineer. I learned how to design web apps in React.js,
            develop and provison resources in the AWS cloud, and work with a
            team. In the cloud I have worked with services such as Lambda, RDS,
            S3, API Gateway, and many more. I have also obtained the AWS Cloud
            Practitioner certification, and I am currently studying for the
            Associate Developer Exam. My goals are to continue learning more
            about full-stack development and cloud computing so that I can
            eventually land a full-time role as a software engineer. To further
            improve my development skills I also worked on side projects, which
            you can check out below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
