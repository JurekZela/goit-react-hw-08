import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing, selectIsAuthUser } from "../redux/auth/authSelectors";

const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectIsAuthUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    }
    
};

export default useAuth;