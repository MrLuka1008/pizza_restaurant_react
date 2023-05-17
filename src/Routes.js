import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CreateYourPizza from "./pages/CreateYourPizza";
import Card from "./pages/Card";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/createpizza" element={<CreateYourPizza />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
