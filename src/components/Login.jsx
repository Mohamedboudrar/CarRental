import React, { useState, useContext } from 'react';
import Honda from '../../public/Honda.png';
import { AuthContext } from '../context/AuthContext';
import Footer from './Footer';
import { api } from "../api.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsLoggedIn, setUserId } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const credentials = { email, password };
      console.log("Sending login request with:", credentials); // Debug log
  
      const response = await api.login(credentials);
      console.log("Full login response:", response); // Debug log - check the exact structure
  
      // Store the complete response in localStorage for debugging
      localStorage.setItem("debug_response", JSON.stringify(response));
      
      if (response.access_token) {
        localStorage.setItem("token", response.access_token);
        
        // Try to decode token to see what's inside
        try {
          const decoded = jwt_decode(response.access_token);
          console.log("Decoded token in login:", decoded); // Debug log
        } catch (err) {
          console.error("Could not decode token:", err);
        }
        
        setIsLoggedIn(true);
        console.log("Setting userId in login to:", response.userId); // Debug log
        setUserId(response.userId);
        navigate("/");
      } else {
        throw new Error("No access token in response");
      }
      
    } catch (error) {
      console.error("Detailed login error:", error); // Debug log
      setError("Login failed: Invalid email or password");
    }
  };

  return (
    <>
    <section className="relative flex items-start mb-44">
      {/* Orange Shape */}
      <div className="absolute -right-8 -top-10 bg-orange-500 w-[580px] h-[580px] z-0"
        style={{
          borderRadius: '100% 0 100% 100%', // Top-left is sharp, others are rounded
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' // Adjust the sharp corner placement
        }}>
      </div>
      
      <div className='flex space-x-28'>
        {/* Login Form Container */}
        <div className="relative flex justify-center ml-24 mt-6 ">
          <form className='mt-28 ml-20 w-[500px]'>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleLogin}
              >
                Login
              </button>
              <p className="text-center text-gray-600">
                Don’t have an account?{" "}
                <a href="/signup" className="text-orange-500 hover:text-orange-700">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
        <img
          className="relative top-8"
          src={Honda}
          alt="Car"
        />
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Login;
