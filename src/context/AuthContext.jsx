import React, { createContext, useState, useEffect } from 'react';
import { getToken } from '../api.jsx';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = getToken();
    console.log("Initial token from storage:", token); // Debug log

    if (token) {
      try {
        const decoded = jwt_decode(token);
        console.log("Decoded token:", decoded);
        setUserId(decoded.user_id) // Debug log
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Token decoding failed:", error);
        console.log("Token contents:", token); // Debug log
      }
    }
  }, []);

  // Add a debug effect
  useEffect(() => {
    console.log("AuthContext state updated - userId:", userId);
    console.log("AuthContext state updated - isLoggedIn:", isLoggedIn);
  }, [userId, isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};