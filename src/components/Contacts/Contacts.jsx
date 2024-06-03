import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { deleteContact } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { itemsFilter } from '../../redux/filters/selectors';
import { ListContact, Title, Card } from './contacts-styled';
import ContactForm from '../PhoneBook/Phonebook';
import Filter from '../Filter/Filter';


const ContactList = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    const items = useSelector(itemsFilter);

    return (  
      <Card>
      <ContactForm />
      <Filter />
      <div>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      { items.map(({ id, name, number }) => (
        <ListContact key={id}>
          <Title>
          {name}: {number}
          </Title>
         
         <Button size="small" variant="outlined" color="error" onClick={() => dispatch(deleteContact(id))}>Delete</Button>
       </ListContact>
       ))
    }
     </div>
      </Card>
    )
}

export default ContactList;