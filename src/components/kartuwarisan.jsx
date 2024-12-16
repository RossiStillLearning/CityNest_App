import React, { useState, useEffect } from "react";
import axios from "axios";

const KartuWarisan = () => {
  const [warisan, setWarisan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/warisan/show")
      .then((response) => {
        console.log("Data diterima:", response.data.data);
        setWarisan(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error API:", error);
        setError("Data warisan tidak ditemukan.");
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
      <h2 className="text-center mb-4">Warisan</h2>
      <div className="row">
        {warisan.map((warisan) => (
          <div className="col-md-4 mb-4" key={warisan.id}>
            <div className="card shadow-sm bg-secondary text-white">
              <img
                src={
                  warisan.gambar
                    ? `http://127.0.0.1:8000/storage/${warisan.gambar}`
                    : "https://via.placeholder.com/150"
                }
                className="card-img-top"
                alt={warisan.gambar || "No Image available"}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{warisan.nama_warisan}</h5>
                <p className="card-text">Asal: {warisan.asal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KartuWarisan;
