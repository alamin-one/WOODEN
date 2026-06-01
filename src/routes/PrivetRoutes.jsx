import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../contexts/auth/AuthContextprovider';
import Loader from '../components/ui/Loader';

const PrivetRoutes = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className="min-h-[110vh] flex justify-center items-center">
        <Loader />
      </div>
    );

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default PrivetRoutes;
