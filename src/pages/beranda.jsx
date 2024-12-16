import React from "react";
import CustomNavbar from "../components/navbar";
import Footer from "../components/footer";
import Welcome from "../components/welcome";
import Kalimat from "../components/kalimat";
import CardFasilitas from "../components/cardfasilitas";
import { Container } from "react-bootstrap";

function Beranda() {
  return (
    <>
      <CustomNavbar />
      <Welcome />
      <Kalimat />
      {/* Fasilitas Section */}
      <section className="text-center my-5">
        <h1 style={{ color: "#211951" }}>Fasilitas</h1>
      </section>
      <Container className="my-5">
        <CardFasilitas />
      </Container>
      <Footer />
    </>
  );
}

export default Beranda;
