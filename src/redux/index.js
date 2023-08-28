import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { priceReducer } from "./features/currentPrice";
import { cartLengthReducer } from "./features/counter";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useSelector } from "react-redux";
import inCartSlice from "./features/inCartSlice";
import { placeOrderReducer } from "./features/placeOrderSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentPrice", "inCart", "cartLength"],
};

const rootReducer = combineReducers({
  currentPrice: priceReducer,
  cartLength: cartLengthReducer,
  inCart: inCartSlice,
  placeOrder: placeOrderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export { setCartsLength } from "./features/counter";
export { setCurrentPrice } from "./features/currentPrice";
export { addItemToCart } from "./features/inCartSlice";
export { setOrderAddress } from "./features/placeOrderSlice";

export const useInCart = () => useSelector((state) => state.inCart);
export const useCartLength = () => useSelector((state) => state.cartLength.value);
export const useCurrentPrice = () => useSelector((state) => state.currentPrice.currentfee);
export const useOrderInfo = () => useSelector((state) => state.placeOrder);
