import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditRumah = () => {
  const [formData, setFormData] = useState({
    nama_perumahan: "",
    alamat: "",
    harga: "",
    luas: "",
    deskripsi: "",
    kontak: "",
    gambar: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/perumahan/show/${id}`)
      .then((response) => {
        const rumah = response.data.data;
        setFormData({
          nama_perumahan: rumah.nama_perumahan,
          alamat: rumah.alamat,
          harga: rumah.harga,
          luas: rumah.luas,
          deskripsi: rumah.deskripsi,
          kontak: rumah.kontak,
          gambar: rumah.gambar,
        });
        setImagePreview(`http://127.0.0.1:8000/storage/${rumah.gambar}`);
        setLoading(false);
      })
      .catch((err) => {
        setError("Rumah Not Found");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      gambar: file,
    }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nama_perumahan", formData.nama_perumahan);
    data.append("alamat", formData.alamat);
    data.append("harga", formData.harga);
    data.append("luas", formData.luas);
    data.append("deskripsi", formData.deskripsi);
    data.append("kontak", formData.kontak);

    if (formData.gambar instanceof File) {
      data.append("gambar", formData.gambar);
    }

    data.append("_method", "PUT");

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/perumahan/update/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // If the update is successful, navigate to the perumahanadmin page
      if (response.status === 200) {
        navigate("/perumahanadmin");  // Replace with the correct route for perumahanadmin
      }
    } catch (err) {
      console.error(err);
      setError("Gagal memperbarui data rumah.");
    }
  };

  if (loading) {
    return <div className="container text-center my-4">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Rumah</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        {/* Nama Perumahan */}
        <div className="mb-3">
          <label className="form-label">Nama Perumahan</label>
          <input
            type="text"
            name="nama_perumahan"
            value={formData.nama_perumahan}
            onChange={handleChange}
            className="form-control"
            placeholder="Masukkan Nama Perumahan"
            required
          />
        </div>

        {/* Alamat */}
        <div className="mb-3">
          <label className="form-label">Alamat</label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            className="form-control"
            placeholder="Masukkan Alamat"
            required
          />
        </div>

        {/* Harga */}
        <div className="mb-3">
          <label className="form-label">Harga</label>
          <input
            type="number"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            className="form-control"
            placeholder="Masukkan Harga"
            required
          />
        </div>

        {/* Luas */}
        <div className="mb-3">
          <label className="form-label">Luas</label>
          <input
            type="number"
            name="luas"
            value={formData.luas}
            onChange={handleChange}
            className="form-control"
            placeholder="Masukkan Luas"
            required
          />
        </div>

        {/* Deskripsi */}
        <div className="mb-3">
          <label className="form-label">Deskripsi</label>
          <textarea
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            className="form-control"
            placeholder="Masukkan Deskripsi"
            required
          />
        </div>

        {/* Kontak */}
        <div className="mb-3">
          <label className="form-label">Kontak</label>
          <input
            type="text"
            name="kontak"
            value={formData.kontak}
            onChange={handleChange}
            className="form-control"
            placeholder="Masukkan Kontak"
            required
          />
        </div>

        {/* Gambar */}
        <div className="mb-3">
          <label className="form-label">Gambar</label>
          <input
            type="file"
            name="gambar"
            onChange={handleFileChange}
            className="form-control"
            accept="image/*"
          />
        </div>

        {imagePreview && (
          <div className="mt-3">
            <img
              src={imagePreview}
              alt="Preview"
              className="img-fluid rounded"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-purple text-white font-bold py-2 px-4 rounded"
          style={{ backgroundColor: "#6f42c1" }}
        >
          Update Rumah
        </button>
      </form>
    </div>
  );
};

export default EditRumah;
