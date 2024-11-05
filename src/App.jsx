import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Profile from './components/profile.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Register' element={<Register/>}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
