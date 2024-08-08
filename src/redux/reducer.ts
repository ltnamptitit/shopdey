import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./slice/authSlice";

export const rootReducer1 = combineReducers({
  auth: reducer,
});
