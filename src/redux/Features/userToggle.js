import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarState: false,
  adminEdit: false,
  Loginpage: false,
  // editpage:false,
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
} = usersidebarToggle.actions;

export default usersidebarToggle.reducer;
