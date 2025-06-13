// src/components/auth/AuthForm.jsx
import { useState } from 'react';
import './AuthForm.css'; // Import your CSS for styling

const AuthForm = ({ 
  title, 
  submitText, 
  onSubmit, 
  showNameField = false,
  showPasswordConfirmation = false,
  children 
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    passwordConfirmation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="auth-form">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {showNameField && (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        {showPasswordConfirmation && (
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="passwordConfirmation"
              value={formData.passwordConfirmation}
              onChange={handleChange}
              required
            />
          </div>
        )}
        
        <button type="submit">{submitText}</button>
        {children}
      </form>
    </div>
  );
};

export default AuthForm;