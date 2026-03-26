// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { AuthLayout } from '../components/layout/AuthLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../pages/public/Login';
import { Register } from '../pages/public/Register';
import { Dashboard } from '../pages/protected/Dashboard';
import { Users } from '../pages/protected/Users';
import { NotFound } from '../pages/NotFound';

export const AppRoutes = () => (
  <Routes>
    <Route element={<RootLayout />}>
      {/* Public Routes */}
      <Route path="/" element={<h1 className="text-center py-20 text-4xl">Home Page</h1>} />
      <Route path="/users" element={<Users />} />
      
      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);