import { Nav, NavigationLinks, UserInfo } from './Navigation';

 const Navigation = () => {
    return (
        <>
        <Nav>
            <NavigationLinks to='/'>
                Home
            </NavigationLinks>
        </Nav>
        <UserInfo>
            <NavigationLinks to='/register'>Register</NavigationLinks>
            <NavigationLinks to='/login'>Log In</NavigationLinks>
        </UserInfo>
        </>
    )
};

export default Navigation;