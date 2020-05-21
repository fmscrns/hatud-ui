import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Cookies from "universal-cookie";
import {
   Container,
   Button,
   Row,
   Col,
} from "react-bootstrap";
import { createAlertMessage } from "./reducers/alert/alertMessageSlice";
import { setDisplayAlert } from "./reducers/alert/displayAlertSlice";
import { setLoggedIn } from "./reducers/loggedInSlice";
import FormFieldInput from "./utils/FormFieldInput";


function Login(props) {
   const dispatch = useDispatch();
   let history = useHistory();
   let nextPage = ""
   try {
      nextPage = props.location.state.from.pathname;
   } catch (TypeError) {
      nextPage = "/home"
   }

   return (
      <>
         <Formik
            initialValues = {{
               username_or_email: "",
               password: "",
            }}
            
            validationSchema = {Yup.object({
               username_or_email: Yup.string()
                  .required("Required"),
               password: Yup.string()
                  .required("Required"),
            })}
   
            onSubmit = {(values, { setSubmitting, resetForm }) => {
               setTimeout(() => {
                  const cookies = new Cookies();
                  const myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");
   
                  const requestOptions = {
                     method: "POST",
                     headers: myHeaders,
                     body: JSON.stringify(values, null, 2),
                     redirect: "follow"
                  };
   
                  fetch("http://127.0.0.1:5000/seller/login", requestOptions)
                  .then(response => response.json())
                  .then(result => {
                     if (result.status === "success") {
                        cookies.set("hatud_auth_token", result.Authorization, { path: "/" });
                        dispatch(setLoggedIn(true));
                        history.push(nextPage)
                     } else {
                        resetForm();
                        setSubmitting(false);
                        dispatch(createAlertMessage(result.message));
                        dispatch(setDisplayAlert(true));
                     }
                  })
                  .catch((error) => {
                     resetForm();
                     setSubmitting(false);
                     dispatch(createAlertMessage(error));
                     dispatch(setDisplayAlert(true));
                  });
               }, 3000);
            }}
         >
            {props => (
               <>
                  <Container className="welcome-action-cont">
                     <Form>
                        <Container>
                           <h1>Log in</h1>
                        </Container>
                        <br />
                        <FormFieldInput label="Username or Email" name="username_or_email" type="text" placeholder="Username or Email" />
                        <FormFieldInput label="Password" name="password" type="password" placeholder="Password" />
                        <br />
                        <Row>
                           <Col>
                              <Container style={{ display: "flex", justifyContent: "flex-start" }}>
                                 New to Hatud?&nbsp;<Link to="/signup">Sign up here</Link>
                              </Container>
                           </Col>
                           <Col>
                              <Container style={{ display: "flex", justifyContent: "flex-end" }}>
                                 <Button variant="primary" type="submit">{props.isSubmitting ? "Loading..." : "Log in"}</Button>
                              </Container>
                           </Col>
                        </Row>
                     </Form>
                  </Container>
               </>
               )
            }
         </Formik>
      </>
   );
}

export default Login;
