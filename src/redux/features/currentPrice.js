import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "currentPrice",
  initialState: {
    currentfee: 0,
  },
  reducers: {
    setCurrentPrice: (state, action) => {
      state.currentfee = action.payload; // Update the correct state property
    },
  },
});

export const { setCurrentPrice } = priceSlice.actions;

export const priceReducer = priceSlice.reducer;
