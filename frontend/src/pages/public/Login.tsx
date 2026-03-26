// src/pages/public/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { authService } from '../../api/authService';
import { Button } from '../../components/ui/button';

export const Login = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await authService.login(email);
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      alert("Login failed. Use eve.holt@reqres.in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input 
          type="email" 
          className="w-full p-2 border rounded" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" isLoading={loading}>Sign In</Button>
    </form>
  );
};