import React from "react";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./pagesStyle/menuStyle.css";

const Menu = () => {
  return (
    <>
      <Header />
      <div className="menuContainer">Menu</div>
      <Footer />
    </>
  );
};

export default Menu;
