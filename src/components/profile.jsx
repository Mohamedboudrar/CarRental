import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { api } from '../api'; // Adjust path as needed

const Profile = () => {
  const { userId } = useContext(AuthContext); // Get userId from AuthContext
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for any errors

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        setLoading(true);
        try {
          const data = await api.getProfile(userId); // Fetch user data
          console.log("Fetched user data:", data); // Debug log
          setUserData(data); // Set fetched user data to state
        } catch (err) {
          console.error("Failed to fetch user data:", err);
          setError("Failed to load user data."); // Set error message
        } finally {
          setLoading(false); // End loading state
        }
      };

      fetchUserData(); // Call the fetch function
    }
  }, [userId]); // Dependency on userId

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  return (
    <div>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>First Name:</strong> {userData.first_name}</p>
          <p><strong>Last Name:</strong> {userData.last_name}</p>
          <p><strong>Created At:</strong> {userData.created_at}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
