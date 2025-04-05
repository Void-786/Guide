import React, { useState } from 'react';
import axios from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'mentee'
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
  
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    const form = new FormData();
    form.append("fullName", formData.name);
    form.append("email", formData.email);
    form.append("password", formData.password);
    form.append("role", formData.userType);
  
    try {
      const response = await axios.post('/auth/register', form);
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
                className={`type-button ${formData.userType === 'mentee' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, userType: 'mentee'})}
              >
                <img src="/mentee-icon.svg" alt="Mentee" className="type-icon" />
                <span>Sign Up as Mentee</span>
              </button>
              <button 
                type="button"
                className={`type-button ${formData.userType === 'mentor' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, userType: 'mentor'})}
              >
                <img src="/mentor-icon.svg" alt="Mentor" className="type-icon" />
                <span>Sign Up as Mentor</span>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
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
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
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