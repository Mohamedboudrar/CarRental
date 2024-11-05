import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await api.logout();
      localStorage.removeItem("token"); // Ensure token is removed
      setIsLoggedIn(false); // Update global state
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <header>
      <div className="bg-gray-800 text-white">
        <nav className="flex justify-between items-center py-4 px-8">
          <div className="flex space-x-6">
            <a href="#" className="text-xl font-bold">PickMe</a>
            <a href="/" className="hover:text-orange-400">Home</a>
            <a href="#" className="hover:text-orange-400">About</a>
            <a href="#" className="hover:text-orange-400">Services</a>
            <a href="#" className="hover:text-orange-400">Vehicles</a>
            <a href="#" className="hover:text-orange-400">Client</a>
            <a href="#" className="hover:text-orange-400">Contact</a>
          </div>
          <div className="flex items-center space-x-6 relative">
            {isLoggedIn ? (
              <>
                <button 
                  className="flex items-center focus:outline-none" 
                  onClick={toggleDropdown}
                >
                  <CgProfile size={30} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-28 w-48 bg-white text-black shadow-lg rounded-md z-50">
                    <a 
                      href="/profile" 
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      Profile
                    </a>
                    <button 
                      onClick={handleLogout} 
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
                <div className='w-48 bg-orange-500 h-8 rounded-md items-center flex justify-center'>
                  <p className=''> + Add vehicle</p>
                  </div>
              </>
            ) : (
              <>
                <a href="/Login" className="hover:text-orange-400">Login</a>
                <a href="/Register" className="hover:text-orange-400">Register</a>
              </>
            )}
          </div>
        </nav>
      </div>
      <div className="bg-orange-500 text-white">
        <div className="flex justify-center py-2 space-x-6">
          <span className="flex items-center">
            <span className="material-icons-outlined mr-2"><IoLocationSharp /></span> Rabat
          </span>
          <span className="flex items-center">
            <span className="material-icons-outlined mr-2"><FaPhoneAlt /></span> +212 666666666
          </span>
          <span className="flex items-center">
            <span className="material-icons-outlined mr-2"><MdEmail /></span> contact@pickme.com
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
