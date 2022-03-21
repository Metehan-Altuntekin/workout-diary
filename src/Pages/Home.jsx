import React from "react";
import { useContext } from "react";
import MainContext from "../Context/MainContext";
const Home = () => {
  const name = useContext(MainContext);

  return <div>WELCOME </div>;
};

export default Home;
