import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import apiClient from '../api/apiClient';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'MENTEE'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Form data:', formData);

      const response = await axios.post(`${apiClient}/auth/register`, formData);
      console.log('Registration successful:', response.data);
      alert('Registration successful. Please login!');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      alert('Registration failed. Try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-content">
          <div className="register-header">
            <img src="/user-plus-solid.svg" alt="Logo" className="register-logo" />
            <h2>Create Your Account</h2>
            <p className="register-subtitle">Join our community of mentors and mentees</p>
          </div>

          <div className="register-left">
            <div className="user-type-selector">
              <button 
                type="button"
                className={`type-button ${formData.role === 'MENTEE' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, role: 'MENTEE'})}
              >
                <img src="/mentee-icon.svg" alt="Mentee" className="type-icon" />
                <span>Sign Up as Mentee</span>
              </button>
              <button 
                type="button"
                className={`type-button ${formData.role === 'MENTOR' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, role: 'MENTOR'})}
              >
                <img src="/mentor-icon.svg" alt="Mentor" className="type-icon" />
                <span>Sign Up as Mentor</span>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
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
                  placeholder="Create a password"
                />
              </div>
              <button type="submit" className="register-button">
                Create Account
              </button>
            </form>
            <div className="register-footer">
              <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>
          </div>

          <div className="register-right">
            <img 
              src="/mentorship-illustration.svg" 
              alt="Mentorship Illustration" 
              className="register-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;