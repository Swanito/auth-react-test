import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, path, ...rest }) => {
  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
