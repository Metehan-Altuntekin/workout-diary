import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StartWorkout from "./Workout-Sections/StartWorkout";
import AddWorkout from "./Workout-Sections/AddWorkout";
const Workout = () => {
  return (
    <>
      <nav>
        <Link to="start-workout">Start Workout</Link>
      </nav>
      <Routes>
        <Route path="/start-workout" element={<StartWorkout />} />
      </Routes>
    </>
  );
};

export default Workout;
