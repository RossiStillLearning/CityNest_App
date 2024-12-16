import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaMapMarkerAlt } from "react-icons/fa"; // Icon untuk lokasi
import { useParams, useNavigate } from "react-router-dom"; // Navigasi dan pengambilan parameter
import axios from "axios";

const CardPerumahan = () => {
  const { id } = useParams(); // Mengambil parameter ID dari URL
  const navigate = useNavigate(); // Untuk navigasi
  const [rumah, setPerumahan] = useState(null); // Data perumahan
  const [loading, setLoading] = useState(true); // Status loading
  const [error, setError] = useState(null); // Status error

  useEffect(() => {
    // Fetch data perumahan dari API
    axios
      .get(`http://127.0.0.1:8000/api/perumahan/show`)
      .then((response) => {
        setPerumahan(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Data perumahan tidak ditemukan.");
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
    <Card style={{ width: "18rem", margin: "auto", marginTop: "20px" }}>
      <Card.Img
        variant="top"
        src={`http://127.0.0.1:8000/storage/${rumah.gambar}`}
        alt={`rumah.gambar`}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{rumah.nama_perumahan}</Card.Title>
        <Card.Text>
          <FaMapMarkerAlt style={{ color: "red" }} /> {rumah.alamat}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(`/detailrumah/${rumah.id}`)}
        >
          Lihat Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPerumahan;
