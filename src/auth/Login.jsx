import { useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import { useAuth } from "../hooks/useAuth";
import "./Login.css"; // Import your CSS for styling

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (credentials) => {
    try {
      await login(credentials);
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <AuthForm
      className="login-form"
      title="Login"
      submitText="Sign In"
      onSubmit={handleSubmit}
    >
      {/* Replace anchor with button for accessibility */}
      <button
        type="button"
        className="link-button"
        onClick={() => navigate("/forgot-password")}
      >
        Forgot password?
      </button>
      <button
        type="button"
        className="link-button"
        onClick={() => navigate("/signup")}
      >
        Don't have an account? Sign Up
      </button>
    </AuthForm>
  );
};

export default Login;
