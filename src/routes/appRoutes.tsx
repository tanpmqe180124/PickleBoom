import { Route, Routes } from 'react-router-dom';

import Home from '../pages/HomePage';
import { Branch } from '@/pages/Branch';
import BookingDate from '@/pages/BookingDate';
import CheckOut from '@/pages/CheckOut';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/branch" element={<Branch />} />
      <Route path="/booking/date" element={<BookingDate />} />
      <Route path="/booking/date/checkout" element={<CheckOut />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
};

export default AppRoutes;
