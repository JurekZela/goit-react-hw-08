import useAuth from '../../hooks/useAuth';
import { Nav, NavigationLinks, UserInfo } from './Navigation';

 const Navigation = () => {

    const { isLoggedIn } = useAuth()
    return (
        <>
        <Nav>
            <NavigationLinks to='/'>
                Home
            </NavigationLinks>
        </Nav>

        { !isLoggedIn && (
            <UserInfo>
                <NavigationLinks to='/register'>Register</NavigationLinks>
                <NavigationLinks to='/login'>Log In</NavigationLinks>
            </UserInfo>
        )}
        </>
    )
};

export default Navigation;