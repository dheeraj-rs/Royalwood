import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartlenght: 0,
  favlenght: 0,
  reloadlenght:null,
};

const calcproducts = createSlice({
  name: "calcproducts",
  initialState,
  reducers: {
    CartLenght: (state,action) => {
      state.cartlenght =action.payload;
    },
    Favlenght: (state,action) => {
      state.favlenght = action.payload;
    },
    Reloadlenght: (state,action) => {
      state.reloadlenght = action.payload;
    },

  },
});

export const {
  CartLenght,
  Favlenght,
  Reloadlenght,
  
} = calcproducts.actions;

export default calcproducts.reducer;
