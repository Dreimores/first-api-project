// src/components/layout/Header.tsx
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/button';

export const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">AppLogo</Link>
      <nav className="space-x-4 flex items-center">
        <Link to="/users" className="hover:text-blue-600">Users</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <span className="text-sm text-gray-500">Hi, {user?.name}</span>
            <Button variant="outline" onClick={logout}>Logout</Button>
          </>
        ) : (
          <Link to="/login"><Button>Login</Button></Link>
        )}
      </nav>
    </header>
  );
};