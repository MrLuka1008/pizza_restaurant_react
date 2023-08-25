import { createSlice } from "@reduxjs/toolkit";

const cartsLengthSlice = createSlice({
  name: "cartsLength",
  initialState: {
    value: 0,
  },
  reducers: {
    setCartsLength: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCartsLength } = cartsLengthSlice.actions;

export const cartLengthReducer = cartsLengthSlice.reducer;
