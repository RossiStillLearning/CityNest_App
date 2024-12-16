import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../style/Footer.css"; // Mengimpor file CSS eksternal untuk styling tambahan

export default function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: "#211951", color: "#fff" }}
      className="text-center text-lg-start text-muted"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#fff" }}
              >
                <MDBIcon icon="gem" className="me-3" />
                CityNest
              </h6>
              <p style={{ color: "#fff" }}>
                "CityNest" adalah nama yang menggabungkan dua kata: "City" yang
                berarti kota, dan "Nest" yang berarti sarang atau tempat
                tinggal. Nama ini mencerminkan konsep sebuah kota yang
                menyediakan tempat tinggal yang aman, nyaman, dan inklusif bagi
                semua penghuninya.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#fff" }}
              >
                Produk
              </h6>
              <p>
                <a href="#!" className="footer-link">
                  Rumah
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Komplek
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Rumah Subsidi
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Budaya
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#fff" }}
              >
                Tautan
              </h6>
              <p>
                <a href="#!" className="footer-link">
                  Harga
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Order
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Help
                </a>
              </p>
            </MDBCol>

            

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#fff" }}
              >
                Kontak
              </h6>
              <p style={{ color: "#fff" }}>
                <MDBIcon icon="home" className="me-2" />
                Kabupaten Madiun
              </p>
              <p style={{ color: "#fff" }}>
                <MDBIcon icon="envelope" className="me-3" />
                CityNest@gmail.com
              </p>
              <p style={{ color: "#fff" }}>
                <MDBIcon icon="phone" className="me-3" />
                +62 896 2054 1708
              </p>
              <p style={{ color: "#fff" }}>
                <MDBIcon icon="print" className="me-3" />
                +62 123 4567 8910
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section
              className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
              style={{ color: "#fff" }}
            >
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href="" className="me-4 text-reset footer-link">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="" className="me-4 text-reset footer-link">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="" className="me-4 text-reset footer-link">
                  <MDBIcon fab icon="google" />
                </a>
                <a href="" className="me-4 text-reset footer-link">
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href="" className="me-4 text-reset footer-link">
                  <MDBIcon fab icon="linkedin" />
                </a>
                <a href="" className="me-4 text-reset footer-link">
                  <MDBIcon fab icon="github" />
                </a>
              </div>
            </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "#fff" }}
      >
        © 2024 Copyright:
        <a
          className="text-reset fw-bold footer-link"
          href="https://mdbootstrap.com/"
        >
          Citynest.com
        </a>
      </div>
    </MDBFooter>
  );
}
