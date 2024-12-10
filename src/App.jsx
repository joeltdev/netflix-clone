import React from "react";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Player from "./pages/Player/player";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
