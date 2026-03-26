import React, { useState } from 'react';
import { authService } from '../../api/authService';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authService.register(form);
      alert('Success! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed. Try email: eve.holt@reqres.in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Create Account</h2>
      <input 
        className="w-full p-2 border rounded" 
        placeholder="Full Name"
        value={form.name}
        onChange={e => setForm({...form, name: e.target.value})}
        required 
      />
      <input 
        className="w-full p-2 border rounded" 
        type="email" 
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({...form, email: e.target.value})}
        required 
      />
      <input 
        className="w-full p-2 border rounded" 
        type="password" 
        placeholder="Password"
        value={form.password}
        onChange={e => setForm({...form, password: e.target.value})}
        required 
      />
      <Button className="w-full" type="submit" isLoading={loading}>
        Sign Up
      </Button>
    </form>
  );
};