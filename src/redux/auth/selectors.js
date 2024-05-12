export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const refreshing = state => state.auth.isRefreshing;
export const selectUser = (state) => state.auth.user;