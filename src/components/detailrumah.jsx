import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailRumah = () => {
  const { id } = useParams();
  const [rumah, setRumah] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/perumahan/show/${id}`)
      .then((response) => {
        const rumahData = response.data.data;
        setRumah({
          nama_perumahan: rumahData.nama_perumahan,
          alamat: rumahData.alamat,
          harga: rumahData.harga,
          luas: rumahData.luas,
          deskripsi: rumahData.deskripsi,
          kontak: rumahData.kontak,
          gambar: rumahData.gambar,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError("Rumah Not Found");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ backgroundColor: "#f5f5f5", color: "#000", borderRadius: "10px", padding: "20px" }}>
      <h2 className="text-center mb-4 text-primary">Detail Rumah</h2>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card shadow-lg" style={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#ddd", width: "80%", margin: "0 auto" }}>
            <div className="card-body" style={{ padding: "30px" }}>
              <h4 className="card-title text-success text-center">{rumah.nama_perumahan}</h4>
              <p className="card-text" style={{ color: "#000" }}><strong>Alamat:</strong> {rumah.alamat}</p>
              <p className="card-text" style={{ color: "#000" }}><strong>Harga:</strong> {rumah.harga}</p>
              <p className="card-text" style={{ color: "#000" }}><strong>Luas:</strong> {rumah.luas}</p>
              <p className="card-text" style={{ color: "#000" }}><strong>Deskripsi:</strong> {rumah.deskripsi}</p>
              <p className="card-text" style={{ color: "#000" }}><strong>Kontak:</strong> {rumah.kontak}</p>

              {rumah.gambar && (
                <div className="text-center mt-4">
                  <strong style={{ color: "#000" }}>Gambar:</strong>
                  <img
                    src={`http://127.0.0.1:8000/storage/${rumah.gambar}`}
                    alt="Gambar Rumah"
                    className="img-fluid rounded shadow"
                    style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRumah;
