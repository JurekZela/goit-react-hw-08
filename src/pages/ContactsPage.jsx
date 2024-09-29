import { useSelector } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import ContactForm  from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import { Card } from '../components/ContactList/contactLIst-styled';
import { selectLoading, selectError } from '../redux/contacts/selectors';

const ContactsPage = () => {
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    return (
        <Card>
        <ContactForm />
          <SearchBox />
          {isLoading && (<p>Loading...</p>)}
          {error && (<p>{error}</p>)}
          <ContactList />
      </Card>
    )
}

export default ContactsPage;