import { createSlice } from "@reduxjs/toolkit";


let bool = false;
export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: {
    value: bool,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLoggedIn } = loggedInSlice.actions;

export const selectLoggedIn = state => state.loggedIn.value;

export default loggedInSlice.reducer;
