import React from "react";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./pagesStyle/homeStyle.css";
import Menu from "./Menu";
import HomeContent from "../components/home/HomeContent";

const Home = () => {
  return (
    <>
      <Header />
      <HomeContent />
      <Footer />
    </>
  );
};

export default Home;
