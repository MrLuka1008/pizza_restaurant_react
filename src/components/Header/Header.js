import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import NavLoginIcon from "../LoginAndRegister/NavLoginIcon";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCartsLength } from "../../features/counter";

export const Header = () => {
  const cartsLength = useSelector((state) => state.cartsLength);

  const dispatch = useDispatch();

  const isUserLogginIn = !!localStorage.getItem("user_id"); // Convert to a boolean
  const location = useLocation();
  const [countCartItems, setCountCartItems] = useState(0);

  useEffect(() => {
    const cartMenu = localStorage.getItem("cartMenu");
    if (cartMenu) {
      const parsedCartMenu = JSON.parse(cartMenu);
      setCountCartItems(parsedCartMenu.length);
    }
  }, []); // Empty dependency array to run the effect only once
  console.log(countCartItems);

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

  dispatch(setCartsLength());

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

        <Badge badgeContent={cartsLength.value} color="primary"></Badge>
      </nav>

      <NavLoginIcon />
    </div>
  );
};
