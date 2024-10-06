import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: null,

  reducers: {
    addUserData(state, action) {
      return action.payload;
    },
  },
});

export const { addUserData } = loginSlice.actions;
export default loginSlice.reducer;
