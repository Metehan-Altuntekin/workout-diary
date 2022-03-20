import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Account from "./Account";

//Header nav icons (SVG)
import HomeIcon from "../assets/icons/as-component/home-icon.jsx";
import WorkoutIcon from "../assets/icons/as-component/workout-icon.jsx";
import StatsIcon from "../assets/icons/as-component/stats-icon.jsx";
import SettingsIcon from "../assets/icons/as-component/settings-icon";
import AccountIcon from "../assets/icons/as-component/account-icon";

const Header = ({ isOpen, setIsOpen }) => {
  console.log(isOpen);
  return (
    <header>
      <h1>Welcome, Larry</h1>
      <nav>
        <Link to="/"> <HomeIcon /> </Link>
        <Link to="/workout/start-workout"> <WorkoutIcon /> </Link>
        <Link to="/stats"> <StatsIcon /> </Link>
        <Link to="/settings"> <SettingsIcon /> </Link>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <AccountIcon />
        </button>
        {isOpen ? <Account /> : null}
      </nav>
    </header>
  );
};

export default Header;
