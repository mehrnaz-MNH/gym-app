import React from "react";
import SectionWrapper from "./SectionWrapper";

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
  <div>
    <div>
      <p>{props.index}</p>
      <h4>{props.title}</h4>
    </div>
    <p>{props.desc}</p>
  </div>;
};

const Generator = () => {
  return (
    <>
      <SectionWrapper
        header={"Generate your Workout"}
        title={["It's", "Huge", "o'clock"]}
      />

      <Header
        index={Headers[0].index}
        title={Headers[0].title}
        desc={Headers[0].desc}
      />
      <Header
        index={Headers[1].index}
        title={Headers[1].title}
        desc={Headers[1].desc}
      />
      <Header
        index={Headers[2].index}
        title={Headers[2].title}
        desc={Headers[2].desc}
      />
    </>
  );
};

export default Generator;
