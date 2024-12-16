import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../image/Group 2.png';
import '../style/Login.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [notification, setNotification] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateEmail = (email) => email.endsWith('@admin.com');

  const handleRegister = async (e) => {
    e.preventDefault();
    setNotification('');
    setError('');

    if (!validateEmail(formData.email)) {
      setError('Email must end with @admin.com!');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/admin/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setNotification('Registration successful! Redirecting to Login Page...');
      setTimeout(() => navigate('/loginadmin'), 2000);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || 'An error occurred during registration.';
      setError(errorMsg);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row register-container">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="logo">
            <img src={logo} alt="CityNest Logo" />
          </div>
        </div>
        <div className="col-md-6 register-form shadow p-4">
          <h2 className="text-center mb-4">Register</h2>
          {notification && <div className="alert alert-success">{notification}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleRegister}>
            <div className="form-group mb-3">
              <label htmlFor="name">
                <i className="bi bi-person"></i> Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">
                <i className="bi bi-envelope"></i> Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">
                <i className="bi bi-lock"></i> Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">
                <i className="bi bi-lock"></i> Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Register
            </button>
          </form>
          <div className="text-center mt-3">
            <span>
              Already have an account? <a href="/loginadmin">Login</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
