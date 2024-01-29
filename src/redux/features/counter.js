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
    setCartsZero: (state) => {
      state.value = 0;
    },
  },
});

export const { setCartsLength, setCartsZero } = cartsLengthSlice.actions;

export const cartLengthReducer = cartsLengthSlice.reducer;
