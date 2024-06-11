import { useDispatch } from 'react-redux';
import toast from "react-hot-toast"; 
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, StyledForm as Form, StyledField, StyledLabel as Label, ErrorMsg, } from './Phonebook-styled';
import { addContacts } from '../../redux/contacts/operations';

const SignupSchema = yup.object().shape({
    name: yup.string().min(4, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
    number: yup.number()
      .min(9, 'Too Short!')
      .required('Required'),
  });
const ContactForm = () => {
    const dispatch = useDispatch();


  return (
    <Formik
    initialValues={{
      name: '',
      number: '',
    }}

    validationSchema={SignupSchema}
    onSubmit={async (values, actions) => {
      await new Promise((r) => setTimeout(r, 500));

      dispatch(addContacts({
        name: values.name,
        number: values.number,
      })).unwrap()
      .then(() =>{ toast.success('created contact!')})
      .catch(() => {toast.error('Oops something went wrong! Please try again!')})

      actions.resetForm();
    }}
  >
    <Form>
      <Label>
        Name
        <StyledField type='text' name="name" placeholder="Phil Collins" />
        <ErrorMsg name="name" component="span" />
        </Label>

      <Label>
        Number
        <StyledField
       type="tel" 
       name="number"
       placeholder="+48 000-000-000" 
       />
        <ErrorMsg name="number" component="span" />
        </Label>       

      <Button type="submit">Add contact</Button>
    </Form>    
  </Formik>
  )
};

export default ContactForm;