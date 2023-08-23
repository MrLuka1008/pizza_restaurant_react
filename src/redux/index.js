import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { priceReducer } from "./features/currentPrice";
import { cartLengthReducer } from "./features/counter";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useSelector } from "react-redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentPrice"],
};

const rootReducer = combineReducers({
  //   price: priceReducer,
  currentPrice: priceReducer,
  cartLength: cartLengthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export { setCartsLength } from "./features/counter";
export { setCurrentPrice } from "./features/currentPrice"; // Corrected export

export const useCartLength = () => useSelector((state) => state.cartLength.value);
export const useCurrentPrice = () => useSelector((state) => state.currentPrice.currentfee); // Corrected selector
