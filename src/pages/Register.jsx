import { Formik } from "formik";

const RegisterForm = () => {
    return (
        <div>
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
         <form onSubmit={handleSubmit}>
           
            <div>
            <label><b>Username:</b></label>
           <input
             type="text"
             placeholder="Enter username"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             required
           />
            </div>
          
           <div>
           <label><b>Email:</b></label>
           <input
             type="email"
             placeholder="Enter Email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             required
           />
           </div>
          
           {errors.email && touched.email && errors.email}
          
           <div>
            <label><b>Password:</b></label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             required
           />
           </div>
           
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Register
           </button>
         </form>
       )}
     </Formik>
        </div>
    )
};

export default RegisterForm;