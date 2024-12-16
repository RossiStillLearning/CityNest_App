import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";  // Importing the address icon

const KartuRumah = () => {
  const [rumah, setRumah] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/perumahan/show")
      .then((response) => {
        console.log("Data diterima:", response.data.data);
        setRumah(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error API:", error);
        setError("Data rumah tidak ditemukan.");
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <div className="text-center my-4">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Daftar Rumah</h2>
      <div className="row">
        {rumah.map((rumah) => (
          <div className="col-md-4 mb-4" key={rumah.id}>
            <div className="card shadow-sm bg-secondary text-white">
              <img
                src={
                  rumah.gambar
                    ? `http://127.0.0.1:8000/storage/${rumah.gambar}`
                    : "https://via.placeholder.com/150"
                }
                className="card-img-top"
                alt={rumah.gambar || "No image available"}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{rumah.nama_perumahan}</h5>
                <p className="card-text">
                  <FaMapMarkerAlt /> {rumah.alamat}
                </p>
                <div className="d-flex flex-column gap-2">
                  <Link
                    to={`/detailrumah/${rumah.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KartuRumah;
