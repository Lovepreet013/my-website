import React from 'react';
import myImage from "../assets/portfolioImg.webp";

const Hero = () => {
  return (
    <main className="max-w-5xl mx-auto flex flex-col md:flex-row mt-16 items-center md:items-start space-y-8 md:space-y-0" id="about">
      <div className="p-4 md:pr-10 flex-1 text-left md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Hello! I'm Lovepreet, a developer based in India.
        </h1>
        <div className="text-lg space-y-4 mt-5">
          <p>I love building tools that are user-friendly, simple, and delightful.</p>
          <p>
            I am a Mechanical Engineering student who has fallen in love with Frontend Development. I have experience developing innovative web applications using technologies such as JavaScript, React.js, and Next.js.
          </p>
          <p>I'm currently looking for a new role as a developer. Hire me?</p>
          <div className="mt-4 space-x-0 md:space-x-4 flex flex-col md:flex-row">
            <button className="px-4 py-2 bg-black text-white hover:bg-slate-700 mb-3 md:mb-0 rounded ease-in-out duration-100">
              <a href="https://www.linkedin.com/in/lovepreetsingh013/" target="_blank" rel="noopener noreferrer">View LinkedIn</a>
            </button>
            <button className="px-4 py-2 border-2 border-gray-200 hover:border-gray-500 rounded ease-in-out duration-100">
              <a href="https://github.com/Lovepreet013" target="_blank" rel="noopener noreferrer">View Github</a>
            </button>
          </div>
        </div>
      </div>
      <img
        src={myImage}
        alt="Hero Image"
        className="w-64 h-68 md:w-80 md:h-[23rem] rounded-lg object-cover"
      />
    </main>
  );
};

export default Hero;