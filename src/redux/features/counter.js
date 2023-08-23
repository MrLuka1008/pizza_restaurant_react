import { createSlice } from "@reduxjs/toolkit";

const cartsLengthSlice = createSlice({
  name: "cartsLength",
  initialState: {
    value: 0,
  },
  reducers: {
    setCartsLength: (state) => {
      const cartItems = localStorage.getItem("cartMenu");
      if (cartItems) {
        const cartItemsObj = JSON.parse(cartItems);
        state.value = Object.keys(cartItemsObj).length;
      }
    },
  },
});

export const { setCartsLength } = cartsLengthSlice.actions;

export const cartLengthReducer = cartsLengthSlice.reducer;
