import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../../entites/product";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
