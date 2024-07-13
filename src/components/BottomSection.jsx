import React from "react";

const BottomSection = () => {
  return (
    <footer className="bg-slate-950 p-5 justify-center items-center flex flex-col w-full h-full ">
      <p className="text-l sm:text-xl md:text-2xl lg:text-3xl py-4">
        Generate <span className="text-blue-700">workout</span> that matches you{" "}
        <span className="text-blue-700">vibe</span>
      </p>
      <ul className="flex flex-row gap-4 ">
        <li>
          <i className="fa-regular fa-envelope px-2"></i>
          <a href="mailto:mnh.mehrnaz@gmail.com">Email</a>
        </li>
        <li>
          <i className="fa-brands fa-linkedin px-2"></i>
          <a href="https://www.linkedin.com/in/mehrnaz-mnh/">Linkedin</a>
        </li>
        <li>
          <i className="fa-brands fa-github px-2"></i>
          <a href="https://github.com/mehrnaz-MNH">Github</a>
        </li>
      </ul>
    </footer>
  );
};

export default BottomSection;
