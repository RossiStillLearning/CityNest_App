import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TabelWarisan = () => {
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

  const handleDelete = (id) => {
    console.log("ID yang akan dihapus:", id);
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      axios
        .delete(`http://127.0.0.1:8000/api/warisan/delete/${id}`)
        .then((response) => {
          console.log("Respons penghapusan:", response.data);
          setWarisan(warisan.filter((warisan) => warisan.id !== id));
          alert("Data berhasil dihapus!");
        })
        .catch((error) => {
          console.error("Gagal menghapus data:", error);
          alert("Gagal menghapus data!");
        });
    }
  };

  if (loading) {
    return <div className="text-center my-4">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tabel Warisan</h2>
      {/* Button for adding new warisan */}
      <div className="text-center mb-4">
        <Link
          to="/tambahwarisan"
          className="btn btn-primary"
          style={{ color: "white" }}
        >
          Tambah Warisan
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>ID Warisan</th>
              <th>Nama Warisan</th>
              <th>Asal</th>
              <th>Gambar</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {warisan.map((warisan, index) => (
              <tr key={warisan.id}>
                <td>{index + 1}</td>
                <td>{warisan.id}</td>
                <td>{warisan.nama_warisan}</td>
                <td>{warisan.asal}</td>
                <td>
                  <img
                    src={
                      warisan.gambar
                        ? `http://127.0.0.1:8000/storage/${warisan.gambar}`
                        : "https://via.placeholder.com/150"
                    }
                    alt={warisan.gambar || "No Image available"}
                    className="img-thumbnail"
                    style={{ width: "200px", height: "100px" }}
                  />
                </td>
                <td>
                  <div className="d-flex flex-column gap-2">
                    <Link
                      to={`/detailwarisan/${warisan.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Detail
                    </Link>
                    <Link
                      to={`/editwarisan/${warisan.id}`}
                      className="btn btn-success btn-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(warisan.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelWarisan;
