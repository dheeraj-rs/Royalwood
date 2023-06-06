import { configureStore } from "@reduxjs/toolkit";
import searchProducts from "../Features/searchProducts";
import userToggle from "../Features/userToggle";

export const store = configureStore({
  reducer: {
    sidebar: userToggle,
    search: searchProducts,
  },
});
