import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counter/counterSlice";
import alertMessageReducer from "../reducers/alert/alertMessageSlice";
import displayAlertReducer from "../reducers/alert/displayAlertSlice";
import loggedInReducer from "../reducers/loggedInSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    alertMessage: alertMessageReducer,
    displayAlert: displayAlertReducer,
    loggedIn: loggedInReducer,
  },
});
