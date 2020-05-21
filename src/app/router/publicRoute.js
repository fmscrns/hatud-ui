import React from "react";
import Cookies from "universal-cookie";
import { Route, Redirect } from "react-router-dom";


function PublicRoute({ ...rest }) {
    const cookies = new Cookies();

    if (cookies.get("hatud_auth_token")) {
        return (
            <Redirect to={"/home"} />
        );
    } else {
        return (
            <Route {...rest} />
        );
    }
}

export default PublicRoute;