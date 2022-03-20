import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Account from "./Account";

const Header = ({ isOpen, setIsOpen }) => {
  console.log(isOpen);
  return (
    <header>
      <h1>Welcome Larry</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/workout">Workout</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/settings">Settings</Link>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          PROFILE PAGE
        </button>
        {isOpen ? <Account /> : null}
      </nav>
    </header>
  );
};

export default Header;
