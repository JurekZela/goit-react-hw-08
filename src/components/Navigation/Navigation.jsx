import useAuth from '../../hooks/useAuth';
import { Nav, NavigationLinks } from './Navigation-styled';

const Navigation = () => {
    const { isLoggedIn } = useAuth();
    
    return (
        <>
        <Nav>
            <NavigationLinks to='/'>
                Home
            </NavigationLinks>
            
            {
            isLoggedIn && (
            <NavigationLinks to='/contacts'>
                Contacts
            </NavigationLinks>
            )
            }
        </Nav>
        </>
    )
};

export default Navigation;