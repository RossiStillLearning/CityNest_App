import React, { useState, useEffect } from "react";
import axios from "axios";

const CardJumlahWarisan = () => {
  const [jumlahWarisan, setJumlahWarisan] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/warisan/show")
      .then((response) => {
        console.log("Data diterima:", response.data.data);
        setJumlahWarisan(response.data.data.length); // Hitung jumlah data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error API:", error);
        setError("Gagal memuat jumlah data rumah.");
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
      <div className="card text-center bg-dark text-white">
        <div className="card-header bg-secondary">
          <h4>Jumlah Data Warisan</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title text-light">{jumlahWarisan}</h1>
          <p className="card-text">Jumlah total data warisan yang tersedia.</p>
        </div>
      </div>
    </div>
  );
};

export default CardJumlahWarisan;
