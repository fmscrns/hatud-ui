import React from "react";
import { useHistory } from "react-router-dom";
import {
   Formik,
   Form,
   useField,
} from 'formik';
import * as Yup from 'yup';
import Cookies from 'universal-cookie';
import {
   Container,
   Button,
   Badge,
   FormControl,
   FormCheck,
} from 'react-bootstrap';
import NavbarComponent from "./NavbarComponent";


export default function Login(props) {
   let history = useHistory();
   let nextPage = ""

   try {
      nextPage = props.location.state.from.pathname;
   } catch (TypeError) {
      nextPage = "/home"
   }

   return (
      <>
         <NavbarComponent />
         <Formik
            initialValues = {{
               username_or_email: '',
               password: '',
               remember: false,
            }}
            
            validationSchema = {Yup.object({
               username_or_email: Yup.string()
                  .required('Required'),
               password: Yup.string()
                  .required('Required'),
               remember: Yup.boolean(),
            })}
   
            onSubmit = {(values, { setSubmitting, resetForm }) => {
               setTimeout(() => {
                  const cookies = new Cookies();
                  const myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");
   
                  const requestOptions = {
                     method: 'POST',
                     headers: myHeaders,
                     body: JSON.stringify(values, null, 2),
                  };
   
                  fetch("http://127.0.0.1:5000/seller/login", requestOptions)
                  .then(response => response.json())
                  .then(result => {
                     if (result.status === "success") {
                        cookies.set('hatud_auth_token', result.Authorization, { path: '/' });
                        history.push(nextPage)
                     } else {
                        alert(result.message)
                        resetForm();
                        setSubmitting(false);
                     }
                  });   
               }, 3000)
            }}
         >
            {props => (
               <Container className="welcome-action-cont">
                  <Form>
                     <Container>
                        <h1>Log in</h1>
                     </Container>
                     <br />
                     <FormFieldInput label="Username or Email" name="username_or_email" type="text" placeholder="Username or Email" />
                     <FormFieldInput label="Password" name="password" type="password" placeholder="Password" />
                     <FormFieldCheckbox label="Remember me" name="remember" type="checkbox" />
                     <br />
                     <Container style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button variant="primary" type="submit">{props.isSubmitting ? 'Loading...' : 'Log in'}</Button>
                     </Container>
                  </Form>
               </Container>
               )
            }
         </Formik>
      </>
   );
}

function FormFieldInput({ label, ...props }) {
   const [field, meta] = useField(props);

   return (
      <Container className="welcome-action-form-text-input">
         <h6 htmlFor={props.id || props.name}>{label}</h6>
         <FormControl {...field} {...props} isInvalid={meta.touched && meta.error && true }/>
         {meta.touched && meta.error ? (<Badge variant="danger">{meta.error}</Badge>) : <br />}
      </Container>
   )
}

function FormFieldCheckbox({ label, ...props }) {
   const [field, meta] = useField(props, 'checkbox');

   return (
      <Container className="welcome-action-form-text-input">
         <FormCheck type="checkbox" {...field} {...props} label={label}/>
         {meta.touched && meta.error ? (<Badge variant="danger">{meta.error}</Badge>) : <br />}
      </Container>
   )
}