import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListRumah = () => {
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

  const handleDelete = (id) => {
    console.log("ID yang akan dihapus:", id);
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      axios
        .delete(`http://127.0.0.1:8000/api/perumahan/delete/${id}`)
        .then((response) => {
          console.log("Respons penghapusan:", response.data);
          setRumah(rumah.filter((rumah) => rumah.id !== id));
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
      <h2 className="text-center mb-4">Tabel Rumah</h2>
      <div className="text-center mb-4">
        <Link
          to="/tambahrumah"
          className="btn btn-primary"
          style={{ color: "white" }}
        >
          Tambah Rumah
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Nama Perumahan</th>
              <th>Alamat</th>
              <th>Harga</th>
              <th>Luas</th>
              <th>Deskripsi</th>
              <th>Kontak</th>
              <th>Gambar</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rumah.map((rumah, index) => (
              <tr key={rumah.id}>
                <td>{index + 1}</td>
                <td>{rumah.id}</td>
                <td>{rumah.nama_perumahan}</td>
                <td>{rumah.alamat}</td>
                <td>{rumah.harga}</td>
                <td>{rumah.luas}</td>
                <td>{rumah.deskripsi}</td>
                <td>{rumah.kontak}</td>
                <td>
                  <img
                    src={
                      rumah.gambar
                        ? `http://127.0.0.1:8000/storage/${rumah.gambar}`
                        : "https://via.placeholder.com/150"
                    }
                    alt={rumah.gambar || "No image available"}
                    className="img-thumbnail"
                    style={{ width: "2000px", height: "150px" }}
                  />
                </td>
                <td>
                  <div className="d-flex flex-column gap-2">
                    <Link
                      to={`/detailrumah/${rumah.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Detail
                    </Link>
                    <Link
                      to={`/editrumah/${rumah.id}`}
                      className="btn btn-success btn-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(rumah.id)}
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

export default ListRumah;
