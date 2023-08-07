import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import NavLoginIcon from "../LoginAndRegister/NavLoginIcon";

export const Header = () => {
  const isUserLogginIn = !!localStorage.getItem("user_id"); // Convert to a boolean
  const location = useLocation();

  let links = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/createpizza", name: "CreatePizza" },
  ];

  if (isUserLogginIn) {
    links.push({ path: "/cart", name: "Cart" });
  }

  const liStyles = {
    marginLeft: "20px",
  };

  const activeLinkStyles = {
    borderBottom: "2px solid #e75b1e",
  };

  return (
    <div
      style={{
        height: "18vh",
        display: "flex",
        margin: "auto",
        alignItems: "center",
        background: "#1f1f1f",
      }}
    >
      <Logo style={{ width: "200px", height: "100px" }} />
      <nav style={{ display: "flex", flex: "auto", justifyContent: "center" }}>
        {links.map((link) => (
          <li key={link.path} style={{ ...liStyles, ...(location.pathname === link.path && activeLinkStyles) }}>
            <Link
              to={link.path}
              style={{
                color: "#e75b1e",
                fontSize: " 20px",
                letterSpacing: "2px",
                fontWeight: "600",
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </nav>

      <NavLoginIcon />
    </div>
  );
};
