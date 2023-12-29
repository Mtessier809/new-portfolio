import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen text-gray-300 flex items-center py-5"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Welcome to my portfolio. Please take a look around.</p>
          </div>
          <p>
            At my latest role I interned for a fintech startup called
            Intellimind as a Junior Software Engineer. For the last year, I
            built a high-performance, scalable, cross-platform responsive web
            application with React.js, TypeScript, Material-UI, and other
            technologies integrated with AWS services such as Amplify, Lambda ,
            DynamoDB, and S3. I have also obtained the AWS Cloud Practitioner
            Certification and the AWS Developer Associate Certification. My
            goals are to continue learning more about full-stack development and
            cloud computing, so I can eventually build entire applications
            end-to-end from scratch. To further improve my development skills, I
            have also worked on side projects that you can check out below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
