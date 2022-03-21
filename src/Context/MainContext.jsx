import { createContext } from "react";

const MainContext = createContext();
export function ContextProvider({ children }) {
  const WorkoutTypeCard = [
    {
      id: 1,
      name: "Basic Fitness",
      description: "Workout for general fitness purposes.",
      image: "-",
      link: "-",
    },
    {
      id: 2,
      name: "Powerlifting",
      description: "Lift heavier.",
      image: "-",
      link: "-",
    },
    {
      id: 3,
      name: "Bodybuilding",
      description: "Get bigger.",
      image: "-",
      link: "-",
    },
    {
      id: 4,
      name: "Endurance Training",
      description: "Strenghten your heart.",
      image: "-",
      link: "-",
    },
  ];

  return (
    <MainContext.Provider value={WorkoutTypeCard}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
