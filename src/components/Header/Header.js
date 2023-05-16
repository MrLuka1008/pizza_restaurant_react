import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div className="headerContainer">
      <Logo className="logo" />
      <nav>
        <ul>
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" activeClassName="active">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/cart" activeClassName="active">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/checkout" activeClassName="active">
              Checkout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
