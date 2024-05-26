import { useDispatch } from "react-redux";
import { CiLogin } from "react-icons/ci";
import { logOut } from '../../redux/auth/operations';
import { UserName, NavStatus, Button } from './UserMenu-styled';
import useAuth from "../../hooks/useAuth";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <NavStatus>
            <UserName>Welcome, {user.name}</UserName>
            <Button type="button" onClick={() => dispatch(logOut())}>
            <CiLogin />
                Logout
            </Button>
        </NavStatus>
    );
};

export default UserMenu;