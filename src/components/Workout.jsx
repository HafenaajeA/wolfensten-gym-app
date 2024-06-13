import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout(props) {
  // destructure the props
  const { workout } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to"}
      title={["The", "DANGER", "zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return (
            // set the exersice and create a key
            <ExerciseCard i={i} exercise={exercise} key={i} />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
