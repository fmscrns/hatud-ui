import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from './NavbarComponent';
import Welcome from './Welcome';
import Signup from './Signup';
import SignupBuyer from './SignupBuyer';
import SignupSeller from './SignupSeller';
import Login from './Login';

class App extends Component {
    render() {
        return (
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <NavbarComponent />

                            <Welcome />
                        </Route>
                        <Route exact path="/signup">
                            <NavbarComponent />

                            <Signup />
                        </Route>
                        <Route path="/signup/buyer">
                            <NavbarComponent />

                            <SignupBuyer />
                        </Route>
                        <Route path="/signup/seller">
                            <NavbarComponent />
                            <SignupSeller />
                        </Route>
                        <Route path="/login">
                            <NavbarComponent />

                            <Login />
                        </Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}

export default App;
