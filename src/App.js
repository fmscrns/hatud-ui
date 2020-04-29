import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Cookies from 'universal-cookie';
import Welcome from './Welcome';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Account from './Account';
import Logout from './Logout';


function App () {
    return (
        <main>
            <Router>
                <Switch>
                    <PublicRoute exact path="/" render={props => <Welcome {...props} />} />
                    <PublicRoute path="/signup" render={props => <Signup {...props} />} />
                    <PublicRoute path="/login" render={props => <Login {...props} />} />
                    {/* <Route path="/login/:next" render={props => <Login {...props} />} /> */}
                    <PrivateRoute path="/home">
                        <Home />
                    </PrivateRoute>
                    <PrivateRoute path="/account">
                        <Account />
                    </PrivateRoute>
                    <PrivateRoute path="/logout">
                        <Logout />
                    </PrivateRoute>
                </Switch>
            </Router>
        </main>
    )
}

function PublicRoute({ ...rest }) {
        const cookies = new Cookies();

        if (cookies.get('hatud_auth_token')) {
            return (
                <Redirect to={"/home"} />
            );
        } else {
            return (
                <Route {...rest} />
            );
        }
}

function PrivateRoute({ children, ...rest }) {
    const cookies = new Cookies();

    return (
        <Route {...rest} render={({ location }) => cookies.get('hatud_auth_token') ? (children) : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)} />
    );
}

export default App;
