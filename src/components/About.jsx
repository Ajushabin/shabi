import React from 'react';
import '../Style/Anbiyangal.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../images/all-soul/1.png";
import Image4 from "../images/all-soul/image.png";
// Anbiyam 1
import Image12 from "../images/all-soul/1sec.jpeg";
import Image13 from "../images/all-soul/1tre.jpeg";


const About = () => {
  return (
    <Container className="anbiyangal-container mt-5">
      {/* Anbiyangal 1 */}
      <h1 className="section-title">அன்பியம்-1</h1>
      <p className="section-subtitle text-center">புனித சூசையப்பர் அன்பியம்</p>

      <Row className="align-items-center">
        {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
        <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
          {/* Circular Images */}
          <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">தலைவர்</h1>
              <p className="image-desc">தலைவர்</p>
            </div>
          </div>

          <div className="image-box d-flex align-items-center">
            <img src={Image12} alt="Image 2" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">செயலாளர்</h1>
              <p className="image-desc">செயலாளர்</p>
            </div>
          </div>

          <div className="image-box d-flex align-items-center">
            <img src={Image13} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">பொருளாளர்</h1>
              <p className="image-desc">பொருளாளர்</p>
            </div>
          </div>
        </Col>

        {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
        <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
          <img src={Image4} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">
            சூசையப்பர் வழியில் சேவை செய்வோம், சேவையால் சமூகத்தை ஒளிரச் செய்வோம்!
          </h1>
          <p className="rect-desc">
            This is the detailed description for the rectangular image. It provides more information about the content displayed.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
