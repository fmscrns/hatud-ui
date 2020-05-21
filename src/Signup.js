import React from "react";
import {
   useHistory,
   Link,
} from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Cookies from "universal-cookie";
import {
   Container,
   Row,
   Col,
   Button
} from "react-bootstrap";
import FormFieldInput from "./utils/FormFieldInput";


function Signup() {
   let history = useHistory();

   return (
      <>
         <Formik
            initialValues = {{
               first_name: "",
               last_name: "",
               address: "",
               contact_no: "",
               username: "",
               email: "",
               password: "",
               confirm_password: "",
            }}
            
            validationSchema = {Yup.object({
               first_name: Yup.string()
                  .min(2, "Must be at least 2 characters")
                  .max(15, " Must be 15 characters or less")
                  .required("Required"),
               last_name: Yup.string()
                  .min(2, "Must be at least 2 characters")
                  .max(15, " Must be 15 characters or less")
                  .required("Required"),
               address: Yup.string()
                  .required("Required"),
               contact_no: Yup.string()
                  .min(11, "Must be 11 characters")
                  .max(11, " Must be 11 characters")
                  .required("Required"),
               username: Yup.string()
                  .min(2, "Must be at least 2 characters")
                  .max(15, " Must be 15 characters or less")
                  .required("Required"),
               email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
               password: Yup.string()
                  .required("Required"),
               confirm_password: Yup.string()
                  .test("passwords-match", "Passwords must match", function(value) {
                     return this.parent.password === value;
                  })
                  .required("Required")
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
                  };

                  fetch("http://127.0.0.1:5000/seller/", requestOptions)
                  .then(response => response.json())
                  .then(result => {
                     if (result.status === "success") {
                        cookies.set("hatud_auth_token", result.Authorization, { path: "/" });
                        history.push("/home")
                     } else {
                        resetForm();
                        setSubmitting(false);
                        alert(result.message);
                     }
                  })
                  .catch((error) => {
                     alert(error);
                  });   
               }, 3000)
            }}
         >
            {props => (
               <Container className="welcome-action-cont">
                  <Form>
                     <Container>
                        <h1>Sign up</h1>
                     </Container>
                     <br />
                     <Row>
                        <Col>
                           <FormFieldInput label="First Name" name="first_name" type="text" placeholder="First Name" />
                        </Col>
                        <Col>
                           <FormFieldInput label="Last Name" name="last_name" type="text" placeholder="Last Name" />
                        </Col>
                     </Row>
                     <FormFieldInput label="Contact Number" name="contact_no" type="text" placeholder="Contact Number" />
                     <FormFieldInput label="Address" name="address" type="text" placeholder="Address" />
                     <FormFieldInput label="Username" name="username" type="text" placeholder="Username" />
                     <FormFieldInput label="Email" name="email" type="email" placeholder="Email" />
                     <FormFieldInput label="Password" name="password" type="password" placeholder="Password" />
                     <FormFieldInput label="Confirm Password" name="confirm_password" type="password" placeholder="Confirm Password" />
                     <br />
                     <Row>
                        <Col>
                           <Container style={{ display: "flex", justifyContent: "flex-start" }}>
                              Already have an account?&nbsp;<Link to="/login">Log in here</Link>
                           </Container>
                        </Col>
                        <Col>
                           <Container style={{ display: "flex", justifyContent: "flex-end" }}>
                              <Button variant="primary" type="submit">{props.isSubmitting ? "Loading..." : "Signup"}</Button>
                           </Container>
                        </Col>
                     </Row>
                  </Form>
               </Container>
               )
            }
         </Formik>
      </>
   );
}

export default Signup;