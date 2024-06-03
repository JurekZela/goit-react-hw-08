import { useEffect, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations.js';
import useAuth from '../../hooks/useAuth.js';
 import ContactList from '../Contacts/Contacts';
import { PrivateRoute } from '../PrivateRoute.jsx';
import { RestrictedRoute } from '../RestrictedRoute.jsx';
import Layout from '../Layout.jsx';

const HomePage = lazy(() => import('../../pages/Home/Home.jsx'));
const RegisterForm = lazy(() => import('../../pages/Register.jsx'));
const Login = lazy(() => import('../../pages/Login.jsx'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound.jsx'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  return isRefreshing ? (<b> Refreshing user... </b>) : 
  (
    <Layout>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/register" element={<RestrictedRoute redirectTo='/contacts' component={<RegisterForm />} />} />
<Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<Login />} />} />
<Route path="/contacts" element={<PrivateRoute redirectTo='/login' component={<ContactList />} />} />
<Route path="*" element={<NotFound />} />
</Routes>
<Toaster />
</Layout>
  )
}

export default App