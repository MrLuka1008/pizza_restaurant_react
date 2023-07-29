import { Button } from "@mui/material";
import React from "react";

const OnClickBtn = ({ text, functionName }) => {
  return <Button onClick={functionName}>{text}</Button>;
};

export default OnClickBtn;
