import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./header.css";
import NavLoginIcon from "../LoginAndRegister/NavLoginIcon";

export const Header = () => {
  return (
    <div className="headerContainer">
      <Logo className="logo" />
      <nav>
        <li>
          <Link to="/" className="NavLinks">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="NavLinks">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/createpizza" className="NavLinks">
            CreatePizza
          </Link>
        </li>
        <li>
          <Link to="/card" className="NavLinks">
            Card
          </Link>
        </li>
      </nav>

      <NavLoginIcon />
    </div>
  );
};
