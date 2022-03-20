import React from "react";
import { useContext } from "react";
import MainContext from "../Context/MainContext";
const Account = () => {
  const name = useContext(MainContext);
  return (
    <div>
      <h1>PROFILE NAME</h1>
      <h2>{name}</h2>
      <h1>account pop up</h1>
    </div>
  );
};

export default Account;
