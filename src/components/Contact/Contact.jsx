import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Title, ButtonStyle } from '../ContactList/contactLIst-styled';

export default function Contact ({ contacts }) {  
    const dispatch = useDispatch();

    const handleDelete = () => {
      toast.success('Deleted contact 😏')
      return dispatch(deleteContact(contacts.id))
    }

    const handleEdit = () => {};

    return (
      <>
        <Title>
          {contacts.name}: {contacts.number}
          </Title>
          <ButtonStyle>
          <Button onClick={handleEdit} href="#text-buttons">
            Edit
            </Button>
          <Button onClick={handleDelete}  color="error">
            Delete
            </Button>
          </ButtonStyle>
     </>
    )
}