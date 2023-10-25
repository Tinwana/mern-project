import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slides/userSlide";
import loadingReducer from "./slides/loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    user: userReducer,
  },
});
