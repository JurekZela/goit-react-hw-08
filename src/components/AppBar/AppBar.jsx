import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation.jsx'
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu.jsx';
import { Header } from './AppBar.js';

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Header>
             <Navigation />
             {isLoggedIn && <UserMenu /> }
        </Header>
    )
};

export default AppBar;