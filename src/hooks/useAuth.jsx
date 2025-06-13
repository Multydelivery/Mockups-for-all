// src/hooks/useAuth.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    // Your login logic here
    setUser({ name: 'Test User' });
  };

  const register = async (userData) => {
    // Your registration logic here
    setUser({ name: userData.name });
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return { user, login, register, logout };
};