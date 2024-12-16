import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import axios
import logo from "../image/Group 2.png"; // Import your logo image
import "../style/Login.css"; // Import your custom styles

const Login = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [notification, setNotification] = useState(""); // State for notification
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  // Event handler for login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/admin/login", {
        email,
        password,
      });

      // Simpan token autentikasi ke localStorage
      localStorage.setItem("authToken", response.data.token);

      // Set notification and redirect
      setNotification("Login successful! Redirecting to Admin Page...");
      setError(""); // Clear error message if any
      setTimeout(() => {
        navigate("/adminpages"); // Redirect to admin page
      }, 2000);
    } catch (err) {
      // Handle login errors
      setError("Login failed. Please check your email and password.");
      setNotification(""); // Clear notification if any
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row login-container">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="logo">
            <img src={logo} alt="CityNest Logo" />
            <h2 className="logo-text"></h2>
          </div>
        </div>
        <div className="col-md-6 login-form shadow p-4">
          <h2 className="text-center mb-4">Login</h2>
          {/* Notification */}
          {notification && <div className="alert alert-success">{notification}</div>}
          {/* Error message */}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="email">
                <i className="bi bi-person"></i> Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
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
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state on input change
                required
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <span>
              Belum Punya Akun? <a href="/registerpage">Buat Akun</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
