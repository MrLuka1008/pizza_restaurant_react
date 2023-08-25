import { Badge } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavLoginIcon from "../LoginAndRegister/NavLoginIcon";

const NavLinks = ({ flexDirectioncolumn, justifyContent, cartsLength }) => {
  let links = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/createpizza", name: "CreatePizza" },
  ];
  const location = useLocation();

  const isUserLoggedIn = !!localStorage.getItem("user_id");

  const activeLinkStyles = {
    borderBottom: "2px solid #e75b1e",
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          flex: "auto",
          justifyContent: `${justifyContent}`,
          flexDirection: `${flexDirectioncolumn}`,
          textAlign: "center",
          gap: "2rem",
        }}
      >
        {links.map((link) => (
          <li key={link.path} style={{ marginLeft: "0px", ...(location.pathname === link.path && activeLinkStyles) }}>
            <Link
              to={link.path}
              style={{
                color: "#e75b1e",
                fontSize: "20px",
                letterSpacing: "2px",
                fontWeight: "600",
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {isUserLoggedIn && (
          <li style={{ marginLeft: "0px", ...(location.pathname === "/cart" && activeLinkStyles) }}>
            <Link to="/cart" style={{ color: "#e75b1e", fontSize: "20px", letterSpacing: "2px", fontWeight: "600" }}>
              Cart
            </Link>
            <Badge
              badgeContent={cartsLength}
              sx={{
                "& .MuiBadge-badge": {
                  margin: "-20px -10px",
                  position: "absolute",
                  padding: "10px",
                  color: "white",
                  background: "#e75b1e",
                },
              }}
            />
          </li>
        )}
      </nav>

      <NavLoginIcon />
    </>
  );
};

export default NavLinks;
