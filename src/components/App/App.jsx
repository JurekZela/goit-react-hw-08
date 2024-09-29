import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/authOperations'; 
import useAuth from '../../hooks/useAuth';
import Layout from '../Layout';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
  const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
  const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
  const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
  const NotFound = lazy(() => import('../../pages/NotFound/NotFound.jsx'));
  
  return  isRefreshing ? 
  ( <b>Please wait, your page is being refreshing...</b> ) :  (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RestrictedRoute redirectTo='/contacts'  component={<RegisterPage />} />} />
        <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
        <Route path='/contacts' element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
};