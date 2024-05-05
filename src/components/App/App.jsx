import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactList from '../Contacts/Contacts';
import Layout from '../Layout.jsx';

const HomePage = lazy(() => import('../../pages/Home/Home.jsx'));
const RegisterForm = lazy(() => import('../../pages/Register.jsx'));
const Login = lazy(() => import('../../pages/Login.jsx'));
const NotFound = lazy(() => import('../../pages/NotFound.jsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
<Layout>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/register" element={<RegisterForm />} />
<Route path="/login" element={<Login />} />
<Route path="/contacts" element={<ContactList />} />
<Route path="*" element={<NotFound />} />
</Routes>
</Layout>
  )
}

export default App


// import { ContactForm } from '../PhoneBook/Phonebook';
// import { Filter } from '../Filter/Filter';
// import { Card } from '../Contacts/contacts-styled';
{/* <Card>
<ContactForm />
  <Filter />
  <ContactList />
</Card> */}
{/* <PrivateRoute redirectTo='/login' component={<ContactList />}/> */}