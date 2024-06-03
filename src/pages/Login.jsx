import { Formik } from "formik";
import toast from "react-hot-toast"; 
import { useDispatch } from "react-redux";
import { logIn } from '../redux/auth/operations';
import DocumentTitle from '../components/Documention/DocumentTitle';
import { LoginStyle, Label, Button, Span, Form, Input } from '../components/Login/Login';

const Login = () => {
  const dispatch = useDispatch();

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
       onSubmit={(values, actions) => {
        dispatch(logIn({
          email: values.email,
          password: values.password,
        })).unwrap()
        .then(() => {toast.success('login success')})
        .catch(() => { toast.error('login error')})

        actions.resetForm();
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
           
           <Label>
           <DocumentTitle>Login</DocumentTitle>
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