import { useState } from "react";
import { Generator, Hero, Workout } from "./components";

function App() {
  const [workout, setWorkout] = useState("individual");
  const [muscle, setMuscle] = useState([]);
  const [goal, setGoal] = useState("strength_power");
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        workout={workout}
        setWorkout={setWorkout}
        muscle={muscle}
        setMuscle={setMuscle}
        goal={goal}
        setGoal={setGoal}
      />
      <Workout />
    </main>
  );
}

export default App;
