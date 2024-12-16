import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahRumah = () => {
  const [rumah, setRumah] = useState({
    nama_perumahan: "",
    alamat: "",
    harga: "",
    luas: "",
    deskripsi: "",
    kontak: "",
    gambar: null,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Hook untuk navigasi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRumah({
      ...rumah,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setRumah({
      ...rumah,
      gambar: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nama_perumahan", rumah.nama_perumahan);
    data.append("alamat", rumah.alamat);
    data.append("harga", rumah.harga);
    data.append("luas", rumah.luas);
    data.append("deskripsi", rumah.deskripsi);
    data.append("kontak", rumah.kontak);
    data.append("gambar", rumah.gambar);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/perumahan/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Rumah berhasil ditambahkan!");
      setError("");
      setRumah({
        nama_perumahan: "",
        alamat: "",
        harga: "",
        luas: "",
        deskripsi: "",
        kontak: "",
        gambar: null,
      });

      // Navigasi ke halaman adminpages
      navigate("/perumahanadmin");
    } catch (error) {
      console.error(error);
      setError("Terjadi kesalahan saat menambahkan rumah.");
      setMessage("");
    }
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "20px auto",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#333",
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
    textarea: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
      height: "100px",
    },
    fileInput: {
      border: "none",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#6a0dad",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      textAlign: "center",
      alignSelf: "center",
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
      <h1 style={styles.title}>Tambah Rumah</h1>
      {message && <p style={styles.successMessage}>{message}</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Nama Perumahan:</label>
        <input
          type="text"
          name="nama_perumahan"
          value={rumah.nama_perumahan}
          onChange={handleChange}
          style={styles.input}
          placeholder="Masukkan nama perumahan"
          required
        />

        <label style={styles.label}>Alamat:</label>
        <input
          type="text"
          name="alamat"
          value={rumah.alamat}
          onChange={handleChange}
          style={styles.input}
          placeholder="Masukkan alamat"
          required
        />

        <label style={styles.label}>Harga:</label>
        <input
          type="text"
          name="harga"
          value={rumah.harga}
          onChange={handleChange}
          style={styles.input}
          placeholder="Masukkan harga"
          required
        />

        <label style={styles.label}>Luas:</label>
        <input
          type="text"
          name="luas"
          value={rumah.luas}
          onChange={handleChange}
          style={styles.input}
          placeholder="Masukkan luas"
          required
        />

        <label style={styles.label}>Deskripsi:</label>
        <textarea
          name="deskripsi"
          value={rumah.deskripsi}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Masukkan deskripsi"
          required
        ></textarea>

        <label style={styles.label}>Kontak:</label>
        <input
          type="text"
          name="kontak"
          value={rumah.kontak}
          onChange={handleChange}
          style={styles.input}
          placeholder="Masukkan kontak"
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
          Tambah Rumah
        </button>
        <button
          type="button"
          style={styles.button}
          onClick={() => navigate("/perumahanadmin")}
        >
          Kembali ke Admin
        </button>
      </form>
    </div>
  );
};

export default TambahRumah;
