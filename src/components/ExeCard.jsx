import React, { useState } from "react";

const ExeCard = (props) => {
  const { exc, index } = props;
  //   class="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4"
  const [model, setModel] = useState(false);
  return (
    <div className="flex flex-col  bg-slate-950 p-4 gap-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4 ">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{index + 1}
        </h4>
        <p className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 md:text-center">
          {exc.name.replaceAll("_", " ")}
        </p>
        <p className="text-gray-500">{exc.type}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-500">muscle Group</p>
        {exc.muscles.join(" & ")}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
        <div className="border border-solid border-gray-700 p-2">
          <p>Reps</p>
          <p>{exc.reps}</p>
        </div>
        <div className="border border-solid border-gray-700 p-2">
          <p>Rest</p>
          <p>{exc.rest}</p>
        </div>
        <div className="border border-solid border-gray-700 p-2">
          <p>Tempo</p>
          <p>{exc.tempo}</p>
        </div>
        <div className="border border-solid border-gray-700 p-2">
          <p>Sets Completed</p>
          <p>0 / 5</p>
        </div>
      </div>
      <div className="bg-slate-800 p-4 flex flex-col">
        <button
          className="relative p-3 flex justify-center items-center p-3"
          onClick={() => setModel(!model)}
        >
          <p className="absolute left-3">Description</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {model && (
          <div className="p-3 ">
            <p>{exc.description.replaceAll("___", " ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExeCard;
