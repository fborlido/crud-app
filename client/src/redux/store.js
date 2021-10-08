import { configureStore } from "@reduxjs/toolkit";
import objectReducer from "../features/objectSlice";

export const store = configureStore({
  reducer: {
    object: objectReducer,
  },
});
