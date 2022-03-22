import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./Context/MainContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./css/main.css"
import "./css/start_workout.css"

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
