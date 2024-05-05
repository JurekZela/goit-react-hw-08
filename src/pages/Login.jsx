import { Formik } from "formik";
import { LoginStyle, Label, Button, Span, Form, Title, Input } from '../components/Login/Login';

const Login = () => {
    return (
        <LoginStyle>
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
         /* and other goodies */
       }) => (
         <Form onSubmit={handleSubmit}>
            <Title>Welcome!</Title>
            <Label>
            <Input
             type="email"
             name="email"
             placeholder="Email"
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
             Log In
             </Span>
           </Button>
         </Form>
       )}
     </Formik>
        </LoginStyle>
    )
};

export default Login;