import { createSlice } from "@reduxjs/toolkit";


export const alertMessageSlice = createSlice({
  name: "alertMessage",
  initialState: {
    value: "",
  },
  reducers: {
    createAlertMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { createAlertMessage } = alertMessageSlice.actions;

export const selectAlertMessage = state => state.alertMessage.value;

export default alertMessageSlice.reducer;
