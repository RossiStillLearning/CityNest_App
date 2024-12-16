import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const TambahWarisan = () => {
  const [warisan, setWarisan] = useState({
    nama_warisan: "",
    asal: "",
    gambar: null,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarisan({
      ...warisan,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setWarisan({
      ...warisan,
      gambar: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nama_warisan", warisan.nama_warisan);
    data.append("asal", warisan.asal);
    data.append("gambar", warisan.gambar);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/warisan/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Warisan berhasil ditambahkan!");
      setError("");
      setWarisan({
        nama_warisan: "",
        asal: "",
        gambar: null,
      });

      // Navigate to warisanbudayaadmin page after success
      navigate("/warisanbudayaadmin");
    } catch (error) {
      console.error(error);
      setError("Terjadi kesalahan saat menambahkan warisan.");
      setMessage("");
    }
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "auto",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    title: {
      textAlign: "center",
      color: "#333",
      fontSize: "24px",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "5px",
      color: "#555",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    fileInput: {
      border: "none",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#6A0DAD",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      margin: "10px auto",
    },
    successMessage: {
      color: "green",
      textAlign: "center",
    },
    errorMessage: {
      color: "red",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tambah Warisan</h1>
      {message && <p style={styles.successMessage}>{message}</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Nama Warisan:</label>
        <input
          type="text"
          name="nama_warisan"
          value={warisan.nama_warisan}
          onChange={handleChange}
          style={styles.input}
          placeholder="Masukkan nama warisan"
          required
        />

        <label style={styles.label}>Asal:</label>
        <input
          type="text"
          name="asal"
          value={warisan.asal}
          onChange={handleChange}
          style={styles.input}
          placeholder="Masukkan asal"
          required
        />

        <label style={styles.label}>Gambar:</label>
        <input
          type="file"
          name="gambar"
          onChange={handleFileChange}
          style={styles.fileInput}
          required
        />

        <button type="submit" style={styles.button}>
          Tambah Warisan
        </button>
        <button
          type="button"
          style={styles.button}
          onClick={() => navigate("/warisanbudayaadmin")}
        >
          Kembali ke Admin
        </button>
      </form>
    </div>
  );
};

export default TambahWarisan;
