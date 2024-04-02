import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../Contacts/Contacts';
import { ContactForm } from '../PhoneBook/Phonebook';
import { Filter } from '../Filter/Filter';
import { Card } from '../Contacts/contacts-styled';
import { fetchContacts } from '../../redux/contactsOps';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Card>
      <ContactForm />
        <Filter />
        <ContactList />
    </Card>
  )
}

export default App
