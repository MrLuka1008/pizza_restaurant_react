// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const cartsLengthSlice = createSlice({
//   name: "cartsLength",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     setCartsLength: (state) => {
//       const cartItems = localStorage.getItem("cartMenu");
//       if (cartItems) {
//         const cartItemsObj = JSON.parse(cartItems);
//         state.value = Object.keys(cartItemsObj).length;
//       }
//     },
//   },
// });

// const priceSlice = createSlice({
//   name: "currentPrice",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     setCurrentPrice: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { setCurrentPrice } = priceSlice.actions;

// export const { setCartsLength } = cartsLengthSlice.actions;

// export const store = configureStore({
//   reducer: {
//     cartsLength: cartsLengthSlice.reducer,
//     currentPrice: priceSlice.reducer,
//   },
// });
