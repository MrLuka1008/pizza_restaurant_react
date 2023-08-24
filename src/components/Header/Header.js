import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCartsLength } from "../../redux/features/counter";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./NavLinks";

export const Header = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const dispatch = useDispatch();
  const [open, setState] = useState(false);
  const [countCartItems, setCountCartItems] = useState(0);

  // const cartsLength = useSelector((state) => state.cartLength.value); // Corrected state name

  useEffect(() => {
    dispatch(setCartsLength());
  }, [dispatch]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState(open);
  };

  useEffect(() => {
    const cartMenu = localStorage.getItem("cartMenu");
    if (cartMenu) {
      const parsedCartMenu = JSON.parse(cartMenu);
      setCountCartItems(parsedCartMenu.length);
    }
  }, []);

  const mobileContainerStyles = {
    background: "#1f1f1f",
    width: "100%",
    height: "18vh",
    display: "flex",
    margin: "auto",
    alignItems: "center",
  };

  const nonMobileContainerStyles = {
    height: "18vh",
    display: "flex",
    margin: "auto",
    alignItems: "center",
    background: "#1f1f1f",
  };

  return (
    <div style={isMobile ? mobileContainerStyles : nonMobileContainerStyles}>
      <Logo style={{ width: "200px", height: "100px", margin: isMobile ? "auto" : "0" }} />
      {isMobile ? (
        <Container sx={{ position: "absolute" }}>
          <Toolbar>
            <IconButton
              edge="start"
              // color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{ position: "absolute", right: "20px" }}
            >
              <MenuIcon sx={{ fill: "#e75b1e", fontSize: "48px" }} />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  p: "35px",
                  height: 1,
                  backgroundColor: "#1f1f1f",
                  alignItems: "center",
                  gap: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <IconButton onClick={toggleDrawer(false)} sx={{ mb: 5 }} edge="end" aria-label="close drawer">
                  <CloseIcon sx={{ fill: "#e75b1e", fontSize: "48px" }} />
                </IconButton>

                <NavLinks flexDirectioncolumn="column" justifyContent="space-around" />
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      ) : (
        <NavLinks justifyContent="center" />
      )}
    </div>
  );
};
