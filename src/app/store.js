import { configureStore } from "@reduxjs/toolkit";
import filterManagementReducer from "../features/Filter Management/FilterManagementSlice";

export const store = configureStore({
  reducer: {
    filterManagement:filterManagementReducer,
  },
});