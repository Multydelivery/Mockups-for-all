import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      navigate('/login', { replace: true });
    };
    performLogout();
  }, [logout, navigate]);

  return <div>Logging out...</div>;
};

export default Logout;