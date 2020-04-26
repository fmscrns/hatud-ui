import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Signup() {
   return (
         <Container>
            <div className="welcome-cont mx-auto justify-content-md-center">
               <Row className="m-3" fluid>
                  <Col>
                        <h1>Are you registering as a buyer or a seller?</h1>
                  </Col>
               </Row>
               <Row className="m-3" fluid>
                  <Col>
                        <Button href="/signup/buyer" variant="primary" block>Buyer</Button>
                  </Col>
               </Row>
               <Row className="m-3" fluid>
                  <Col>
                        <Button href="/signup/seller" variant="outline-primary" block>Seller</Button>
                  </Col>
               </Row>
            </div>
         </Container>
   );
}

export default Signup;