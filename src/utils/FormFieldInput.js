import React from "react";
import { useField } from "formik";
import {
   Container,
   Badge,
   FormControl,
} from "react-bootstrap";


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

export default FormFieldInput;