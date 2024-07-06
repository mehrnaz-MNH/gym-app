import React from "react";

const SectionWrapper = (props) => {
  return (
    <section className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center">
        <p className="uppercase font-medium">{props.header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {props.title[0]}{" "}
          <span className="uppercase text-blue-400"> {props.title[1]} </span>{" "}
          {props.title[2]}
        </h2>
      </div>
    </section>
  );
};

export default SectionWrapper;
