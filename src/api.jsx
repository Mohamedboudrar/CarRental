// src/services/api.js

import axios from "axios";

const BASE_URL = 'http://localhost:8000';

// Helper to handle response (no need for fetch-specific handling anymore)
const handleResponse = (response) => response.data;

// Get stored token
export const getToken = () => localStorage.getItem('token');

// Add auth header
const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${getToken()}`
});

export const api = {
  login: async (credentials) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials, {
      headers: { 'Content-Type': 'application/json' }
    });

    const data = handleResponse(response);
    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
    }
    return data;
  },

  register: async (userData) => {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData, {
      headers: { 'Content-Type': 'application/json' }
    });

    const data = handleResponse(response);
    if (data && data.token) {
      localStorage.setItem('token', data.token);
    }
    return data.user || null;
  },

  logout: async () => {
    try {
      await axios.post(`${BASE_URL}/auth/logout`, {}, { headers: getAuthHeaders() });
    } finally {
      localStorage.removeItem('token');
    }
  },

  getVehicles: async () => {
    const response = await axios.get(`${BASE_URL}/vehicles`, { headers: getAuthHeaders() });
    return handleResponse(response);
  },

  getBookings: async () => {
    const response = await axios.get(`${BASE_URL}/bookings`, { headers: getAuthHeaders() });
    return handleResponse(response);
  },

  createBooking: async (bookingData) => {
    const response = await axios.post(`${BASE_URL}/bookings`, bookingData, { headers: getAuthHeaders() });
    return handleResponse(response);
  },

  cancelBooking: async (bookingId) => {
    const response = await axios.delete(`${BASE_URL}/bookings/${bookingId}`, { headers: getAuthHeaders() });
    return handleResponse(response);
  },

  getProfile: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/profile/${userId}`, {
        headers: getAuthHeaders(),
        params: { id: userId } // Send the userId as a query parameter
      });
      return handleResponse(response);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      throw error;
    }
  },

  checkAuth: async () => {
    try {
      const token = getToken();
      if (!token) return null;

      const response = await axios.get(`${BASE_URL}/auth/me`, { headers: getAuthHeaders() });
      return handleResponse(response);
    } catch (error) {
      localStorage.removeItem('token');
      return null;
    }
  },
};
