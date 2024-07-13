import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "../utils/Workouts";
import CustomButton from "./CustomButton";

const Headers = [
  {
    index: "01",
    title: "Pick your poison",
    desc: "Select the workout you wish to endure.",
  },
  {
    index: "02",
    title: "Lock on targets",
    desc: "Select the muscles judged for annihilation.",
  },
  {
    index: "03",
    title: "Become Juggernaut",
    desc: "Select your ultimate objective.",
  },
];

const Header = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {props.index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{props.title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{props.desc}</p>
    </div>
  );
};

const Generator = (props) => {
  const {
    workout,
    setWorkout,
    muscle,
    setMuscle,
    goal,
    setGoal,
    handleFormulate,
  } = props;
  const [showSec, setShowSec] = useState(false);
  function handleWOClick(index) {
    switch (index) {
      case 0:
        setWorkout("individual");
        setMuscle([]);
        break;
      case 1:
        setWorkout("bro_split");
        setMuscle([]);
        break;
      case 2:
        setWorkout("bodybuilder_split");
        setMuscle([]);
        break;
      case 3:
        setWorkout("upper_lower");
        setMuscle([]);
        break;
      default:
        setWorkout("individual");
        setMuscle([]);
        break;
    }
  }

  function handleScClick(index) {
    switch (index) {
      case 0:
        setGoal("strength_power");
        break;
      case 1:
        setGoal("growth_hypertrophy");
        break;
      case 2:
        setGoal("cardiovascular_endurance");
        break;
      default:
        setGoal("strength_power");
        break;
    }
  }

  function handleMuscleClick(muscleGroup) {
    if (muscle.includes(muscleGroup)) {
      setMuscle(muscle.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscle.length > 2) {
      return;
    }

    if (workout !== "individual") {
      setMuscle([muscleGroup]);
      setShowSec(false);
      return;
    }

    setMuscle([...muscle, muscleGroup]);
    if (muscle.length === 2) {
      setShowSec(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"Generate your Workout"}
      title={["Test", "your", "Limits"]}
    >
      <Header
        index={Headers[0].index}
        title={Headers[0].title}
        desc={Headers[0].desc}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.keys(WORKOUTS).map((type, index) => (
          <button
            key={index}
            className={`py-4 px-4 rounded-lg border-[2px] border-solid bg-slate-950 duration-200 hover:border-blue-700 ${
              workout == type ? "border-blue-400" : " border-blue-950"
            }`}
            onClick={() => handleWOClick(index)}
          >
            <p className="capitalize">{type.replace("_", " ")}</p>
          </button>
        ))}
      </div>

      <Header
        index={Headers[1].index}
        title={Headers[1].title}
        desc={Headers[1].desc}
      />

      <div className="bg-slate-950    rounded-lg flex flex-col">
        <button
          className="relative p-3 flex justify-center items-center"
          onClick={() => setShowSec(!showSec)}
        >
          <p>
            {muscle.length === 0
              ? `select muscle groups${
                  workout === "individual" ? " (up to 3)" : ""
                }`
              : muscle.join(" & ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showSec && (
          <div className="relative p-3 flex flex-col  justify-center items-center">
            {workout == "individual"
              ? WORKOUTS.individual.map((m) => (
                  <button
                    className="p-3 hover:text-blue-500"
                    onClick={() => handleMuscleClick(m)}
                  >
                    {m}
                  </button>
                ))
              : Object.keys(WORKOUTS[workout]).map((m) => (
                  <button
                    className="p-3 hover:text-blue-500"
                    onClick={() => handleMuscleClick(m)}
                  >
                    {m}
                  </button>
                ))}
          </div>
        )}
      </div>

      <Header
        index={Headers[2].index}
        title={Headers[2].title}
        desc={Headers[2].desc}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {Object.keys(SCHEMES).map((type, index) => (
          <button
            key={index}
            className={`py-4 px-4 rounded-lg border-[2px] border-solid bg-slate-950 duration-200 hover:border-blue-700 ${
              goal == type ? "border-blue-400" : " border-blue-950"
            }`}
            onClick={() => handleScClick(index)}
          >
            <p className="capitalize">{type.replace("_", " & ")}</p>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <CustomButton text={"formulate"} handleClick={handleFormulate} />
      </div>
    </SectionWrapper>
  );
};

export default Generator;
