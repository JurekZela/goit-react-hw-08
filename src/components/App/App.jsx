import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchContacts } from '../../redux/contacts/operations';
import Layout from '../Layout';
import RegisterForm from '../../pages/Register.jsx';
import Login from '../../pages/Login.jsx';
import ContactList from '../Contacts/Contacts';
import NotFound from '../../pages/NotFound.jsx'
import AppBar from '../AppBar/AppBar.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
<div>
<AppBar />
<Routes>
<Route path="/" element={<Layout />} />
<Route path="/register" element={<RegisterForm />} />
<Route path="/login" element={<Login />} />
<Route path="/contacts" element={<ContactList />} />
<Route path="*" element={<NotFound />} />
</Routes>
</div>
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