import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  heading: {
    color: "#4f46e5",
    fontSize: "1.75rem",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb",
    transition: "box-shadow 0.3s ease",
  },
  cardHover: {
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
  paragraph: {
    margin: "0.75rem 0",
    lineHeight: "1.6",
  },
  strong: {
    color: "#4f46e5",
  },
  image: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    marginTop: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    transition: "transform 0.3s ease",
  },
};

const DetailWarisan = () => {
  const { id } = useParams();
  const [warisan, setWarisan] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/warisan/show/${id}`)
      .then((response) => {
        const warisanData = response.data.data;
        setWarisan({
          nama_warisan: warisanData.nama_warisan,
          asal: warisanData.asal,
          gambar: warisanData.gambar,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError("Warisan tidak ditemukan");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Tabel Warisan</h2>
      <div style={styles.card}>
        <p style={styles.paragraph}>
          <strong style={styles.strong}>Nama Warisan</strong>: {warisan.nama_warisan}
        </p>
        <p style={styles.paragraph}>
          <strong style={styles.strong}>Asal</strong>: {warisan.asal}
        </p>
        {warisan.gambar && (
          <div>
            <strong style={styles.strong}>Gambar:</strong>
            <img
              src={`http://127.0.0.1:8000/storage/${warisan.gambar}`}
              alt={warisan.gambar}
              style={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailWarisan;
