import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Create your auth context
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;