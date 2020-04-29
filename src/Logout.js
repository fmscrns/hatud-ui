import React from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";

export default function Logout() {
   const cookie = new Cookies();

   cookie.remove("hatud_auth_token");
   return <Redirect to="/login" />
}