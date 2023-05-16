import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    titles: '',
    selectedProduct:null,
    relateditems:[],
    products:[],
};

const searchProducts = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {
    titleName: (state, action) => {
      state.titles = action.payload; 
    },
    related: (state, action) => {
      state.relateditems = action.payload; 
    },
   
    selectItem: (state,action) => {
      state.selectedProduct = action.payload;
    },
    ApiData: (state,action) => {
      state.products = action.payload;
    },
  },
});

export const { titleName, selectItem ,related ,ApiData} = searchProducts.actions;

export default searchProducts.reducer;
