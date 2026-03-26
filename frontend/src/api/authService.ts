// src/api/authService.ts
import api from './axios';
import { User } from '../types/auth';

export const authService = {
  login: async (email: string): Promise<{ user: User; token: string }> => {
    // Mocking response for demo
    const { data } = await api.post('/login', { email, password: 'cityslicka' });
    return {
      token: data.token,
      user: { id: '1', email, name: 'John Doe', role: 'admin' }
    };
  },
  register: async (userData: { name: string; email: string; password: string }) => {
    return api.post('/register', userData);
  }
};