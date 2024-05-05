import { Formik } from "formik";
import { RegisterStyle, Label, Button, Span, Title, Form, Input } from '../components/Register/Register';

const RegisterForm = () => {
    return (
        <RegisterStyle>
            <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <Form onSubmit={handleSubmit}>
          <Title>Let's create your account!</Title>
            <Label>
              <Input
             type="text"
             placeholder="Enter username"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             required
           />
              </Label>
          
           <Label>
           <Input
             type="email"
             placeholder="Enter Email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             required
           />
           </Label>
          
            <Label>
            <Input
             type="password"
             name="password"
             placeholder="Password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             required
           />  
            </Label>         
           
           <Button type="submit" disabled={isSubmitting}>
             <Span>
             Register
             </Span>
           </Button>
         </Form>
       )}
     </Formik>
        </RegisterStyle>
    )
};

export default RegisterForm;