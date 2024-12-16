import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // For navigation
import { FaTachometerAlt, FaHome, FaLandmark, FaSignInAlt } from "react-icons/fa";
import logo from "../image/logoputih 1.png"; // Import your logo image
import axios from "axios";


const Sidebar = () => {
  const navigate = useNavigate();

  // Inline styles for the hover effect
  const linkStyle = {
    padding: "8px",
    borderRadius: "5px",
    display: "flex", // Flex for icon and text alignment
    alignItems: "center",
    gap: "10px", // Space between icon and text
    transition: "background-color 0.3s ease",
  };

  const linkHoverStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent box effect
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/auth/logout", // Backend logout endpoint
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Pass token for logout
          },
        }
      );
    } catch (error) {
      console.error("Logout failed:", error);
    }
  
    // Remove token and redirect
    localStorage.removeItem("authToken");
    navigate("/landingadmin");
  };

  return (
    <div
      className="bg-dark text-white sidebar p-3"
      style={{
        height: "100vh", // Full height of the screen
        minHeight: "100vh", // Ensures it fills the entire screen height
        width: "300px", // Increased width for sidebar
        display: "flex", // Flexbox for content alignment
        flexDirection: "column", // Align items in a column
        overflowY: "auto", // Allow vertical scrolling if content is too long
      }}
    >
      {/* Logo Section */}
      <div className="text-center mb-4">
        <img src={logo} alt="Logo" style={{ width: "150px", borderRadius: "8px" }} />
      </div>
      <h4>Admin Dashboard</h4>
      <Nav defaultActiveKey="/home" className="flex-column mt-4">
        {/* Navigation Links with Hover Effect */}
        <Nav.Link
          href="/adminpages"
          className="text-white"
          style={linkStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <FaTachometerAlt /> Dashboard
        </Nav.Link>
        <Nav.Link
          href="/perumahanadmin"
          className="text-white"
          style={linkStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <FaHome /> Perumahan
        </Nav.Link>
        <Nav.Link
          href="/warisanbudayaadmin"
          className="text-white"
          style={linkStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <FaLandmark /> Warisan Budaya
        </Nav.Link>
        <Nav.Link
          onClick={handleLogout} // Call logout handler here
          className="text-white"
          style={linkStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <FaSignInAlt /> Logout
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
