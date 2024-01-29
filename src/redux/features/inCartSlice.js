import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const inCartSlice = createSlice({
  name: "inCart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      const itemToRemove = action.payload;
      return state.filter((item) => item.name !== itemToRemove.name);
    },
    changeSizeItemInCart: (state, action) => {
      const { name, size: changePizzaSize } = action.payload;
      return state.map((item) => {
        if (item.name === name) {
          return { ...item, size: changePizzaSize };
        }
        return item;
      });
    },

    changeItemQuantity: (state, action) => {
      const { name, quantity: newQuantity } = action.payload;
      return state.map((item) => {
        if (item.name === name) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    },

    clearCart: (state) => {
      return [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, changeSizeItemInCart, changeItemQuantity, clearCart } =
  inCartSlice.actions;
export default inCartSlice.reducer;
