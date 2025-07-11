import { Route, Routes } from 'react-router-dom';

import { Calendar13 } from '@/components/canlendarBook';
import BookingDate from '@/pages/BookingDate';
import CheckOut from '@/pages/CheckOut';
import { PlayerType } from '@/pages/PlayerType';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import Home from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playertype" element={<PlayerType />} />
      <Route path="/booking/date" element={<BookingDate />} />
      <Route path="/booking/date/checkout" element={<CheckOut />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/112233" element={<Calendar13 />} />
    </Routes>
  );
};

export default AppRoutes;
