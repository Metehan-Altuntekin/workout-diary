import { createContext } from "react";
import imageBasicFitness from "../assets/images/start_workout/basic-fitness.jpg"
import imagePowerlifting from "../assets/images/start_workout/powerlifting.jpg"
import imageBodybuilding from "../assets/images/start_workout/bodybuilding.jpg"
import imageEndurance from "../assets/images/start_workout/endurance.jpg"

const MainContext = createContext();
export function ContextProvider({ children }) {
  const StartWorkoutTypeCards = [
    {
      id: 1,
      name: "Basic Fitness",
      description: "Workout for general fitness purposes.",
      image: imageBasicFitness,
      link: "-",
    },
    {
      id: 2,
      name: "Powerlifting",
      description: "Lift heavier.",
      image: imagePowerlifting,
      link: "-",
    },
    {
      id: 3,
      name: "Bodybuilding",
      description: "Get bigger.",
      image: imageBodybuilding,
      link: "-",
    },
    {
      id: 4,
      name: "Endurance Training",
      description: "Strenghten your heart.",
      image: imageEndurance,
      link: "-",
    },
  ];

  return (
    <MainContext.Provider value={StartWorkoutTypeCards}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
