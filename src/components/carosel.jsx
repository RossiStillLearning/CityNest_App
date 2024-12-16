import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

// Pastikan kamu impor gambar dengan benar
import rumah1 from '../image/rumah1.jpeg';
import rumah2 from '../image/rumah2.jpeg';
import rumah3 from '../image/rumah3.webp';

function Carosel() {
  return (
    <Carousel style={{ maxWidth: '600px', margin: '100px auto 0 auto' }}> {/* Menambahkan margin atas */}
      {/* First Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rumah1}
          alt="First slide"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rumah2}
          alt="Second slide"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rumah3}
          alt="Third slide"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel;
