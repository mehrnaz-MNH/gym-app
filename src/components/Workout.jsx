import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import ExeCard from "./ExeCard";
import CustomButton from "./CustomButton";

const Workout = (props) => {
  const { wPlan } = props;
  // const [incSet, setIncSet] = useState(0);

  return (
    <SectionWrapper
      header={"Welcome To "}
      title={["The", "Big", "Challenge"]}
      id={"workout"}
    >
      {wPlan.map((w, i) => (
        <ExeCard exc={w} index={i} />
      ))}
      <div className="items-center justify-center flex ">
        <CustomButton
          text="Start Over"
          handleClick={() => (window.location.href = "#generate")}
        />
      </div>
    </SectionWrapper>
  );
};

export default Workout;
