import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StartWorkout from "./Workout-Sections/StartWorkout";
import AddWorkout from "./Workout-Sections/AddWorkout";
const Workout = () => {
  return (
    <>
      <nav>
        <Link to="start-workout">Start Workout</Link>
        <Link to="add-workout">Add Workout</Link>
      </nav>
      <Routes>
        <Route index path="/start-workout" element={<StartWorkout />} />
        <Route path="/add-workout" element={<AddWorkout />} />
      </Routes>
    </>
  );
};

export default Workout;
