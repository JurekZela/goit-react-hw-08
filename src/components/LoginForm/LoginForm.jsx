import { Formik } from "formik";
import * as Yup from 'yup';
import toast from "react-hot-toast"; 
import { useDispatch } from "react-redux";
import { login } from '../../redux/auth/authOperations';
import { LoginStyle, Label, Button, Span, Form, Input } from './LoginForm-styled';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


const LoginForm = () => {
  const dispatch = useDispatch();

    return (
        <LoginStyle>
                 <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={SignupSchema}
       onSubmit={(values, actions) => {
        dispatch(login({
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
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <Form onSubmit={handleSubmit}>
           
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

export default LoginForm;