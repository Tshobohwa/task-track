import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  linksListDisplayed: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavMenu: (state) => {
      let { linksListDisplayed } = state;
      linksListDisplayed = !linksListDisplayed;
      return { ...state, linksListDisplayed };
    },
  },
});

export const { toggleNavMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
