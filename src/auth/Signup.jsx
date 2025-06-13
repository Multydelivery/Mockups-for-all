import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AuthForm from '../components/auth/AuthForm';
import './Signup.css'; // Import your CSS for styling

const Signup = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (userData) => {
    try {
      await register(userData);
      navigate('/verify-email'); // Or dashboard
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <AuthForm
      title="Create Account"
      submitText="Sign Up"
      onSubmit={handleSubmit}
      showNameField
      showPasswordConfirmation
    />
  );
};

export default Signup;