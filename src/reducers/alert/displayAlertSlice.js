import { createSlice } from "@reduxjs/toolkit";


let bool = false;
export const displayAlertSlice = createSlice({
  name: "displayAlert",
  initialState: {
    value: bool,
  },
  reducers: {
    setDisplayAlert: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDisplayAlert } = displayAlertSlice.actions;

export const selectDisplayAlert = state => state.displayAlert.value;

export default displayAlertSlice.reducer;
