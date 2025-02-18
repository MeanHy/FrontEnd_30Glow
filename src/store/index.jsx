import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./reducers/shoppingCartSlice";

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});

export default store;
