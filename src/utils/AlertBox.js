import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "react-bootstrap";
import { selectAlertMessage } from "../reducers/alert/alertMessageSlice";
import { setDisplayAlert, selectDisplayAlert } from "../reducers/alert/displayAlertSlice";

function AlertBox () {
   const alertMessage = useSelector(selectAlertMessage);
   const displayAlert = useSelector(selectDisplayAlert);
   const dispatch = useDispatch();

   setTimeout(() => {
      dispatch(setDisplayAlert(false));
   }, 3000)

   return (
      <Alert className={displayAlert ? "alert-box fade-appear fade-appear-active" : "alert-box fade-exit fade-exit-active"} variant="danger" onClose={() => dispatch(setDisplayAlert(false))} dismissible> 
         {alertMessage}
      </Alert>
   );
}

export default AlertBox;