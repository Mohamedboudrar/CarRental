 // src/components/TestUserProfile.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestUserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const userId = 'ded21beb-ae66-485d-803d-0ce42435a331'; // Replace with the desired user ID
  const BASE_URL = 'http://localhost:8000'; // Your API base URL

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/profile/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include the token from localStorage
          },
          params: { id: userId },
        });

        // Set user data on successful response
        setUserData(response.data);
      } catch (err) {
        // Handle error
        setError(err.response ? err.response.data.message : 'Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h2>User Profile</h2>
      <p>ID: {userData.id}</p>
      <p>Name: {userData.first_name}{userData.last_name}</p> {/* Adjust based on the structure of userData */}
      <p>Email: {userData.email}</p> {/* Adjust based on the structure of userData */}
      {/* Add any other user fields as necessary */}
    </div>
  );
};

export default TestUserProfile;
