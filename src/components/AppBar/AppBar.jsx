import Navigation from '../Navigation/Navigation.jsx'
import UserMenu from '../UserMenu/UserMenu.jsx';
import { Header } from './AppBar.js';
import useAuth from '../../hooks/useAuth.js';

const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
             <Navigation />
             {isLoggedIn && <UserMenu /> }
        </Header>
    )
};

export default AppBar;