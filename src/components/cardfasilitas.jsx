import React from "react";

function CardFasilitas() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <div className="d-flex justify-content-center my-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-center p-4 shadow-sm" style={{ borderRadius: "15px" }}>
              <div className="icon mb-3">
                <i className="fas fa-money-bill fa-3x" style={{ color: "#7c4dff" }}></i>
              </div>
              <h5 className="card-title mb-3">Harga Terjangkau</h5>
              <p className="card-text text-muted">
              Nikmati hunian berkualitas dengan harga yang sesuai dengan anggaran Anda, tanpa mengorbankan kenyamanan dan fasilitas terbaik.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-4 shadow-sm" style={{ borderRadius: "15px" }}>
              <div className="icon mb-3">
                <i className="fas fa-globe fa-3x" style={{ color: "#7c4dff" }}></i>
              </div>
              <h5 className="card-title mb-3">Lingkungan Nyaman</h5>
              <p className="card-text text-muted">
              Rasakan suasana asri dengan ruang terbuka hijau, tata ruang teratur, dan fasilitas lengkap di sekitar Anda untuk menunjang kualitas hidup.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-4 shadow-sm" style={{ borderRadius: "15px" }}>
              <div className="icon mb-3">
                <i className="fas fa-shield-alt fa-3x" style={{ color: "#7c4dff" }}></i>
              </div>
              <h5 className="card-title mb-3">Tempat Aman</h5>
              <p className="card-text text-muted">
              Tinggal dengan tenang di area yang dilengkapi sistem keamanan 24/7, komunitas ramah, dan bebas dari risiko bencana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFasilitas;
