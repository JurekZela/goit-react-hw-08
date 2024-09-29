import useAuth from '../../hooks/useAuth';
import { Text } from './HomePage-styled';


const HomePage = () => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? (
        <Text>Now you will exactly not forget your contacts!</Text>
        ) : (
            <Text>Welcome,
            please Sign up or Log in to have access to the Phonebook!</Text>
        )
};

export default HomePage;