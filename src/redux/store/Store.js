import { configureStore } from "@reduxjs/toolkit";
import searchProducts from "../Features/searchProducts";
import userToggle from "../Features/userToggle";
import calcproducts from "../Features/calcproducts";

export const store = configureStore({
  reducer: {
    sidebar: userToggle,
    search: searchProducts,
    calc:calcproducts,
  },
});
