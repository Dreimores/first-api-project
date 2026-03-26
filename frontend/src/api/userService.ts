// src/api/userService.ts
import api from './axios';
import { UserProfile } from '../types/user';

export const userService = {
  getUsers: async (): Promise<UserProfile[]> => {
    const { data } = await api.get('/users');
    return data; // Remove the .data suffix since Laravel isn't wrapping it
  },
  deleteUser: async (id: number) => {
    return api.delete(`/users/${id}`);
  }
};