import React from "react";
import Cookies from "universal-cookie";
import { Route, Redirect } from "react-router-dom";


function PrivateRoute({ children, ...rest }) {
    const cookies = new Cookies();

    return (
        <Route {...rest} render={({ location }) => (cookies.get("hatud_auth_token")) ? (children) : (<Redirect to={{pathname: "/login", state: {from: location}}} />)} />
    );
}

export default PrivateRoute;