import React from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

function SignupBuyer() {
   return (
      <Container className="welcome-action-cont">
         <Form>
            <h1 className="welcome-action-cont-title">Buyer Sign up</h1>
            <Form.Row>
               <Col>
                  <Form.Group controlId="formGroupFirstName">
                     <Form.Label>First Name</Form.Label>
                     <Form.Control placeholder="John" />
                  </Form.Group>
               </Col>
               <Col>
                  <Form.Group controlId="formGroupLastName">
                     <Form.Label>Last Name</Form.Label>
                     <Form.Control placeholder="Doe" />
                  </Form.Group>
               </Col>
            </Form.Row>
            <Form.Group controlId="formGroupContactNo">
               <Form.Label>Contact Number</Form.Label>
               <Form.Control placeholder="09555106422" />
            </Form.Group>
            <Form.Group controlId="formGroupAddress">
               <Form.Label>Address</Form.Label>
               <Form.Control placeholder="G.T. Lluch Street, Doña Juan Subdivision, Pala-o, Iligan City" />
            </Form.Group>
            <Form.Group controlId="formGroupUsername">
               <Form.Label>Username</Form.Label>
               <Form.Control placeholder="johndoe" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="johndoe@demo.com" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" />
            </Form.Group>
            <Form.Group controlId="formGroupConfirmPassword">
               <Form.Label>Confirm Password</Form.Label>
               <Form.Control type="password" />
            </Form.Group>
         </Form>
      </Container>
   );
}

export default SignupBuyer