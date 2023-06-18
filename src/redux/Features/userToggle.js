import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarState: false,
  adminEdit: false,
  Loginpage: false,
  // editpage:false,
  mouseleavesearch:true,
};

const usersidebarToggle = createSlice({
  name: "togglesidebar",
  initialState,
  reducers: {
    toggleon: (state) => {
      state.sidebarState = true;
    },
    toggleoff: (state) => {
      state.sidebarState = false;
    },
    adminEditlistOn: (state) => {
      state.adminEdit = true;
    },
    adminEditlistOff: (state) => {
      state.adminEdit = false;
    },
    LoginpageOn: (state) => {
      state.Loginpage = true;
    },
    LoginpageOff: (state) => {
      state.Loginpage = false;
    },
    Mouseleavesearch: (state,action) => {
      state.mouseleavesearch = action.payload;
    },
  },
});

export const {
  setSidebar,
  toggleon,
  toggleoff,
  adminEditlistOn,
  adminEditlistOff,
  LoginpageOn,
  LoginpageOff,
  Mouseleavesearch,
  
} = usersidebarToggle.actions;

export default usersidebarToggle.reducer;
