import React from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "./reducers/loggedInSlice";


function Logout() {
   const cookies = new Cookies();
   const dispatch = useDispatch();

   cookies.remove("hatud_auth_token");
   dispatch(setLoggedIn(false));

   return <Redirect to="login" />;
}

export default Logout;