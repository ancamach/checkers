import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import StartGame from "./components/StartGame";
import CheckersBoard from "./components/CheckersBoard";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/game_board" element={<CheckersBoard />} />
      </Routes>
    </div>
  );
}

export default App;
