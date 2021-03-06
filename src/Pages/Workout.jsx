import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StartWorkout from "./Workout-Sections/StartWorkout";
import AddWorkout from "./Workout-Sections/AddWorkout";
import { Navigate } from "react-router-dom";
const Workout = () => {
  return (
    <>
      <nav className="sections">
        <Link to="start-workout" className="active">
          Start Workout
        </Link>
        <Link to="add-workout">Add Workout</Link>
        <Link to="#">Workout History</Link>
        <Link to="#">Workout Templates</Link>
      </nav>
      <Routes>
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route index path="/start-workout" element={<StartWorkout />} />
        <Route path="/add-workout" element={<AddWorkout />} />
      </Routes>
    </>
  );
};

export default Workout;
