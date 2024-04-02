import { useDispatch, useSelector } from 'react-redux';
import { ListContact, RemoveButton, Title } from './contacts-styled';
import { deleteContact } from '../../redux/contactsOps';
import { selectError, selectIsLoading, itemsFilter } from '../../redux/selectors';


const ContactList = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    const items = useSelector(itemsFilter);

    return (  
     <ul>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      { items.map(({ id, name, number }) => (
        <ListContact key={id}>
          <Title>
          {name}: {number}
          </Title>
         <RemoveButton onClick={() => dispatch(deleteContact(id))}>Delete</RemoveButton>
       </ListContact>
       ))
    }
     </ul>
    )
}

export default ContactList;