import { useState } from "react";
import { Generator, Hero, Workout } from "./components";

function App() {
  return (
    <div>
      <Hero />
      <Generator />
      <Workout />
    </div>
  );
}

export default App;
