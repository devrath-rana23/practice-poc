import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import { Unauthorized } from './Unauthorized';

export const UnauthorizedConnect = () => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to={'/projects'} replace />;
  }

  return <Unauthorized />;
};
