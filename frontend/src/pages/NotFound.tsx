// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="text-6xl font-bold text-gray-200">404</h1>
    <p className="text-xl mb-8">Page not found</p>
    <Link to="/" className="text-blue-600 underline">Go Home</Link>
  </div>
);