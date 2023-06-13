import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import PasswordRecovery from './PasswordRecovery';
import Home from './Home';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Aquí puedes realizar la lógica para verificar si hay un token guardado en el navegador
    // Por ejemplo, puedes usar el localStorage para guardar el token y comprobar su existencia
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <Navigate to="/home" replace /> : <LoginForm />}
        />
        <Route
          path="/password-recovery"
          element={
            isLoggedIn ? <Navigate to="/home" replace /> : <PasswordRecovery />
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute
              component={Home}
              isLoggedIn={isLoggedIn}
              path="/home"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
