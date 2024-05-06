import { useDispatch, useSelector } from "react-redux";
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { UserName, Button } from './UserMenu-styled';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectUser);

    return (
        <div>
            <UserName>Welcome, {user.name}</UserName>
            <Button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </div>
    );
};

export default UserMenu;