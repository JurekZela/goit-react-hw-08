import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Title } from '../ContactList/contactLIst-styled';

export default function Contact ({ contacts }) {
  
    const dispatch = useDispatch();
    const handleDelete = () => {
      toast.success('Deleted contact 😏')
      return dispatch(deleteContact(contacts.id))
    }

    return (
      <>
        <Title>
          {contacts.name}: {contacts.number}
          </Title>
          <Button onClick={handleDelete} variant="outlined" color="error">
            Delete
            </Button>
     </>
    )
}