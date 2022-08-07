import { configureStore } from "@reduxjs/toolkit";
import generalReducers from "../features/generalSlice";

export const store = configureStore({
  reducer: {
    general: generalReducers,
  },
});
