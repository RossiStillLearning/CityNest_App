import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import citynestImage from '../image/kota.png'; // Local image
import backgroundImage from '../image/bg3.jpg'; // Background image

function Welcome() {
  return (
    <Container  fluid style={{
      height: "100vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      margin: '50px auto 0 auto',
    }}>
      <Row className="w-100">
        <Col className="d-flex justify-content-center align-items-center">
          <h1 className="display-1 text-white fw-bold">Selamat Datang di CityNest</h1> {/* Bold text */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <img 
            src={citynestImage} 
            alt="Citynest" 
            className="img-fluid" 
            style={{ 
              backgroundColor: 'transparent',  /* Ensures no background color */
              opacity: 1 /* Ensures no unwanted transparency */
            }} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
