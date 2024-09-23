import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, StyledForm as Form, StyledField as Field, StyledLabel as Label, ErrorMsg, } from './contactForm-styled';
import { addContact } from '../../redux/contacts/operations';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Too Short!')
      .max(40, 'Too Long!')
      .required('Required'),
    number: Yup.number()
      .min(9, 'Too Short!')
      .required('Required'),
  });
export default function ContactForm  ()  {
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
      
      dispatch(addContact({
        name: values.name,
        number: values.number,
      }))
      actions.resetForm();
    }}
  >
    <Form>
      <Label>
        Name
        <Field  name="name" placeholder="Phil Collins" />
        <ErrorMsg name="name" component="span" />
        </Label>

      <Label>
        Number
        <Field type="tel"  name="number" placeholder="+48-000-000-000" />
        <ErrorMsg name="number" component="span" />
        </Label>       

      <Button type="submit">Add contact</Button>
    </Form>    
  </Formik>
  )
}