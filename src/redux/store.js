import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settings/settingsSlice";
import navbarReducer from "./navbar/navbarSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    navbar: navbarReducer,
  },
});

export default store;
