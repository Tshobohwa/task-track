import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { darkMode } = state;
      return { ...state, darkMode: !darkMode };
    },
  },
});

export const { toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
