import { useState } from "react";
import { Generator, Hero, Workout, BottomSection } from "./components";
import { generateWorkout } from "./utils/Planner";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) {
      alert("You Need To select Muscle!");
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);

    window.location.href = "#workout";
  }
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        workout={poison}
        setWorkout={setPoison}
        muscle={muscles}
        setMuscle={setMuscles}
        goal={goal}
        setGoal={setGoal}
        handleFormulate={updateWorkout}
      />
      {workout && <Workout wPlan={workout} />}
      <BottomSection />
    </main>
  );
}

export default App;
