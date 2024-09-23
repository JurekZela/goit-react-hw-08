import { useSelector } from 'react-redux';
import { ListContact } from './contactLIst-styled';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';

export default function ContactList () {
    
  const selectContacts = useSelector(selectFilteredContacts);

    return (  
 <ul>
{
 selectContacts.map((contact) => (
  <ListContact key={contact.id}>
    <Contact  contacts={contact}/>
  </ListContact>
  ))
  }
  </ul>
  )
}