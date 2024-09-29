import useAuth from "../../hooks/useAuth";
import { Authentication, AuthNavLinks } from './AutNav-styled';

const AuthNav = () => {
    const { isLoggedIn } = useAuth();

    return (
         !isLoggedIn && (
            <Authentication>
                <AuthNavLinks to='/register'>Register</AuthNavLinks>
                <AuthNavLinks to='/login'>Log In</AuthNavLinks>
            </Authentication>
        )
    )
}

export default AuthNav;