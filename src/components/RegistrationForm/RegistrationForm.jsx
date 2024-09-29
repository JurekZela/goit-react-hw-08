import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import toast from "react-hot-toast";
import { register } from '../../redux/auth/authOperations';
import { RegisterStyle, Label, Button, Span, Form, Input } from './RegistrationForm-styled';


const RegistrationForm = () => {
    const dispatch = useDispatch();

    return (
        <RegisterStyle>
          <Formik
                   initialValues={{ username: '', email: '', password: '' }}
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
                    
                    dispatch(
                      register({
                        name: values.username,
                        email: values.email,
                        password: values.password,
                      })
                    ).unwrap()
                    .then(() => {toast.success('register success')})
                    .catch(() => { toast.error('register error')})
            
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
                 type="text"
                 placeholder="Enter username"
                 name="username"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.username}
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

  export default RegistrationForm;