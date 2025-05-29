import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import apiClient from '../api/apiClient';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'MENTEE'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${apiClient}/auth/login`, formData);
      localStorage.setItem('token', response.data.token);
      console.log('Login successful:', response.data);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <div className="login-header">
            <img src="/right-to-bracket-solid.svg" alt="Logo" className="login-logo" />
            <h2>Welcome Back</h2>
            <p className="login-subtitle">Sign in to continue your journey of growth and learning</p>
          </div>

          <div className="login-left">
            <div className="user-type-selector">
              <button 
                type="button"
                className={`type-button ${formData.role === 'MENTEE' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, role: 'MENTEE'})}
              >
                <img src="/mentee-icon.svg" alt="MENTEE" className="type-icon" />
                <span>Sign in as Mentee</span>
              </button>
              <button 
                type="button"
                className={`type-button ${formData.role === 'MENTOR' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, role: 'MENTOR'})}
              >
                <img src="/mentor-icon.svg" alt="MENTOR" className="type-icon" />
                <span>Sign in as Mentor</span>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="login-button">
                Sign In
              </button>
              <div className="login-footer">
                <p>Don't have an account? <a href="/register">Sign up</a></p>
                <a href="/forgot-password">Forgot password?</a>
              </div>
            </form>
          </div>

          <div className="login-right">
            <img 
              src="/mentorship-illustration.svg" 
              alt="Mentorship Illustration" 
              className="login-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 