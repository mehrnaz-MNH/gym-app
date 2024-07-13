import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import ExeCard from "./ExeCard";

const Workout = (props) => {
  const { wPlan } = props;
  // const [incSet, setIncSet] = useState(0);

  return (
    <SectionWrapper header={"Welcome To "} title={["The", "Big", "Challenge"]}>
      {wPlan.map((w, i) => (
        <ExeCard exc={w} index={i} />
      ))}
    </SectionWrapper>
  );
};

export default Workout;
