import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Register from "./pages/Register";
import SingIn from "./components/register/SingIn";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

const RoutesComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesComponent;
