import { Routes, Route, Link, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Workout from "./Pages/Workout";
import Stats from "./Pages/Stats";
import Settings from "./Pages/Settings";
import Account from "./Components/Account";
import StartWorkout from "./Pages/Workout-Sections/StartWorkout";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />}>
          <Route path="start-workout" element={<StartWorkout />} />
        </Route>
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
