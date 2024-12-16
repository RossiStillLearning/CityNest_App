import React from "react";
import { useNavigate } from "react-router-dom";
import citynestImage from '../image/kota.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/loginadmin"); // Ganti dengan rute login yang sesuai
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "white", height: "100vh" }}
    >
      <div className="row h-100">
        {/* Bagian Kiri (Teks Selamat Datang) */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-5">
          <h1 className="text-dark" style={{ fontWeight: "bold" }}>
            CityNest
          </h1>
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            "CityNest" adalah gabungan kata "City" (kota) dan "Nest" (sarang),
            menggambarkan sebuah kota yang menyediakan hunian aman, nyaman, dan
            inklusif. Ini melambangkan tempat di mana penghuni dapat menemukan
            perumahan layak dalam lingkungan yang ramah dan berkelanjutan.
          </p>
          <button
            onClick={handleLoginClick}
            className="btn"
            style={{
              backgroundColor: "#6f42c1",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Login
          </button>
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={citynestImage} // Ganti dengan gambar yang sesuai
            alt="Landing Image"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
