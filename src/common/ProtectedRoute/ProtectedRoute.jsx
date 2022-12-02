// libs
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, authenticated, replaceTo }) => {
  return authenticated ? children : <Navigate to={replaceTo} />;
};

export default ProtectedRoute;
