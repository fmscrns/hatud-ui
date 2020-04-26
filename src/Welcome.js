import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Welcome() {
   return (
      <Container fluid>
         <Row>
            <Col>
            </Col>
            <Col>
               <Container>
                     <div className="welcome-cont mx-auto justify-content-md-center">
                        <Row className="m-3" fluid>
                           <Col>
                                 <h1>Register for easy food take out!</h1>
                           </Col>
                        </Row>
                        <Row className="m-3" fluid>
                           <Col>
                                 <Button href="/signup" variant="primary" block>Sign up</Button>
                           </Col>
                        </Row>
                        <Row className="m-3" fluid>
                           <Col>
                                 <Button href="/login" variant="outline-primary" block>Log in</Button>
                           </Col>
                        </Row>
                     </div>
               </Container>
            </Col>
         </Row>
      </Container>
   );
}

export default Welcome