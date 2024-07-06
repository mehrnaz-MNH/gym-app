import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO BECOME</p>
        <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
          SUPER <span className="text-blue-400">HERO</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become
        <span className="text-blue-400 font-medium"> unbelievably strong </span>
        and accept all risk of becoming a
        <span className="text-blue-400 font-medium "> super hero </span>.
        Affected by extreme body changes and unable to fit through doors.
      </p>
      <button className="px-8 py-4 rounded-md border-[2px] border-blue-700 border-solid bg-slate-950 blueShadow duration-200">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
};

export default Hero;
