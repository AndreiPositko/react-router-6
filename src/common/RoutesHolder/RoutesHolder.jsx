// libs
import React, { useState } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

// components
import Products from '../../components/Products';
import Admin from '../../components/Admin';

const RoutesHolder = () => {
  const [authenticated] = useState(true);
  const routes = useRoutes([
    {
      path: '/*',
      element: <Products />,
    },
    {
      path: '/admin',
      element: authenticated ? <Admin /> : <Navigate to='/' />,
    },
    {
      path: '*',
      element: <Navigate to='/' />,
    },
  ]);
  return routes;
};

export default RoutesHolder;
