// FeaturedBox.js
import React from 'react';
import Slider from '../slider/Slider';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedImage = () => {
  // Customize slick slider settings as needed
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          {/* Paragraph */}
          <p>
            This is the featured content paragraph. You can customize this text
            as needed.
          </p>
        </Col>
        <Col xs={12} md={6}>
       <Slider/>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedImage;
