import { Route, Routes } from 'react-router-dom';

import BookingDate from '@/pages/BookingDate';
import { Branch } from '@/pages/Branch';
import CheckOut from '@/pages/CheckOut';
import Home from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/branch" element={<Branch />} />
      <Route path="/booking/date" element={<BookingDate />} />
      <Route path="/booking/date/checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default AppRoutes;
