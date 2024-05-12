import { useSelector } from "react-redux";
import { selectIsLoggedIn, refreshing, selectUser } from '../redux/auth/selectors';

const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(refreshing);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    }
};

export default useAuth;