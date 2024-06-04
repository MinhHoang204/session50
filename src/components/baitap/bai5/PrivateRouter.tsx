import React, { Children } from 'react'
import { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
export default function PrivateRouter() {
    const PrivateRouter = ({ children }: { children: React.ReactNode }) => {
    
    }
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return isLoggedIn? (
    <Route>{children}</Route>
  ) : (
    <Navigate to="/login" /> 
  );
}
