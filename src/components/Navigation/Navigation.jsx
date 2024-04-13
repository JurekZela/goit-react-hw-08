import { Nav, NavigationLink } from './Navigation';

 const Navigation = () => {
    return (
        <Nav>
            <NavigationLink to='/'>
                Home
            </NavigationLink>
            <NavigationLink to='/register'>Register</NavigationLink>
            <NavigationLink to='/login'>Log In</NavigationLink>
        </Nav>
    )
};

export default Navigation;