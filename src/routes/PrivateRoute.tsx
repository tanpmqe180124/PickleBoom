import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function PrivateRoute() {
  const { accessToken } = useAuth();
  return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
} 