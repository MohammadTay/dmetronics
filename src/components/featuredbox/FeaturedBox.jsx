// FeaturedBox.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedBox = () => {
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
          {/* Responsive Video */}
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Featured Video"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/your-video-id"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedBox;
