import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { RemoveButton, Title } from '../ContactList/contactLIst-styled';

export default function Contact ({ contacts }) {
  
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contacts.id))

    return (
       <>
        <Title>
          {contacts.name}: {contacts.number}
          </Title>
          <RemoveButton onClick={handleDelete}>Delete</RemoveButton>
     </>
    )
}