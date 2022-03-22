import React from "react";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import TypeCard from "./start-workout/WorkoutTypes";
const StartWorkout = () => {
  const WorkoutTypeCard = useContext(MainContext);
  console.log(WorkoutTypeCard);
  return (
    <section className="start-workout">
      <div className="select-type">

        {WorkoutTypeCard.map((card) => (
          <TypeCard key={card.id}
            Id={card.id}
            Name={card.name}
            Description={card.description}
            Image={card.image}
            Link={card.link}
          />
        ))}
        
      </div>
    </section>
  );
};

export default StartWorkout;
