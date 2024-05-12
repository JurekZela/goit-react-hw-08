import { useDispatch } from "react-redux";
import { logOut } from '../../redux/auth/operations';
import { UserName, Button } from './UserMenu-styled';
import useAuth from "../../hooks/useAuth";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

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