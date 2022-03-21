import React from "react";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import CardWorkout from "./CardWorkout";
const StartWorkout = () => {
  const WorkoutTypeCard = useContext(MainContext);
  console.log(WorkoutTypeCard);
  return (
    <>
      {WorkoutTypeCard.map((card) => (
        <div key={card.id}>
          <CardWorkout
            Id={card.id}
            Name={card.name}
            Description={card.description}
            Image={card.image}
            Link={card.link}
          />
        </div>
      ))}
    </>
  );
};

export default StartWorkout;
