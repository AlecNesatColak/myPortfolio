import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-tertiary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text text-white font-semibold">Hello, I'm</h1>
      <h1 className="text-7xl text-secondary font-semibold">
        Alec-Nesat Colak
      </h1>
      <h1 className="text-6xl text-white font-semibold">Software Engineer</h1>
      <p className="text-white font-semibold w-2/3">
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores.
      </p>
      <button className="border border-secondary text-white px-10 py-3 rounded">Get Started</button>
    </div>
  );
}

export default Intro;
