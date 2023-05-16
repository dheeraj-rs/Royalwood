import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarState: false,
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
  },
});

export const { setSidebar, toggleon, toggleoff } = usersidebarToggle.actions;

export default usersidebarToggle.reducer;
