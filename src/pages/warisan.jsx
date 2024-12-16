import React from "react";
import CustomNavbar from "../components/navbar";
import Footer from "../components/footer";
import "../style/warisan.css";
import KartuWarisan from "../components/kartuwarisan";

function Warisan() {
  return (
    <>
      <CustomNavbar />
      <KartuWarisan />
      <Footer />
    </>
  );
}

export default Warisan;
