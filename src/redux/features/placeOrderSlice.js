import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderType: "",
  pickUpTime: "",
  orderAddress: {
    streetaddress: "",
    city: "",
    fullAddress: "",
    phone: "",
  },
  tableBooking: {
    date: "",
    tableValue: "",
    timeValue: "",
  },
  cardInfo: {
    payMenth: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  },
  OrderList: [],
  id: "",
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
    setCardInfo: (state, action) => {
      const { payMenth, cardNumber, expiry, cvc } = action.payload;
      state.cardInfo = {
        payMenth,
        cardNumber,
        expiry,
        cvc,
      };
    },

    setOrderList: (state, action) => {
      state.OrderList = action.payload;
    },

    setUserId: (state) => {
      const nowUserId = localStorage.getItem("user_id");
      state.id = nowUserId;
    },

    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },

    setPickUpTime: (state, action) => {
      state.pickUpTime = action.payload;
    },

    setTableBooking: (state, action) => {
      const { date, tableValue, timeValue } = action.payload;
      state.tableBooking = {
        date,
        tableValue,
        timeValue,
      };
    },
  },
});

export const { setOrderAddress, setCardInfo, setOrderList, setUserId, setOrderType, setPickUpTime, setTableBooking } =
  placeOrderSlice.actions;
export const placeOrderReducer = placeOrderSlice.reducer;
