import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Logout from "./Logout";
import NavigationBar from "./utils/NavigationBar";
import PublicRoute from "./app/router/publicRoute";
import PrivateRoute from "./app/router/privateRoute";
import AlertBox from "./utils/AlertBox";
import Account from "./Account";


class App extends Component {    
    render() {
        return (
            <>
                <Router>
                    <NavigationBar />

                    <Switch>
                        <PublicRoute exact path="/" render={props => <Welcome {...props} />} />
                        <PublicRoute path="/signup" render={props => <Signup {...props} />} />
                        <PublicRoute path="/login" render={props => <Login {...props} />} />
                        
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

                    <AlertBox />
                </Router>
            </>
        )
    }
}

export default App;