import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../reducers/loggedInSlice";
// import Cookies from "universal-cookie";


function NavigationBar() {
    const loggedIn = useSelector(selectLoggedIn);
    // const cookies = new Cookies();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                Hatud
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* { cookies.get("hatud_auth_token") && */}
                    { loggedIn &&
                        <>
                            <Nav.Link href="home">
                                Home
                            </Nav.Link>
                            <Nav.Link href="account">
                                Account
                            </Nav.Link>
                            <Nav.Link href="logout">
                                Log out
                            </Nav.Link>
                        </>
                    }
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar
