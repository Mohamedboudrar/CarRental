import React, {useState} from 'react';
import Honda from '../../public/Honda.png'
import Footer from './Footer';
import {api} from "../api"
import { useNavigate } from "react-router-dom";



function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
  
    const userData = { email, password, first_name, last_name };
    console.log("Sending userData:", userData); // Log data for verification
  
    try {
      await api.register(userData);
      setSuccess(true);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error.message); // Log specific error
      setError("Signup failed. This email may already be registered.");
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
        <form className=' mt-28 ml-20 w-[500px]'>
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          {error && (
          <div className="p-2 mb-4 text-center text-red-600 bg-red-100 rounded">
            {error}
          </div>
        )}
         {success && (
          <div className="p-2 mb-4 text-center text-green-600 bg-green-100 rounded">
            Signup successful! Redirecting to login...
          </div>
        )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="FirstName"
              type="text"
              value={first_name}
              placeholder="Your Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="LastName"
              type="text"
              value={last_name}
              placeholder="Your Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
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
              onClick={handleSignup}
            >
              Register
            </button>
          </div>
        </form>
        
      </div>
      <img
            className="relative top-9 h-[385px]"
            src={Honda}
            alt="Car"
          />
    </div>
    
    </section>
    <Footer/>
    </>
  );
}

export default Register;
