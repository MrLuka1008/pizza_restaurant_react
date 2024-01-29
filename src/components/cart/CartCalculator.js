import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Typography, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomTypography = styled(Typography)(() => ({
  padding: "20px 30px",
  fontSize: "18px",
}));

const CustomButton = styled(
  Button,
  Link
)(() => ({
  padding: "10px 20px",
  width: "100%",
  fontSize: "16px",
  border: "2px solid #black",
  background: "#e75b1e",
  color: "#fff",
  "&:hover": {
    color: "white",
    background: "#e75b1e",
    boxShadow: "0px 0px 50px -4px #e75b1e",
  },
}));

const CartCalculator = ({ totalPrice }) => {
  // const [discountpercent, setDiscountPercent] = useState(0);
  // const [newPRice, setNewPrice] = useState(0);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setNewPrice(totalPrice - totalPrice * (discountpercent / 100));
  // }, [totalPrice, discountpercent]);

  const handleContinueShopping = () => {
    window.scrollTo(0, 0);
    navigate("/menu");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: " 16px",
      }}
    >
      <Box sx={{ display: "flex", gap: "50px", padding: "20px", flexWrap: "wrap" }}>
        <Box>
          <CustomTypography>Subtotal ${totalPrice}</CustomTypography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          // flexDirection: "column",
          width: "40%",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <CustomButton>
          <Link to={"/checkout"}>
            <Typography variant="button" sx={{ display: "flex", color: "white" }}>
              Checkout
              <ShoppingCartOutlined />
            </Typography>
          </Link>
        </CustomButton>

        <CustomButton onClick={handleContinueShopping} sx={{ background: "#fff", color: "#e75b1e" }}>
          <Box variant="button" sx={{ display: "flex", alignItems: "center", width: "300px" }}>
            <Typography sx={{ flexShrink: "0" }}>Continue Shopping</Typography>
            <ArrowForwardIcon />
          </Box>
        </CustomButton>
      </Box>
    </Box>
  );
};

export default CartCalculator;
