// src/pages/protected/Users.tsx
import React, { useEffect, useState } from 'react';
import { userService } from '../../api/userService';
import { UserProfile } from '../../types/user';
import { Loader } from '../../components/common/Loader';
import { EmptyState } from '../../components/common/EmptyState';
import { Button } from '../../components/ui/button';

export const Users = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userService.getUsers()
      .then(data => setUsers(data)) // Ensure this matches the return type of the service
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Delete user?")) {
      await userService.deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
    }
  };

  if (loading) return <Loader />;
  if (users.length === 0) return <EmptyState />;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">User Management</h1>
      <div className="grid gap-4">
        {users.map(user => (
          <div key={user.id} className="flex items-center justify-between p-4 bg-white border rounded shadow-sm">
            <div className="flex items-center space-x-4">
              <img src={user.avatar} className="w-12 h-12 rounded-full" alt="" />
              <div>
                <p className="font-semibold">{user.first_name} {user.last_name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <Button variant="destructive" onClick={() => handleDelete(user.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};