import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditWarisan = () => {
  const [formData, setFormData] = useState({
    nama_warisan: "",
    asal: "",
    gambar: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/warisan/show/${id}`)
      .then((response) => {
        const warisan = response.data.data;
        setFormData({
          nama_warisan: warisan.nama_warisan,
          asal: warisan.asal,
          gambar: warisan.gambar,
        });
        setImagePreview(`http://127.0.0.1:8000/storage/${warisan.gambar}`);
        setLoading(false);
      })
      .catch((err) => {
        setError("Warisan tidak ditemukan");
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
    setError(null);

    const data = new FormData();
    data.append("nama_warisan", formData.nama_warisan);
    data.append("asal", formData.asal);
    if (formData.gambar instanceof File) {
      data.append("gambar", formData.gambar);
    }
    data.append("_method", "PUT");

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/warisan/update/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/warisanbudayaadmin");
    } 
  }catch (err) {
      const errorMessage =
        err.response?.data?.errors?.flat()?.join(", ") ||
        err.response?.data?.message ||
        "Gagal memperbarui warisan";
      setError(errorMessage);
    }
  };

  if (loading) {
    return <div className="container text-center my-4">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Warisan</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        {/* Nama Warisan */}
        <div className="mb-3">
          <label className="form-label">Nama Warisan</label>
          <input
            type="text"
            name="nama_warisan"
            value={formData.nama_warisan}
            onChange={handleChange}
            className="form-control"
            placeholder="Masukkan Nama Warisan"
            required
          />
        </div>

        {/* Asal */}
        <div className="mb-3">
          <label className="form-label">Asal</label>
          <input
            type="text"
            name="asal"
            value={formData.asal}
            onChange={handleChange}
            className="form-control"
            placeholder="Masukkan Asal Warisan"
            required
          />
        </div>

        {/* Gambar */}
        <div className="mb-3">
          <label className="form-label">Gambar</label>
          {imagePreview && (
            <div className="mb-3">
              <img
                src={imagePreview}
                alt="Preview"
                className="img-thumbnail"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          )}
          <input
            type="file"
            name="gambar"
            onChange={handleFileChange}
            className="form-control"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-between">
          <button
            type="button"
            onClick={() => navigate("/warisanbudayaadmin")}
            className="btn btn-secondary"
          >
            Kembali
          </button>
          <button type="submit" className="btn btn-primary">
            Update Warisan
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditWarisan;
