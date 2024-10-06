import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/loginslice";

const combinedreducer = combineReducers({
  userData: LoginSlice,
});
export const store = configureStore({
  reducer: {
    data: combinedreducer,
  },
});
