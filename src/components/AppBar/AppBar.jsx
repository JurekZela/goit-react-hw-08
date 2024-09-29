import { Toaster } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { Header } from './AppBar-styled';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <Navigation />
            <Toaster />
            {isLoggedIn ? <UserMenu /> : (
                <AuthNav />
            )}
        </Header>
    )
};

export default AppBar;