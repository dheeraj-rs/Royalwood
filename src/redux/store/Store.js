import { configureStore } from "@reduxjs/toolkit";
import usersidebarToggle from "../Features/usersidebarToggle";
import searchProducts from "../Features/searchProducts";

export const store = configureStore({
  reducer: {
    sidebar: usersidebarToggle,
    search: searchProducts,
    
  },
});
