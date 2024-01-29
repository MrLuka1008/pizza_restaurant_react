import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingIn from "./components/register/SingIn";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import BookingTabe from "./pages/BookingTabe";
import MainCheckOut from "./components/checkOut/MainCheckOut";
import YourOrders from "./components/orders/YourOrders";

const RoutesComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/BookingTable" element={<BookingTabe />} />
        <Route path="/checkout" element={<MainCheckOut />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/order" element={<YourOrders />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesComponent;
