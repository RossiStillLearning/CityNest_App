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
      className="container-fluid d-flex flex-column"
      style={{ backgroundColor: "white", minHeight: "100vh" }}
    >
      <div className="row flex-grow-1 align-items-center">
        {/* Bagian Kiri (Teks Selamat Datang) */}
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start px-4 px-md-5">
          <h1 className="text-dark text-center text-lg-start" style={{ fontWeight: "bold" }}>
            CityNest
          </h1>
          <p
            className="text-muted text-center text-lg-start"
            style={{ fontSize: "1.2rem" }}
          >
            "CityNest" adalah gabungan kata "City" (kota) dan "Nest" (sarang),
            menggambarkan sebuah kota yang menyediakan hunian aman, nyaman, dan
            inklusif. Ini melambangkan tempat di mana penghuni dapat menemukan
            perumahan layak dalam lingkungan yang ramah dan berkelanjutan.
          </p>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <button
              onClick={handleLoginClick}
              className="btn btn-primary"
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
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-4 mt-lg-0">
          <img
            src={citynestImage}
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
