import { useDispatch, useSelector } from 'react-redux';
import { ListContact, RemoveButton, Title } from './contacts-styled';
import { deleteContact } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { itemsFilter } from '../../redux/filters/selectors';


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