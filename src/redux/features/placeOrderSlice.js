import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderAddress: {
    streetaddress: "",
    city: "",
    fullAddress: "",
    phone: "",
  },
};

const placeOrderSlice = createSlice({
  name: "placeOrder",
  initialState,
  reducers: {
    setOrderAddress: (state, action) => {
      const { streetaddress, city, fullAddress, phone } = action.payload;
      state.orderAddress = {
        streetaddress,
        city,
        fullAddress,
        phone,
      };
    },
  },
});

export const { setOrderAddress } = placeOrderSlice.actions;
export const placeOrderReducer = placeOrderSlice.reducer;
