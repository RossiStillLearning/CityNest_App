import React from "react";
import CustomNavbar from "../components/navbar";
import Footer from "../components/footer";
import DetailRumah from "../components/detailrumah";

function Rumah() {
    return (
        <>
          <CustomNavbar />
          <DetailRumah />
          <Footer />  
        </>
    );
}

export default Rumah;