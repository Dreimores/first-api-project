// src/pages/protected/Dashboard.tsx
import { useAuth } from '../../hooks/useAuth';

export const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <p className="text-lg">Welcome back, <strong>{user?.name}</strong>!</p>
        <p className="text-gray-600">Role: {user?.role}</p>
      </div>
    </div>
  );
};