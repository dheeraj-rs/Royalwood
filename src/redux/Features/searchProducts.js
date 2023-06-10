import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  titles: "",
  selectedProduct: null,
  relateditems: [],
  products: [],
  categorie: [],
  selectedcategorie: [],
  addcart: [],
  addfav: [],
};

// Load state from localStorage if available
const storedState = localStorage.getItem("searchProductsState");
const persistedState = storedState ? JSON.parse(storedState) : initialState;

const searchProducts = createSlice({
  name: "searchProducts",
  initialState: persistedState, // Use persisted state as initial state
  reducers: {
    titleName: (state, action) => {
      state.titles = action.payload;
    },
    related: (state, action) => {
      state.relateditems = action.payload;
    },
    selectItem: (state, action) => {
      state.selectedProduct = action.payload;
    },
    ApiData: (state, action) => {
      state.products = action.payload;
    },
    Categorie: (state, action) => {
      state.categorie = action.payload;
    },
    Selectedcategorie: (state, action) => {
      state.selectedcategorie = action.payload;
    },
    Addcart: (state, action) => {
      const updatedCart = [...state.addcart, action.payload];
      state.addcart = updatedCart;
      // saveStateToLocalStorage(state); // Save updated state to localStorage
    },
    Removecart: (state, action) => {
      const itemId = action.payload;
      const updatedCart = state.addcart.filter(item => item.title !== itemId.title);
      state.addcart = updatedCart;
      // saveStateToLocalStorage(state); // Save updated state to localStorage
    },
    Removefav: (state, action) => {
      const itemId = action.payload;
      const updatedFav = state.addfav.filter(item => item.title !== itemId.title);
      state.addfav = updatedFav;
      saveStateToLocalStorage(state); // Save updated state to localStorage
    },
    Addfav: (state, action) => {
      const updatedFav = [...state.addfav, action.payload];
      state.addfav = updatedFav;
      saveStateToLocalStorage(state); // Save updated state to localStorage
    },
  },
});

// Save the state to localStorage
const saveStateToLocalStorage = (state) => {
  localStorage.setItem("searchProductsState", JSON.stringify(state));
};

export const {
  titleName,
  selectItem,
  related,
  ApiData,
  Categorie,
  Selectedcategorie,
  Addcart,
  Removecart,
  Removefav,
  Addfav,
} = searchProducts.actions;

export default searchProducts.reducer;
