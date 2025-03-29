import React from 'react';
import '../Style/Anbiyangal.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../images/all-soul/1.png";
import Image2 from "../images/all-soul/2.png";
import Image3 from "../images/all-soul/3.png";
import Image4 from "../images/all-soul/image.png";
//anbiyam 1
import Image12 from "../images/all-soul/1sec.jpeg";
import Image13 from "../images/all-soul/1tre.jpeg";
// import Image13 from "../images/all-soul/1tre.jpeg";
//abbiyam 4
import Image4dp from "../images/all-soul/anbiyam4.png";
import Image41 from "../images/all-soul/4head.png";
import Image42 from "../images/all-soul/4sec.png";
import Image43 from "../images/all-soul/4tre.png";
//anbiyam 6
import Image61 from "../images/all-soul/6head.png";
import Image63 from "../images/all-soul/6tre.png";

// Rectangular Image


const Anbiyangal = () => {
return (
<>
{/* anbiyangal-1 */}
{/* anbiyangal-1 */}
<Container className="anbiyangal-container mt-5">
<h1 className="section-title">அன்பியம்-1</h1>
<p className="section-subtitle text-center">புனித சூசையப்பர் அன்பியம்</p>
<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
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
{/* ... rectangular image content ... */}
<img src={Image4} alt="Rectangular Image" className="rect-img " />
<h1 className="rect-title">சூசையப்பர் வழியில் சேவை செய்வோம்,சேவையால் சமூகத்தை ஒளிரச் செய்வோம்!"</h1>
<p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
</Col>
</Row>
</Container>

{/* anbiyangal-2 */}

<Container className="anbiyangal-container2">
<h1 className="section-title">அன்பியம்-2</h1>
<p className="section-subtitle text-center">சதா சகாய மாதா அன்பியம்</p>
<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
<div className="image-box d-flex align-items-center">
<img src={Image1} alt="Image 1" className="circle-img" />
<div className="text-content">
<h1 className="image-title">தலைவர்</h1>
<p className="image-desc">This is the description for Image 1.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">This is the description for Image 2.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
<p className="image-desc">This is the description for Image 3.</p>
</div>
</div>
</Col>

{/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
<Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
{/* ... rectangular image content ... */}
<img src={Image4} alt="Rectangular Image" className="rect-img" />
<h1 className="rect-title">சகாய மாதாவின் அருள் வழி,
அன்பும் சேவையும் வாழ்வின் ஒளி!"</h1>
<p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
</Col>
</Row>
</Container>
{/* anbiyangal-3 */}
<Container className="anbiyangal-container3">
<h1 className="section-title">அன்பியம்-3</h1>
<p className="section-subtitle text-center">விண்ணரசி அன்பியம்</p>
<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
<div className="image-box d-flex align-items-center">
<img src={Image1} alt="Image 1" className="circle-img" />
<div className="text-content">
<h1 className="image-title">தலைவர்</h1>
<p className="image-desc">This is the description for Image 1.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">This is the description for Image 2.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
<p className="image-desc">This is the description for Image 3.</p>
</div>
</div>
</Col>

{/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
<Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
{/* ... rectangular image content ... */}
<img src={Image4dp} alt="Rectangular Image" className="rect-img" />
<h1 className="rect-title">விண்ணரசியின் வழியில் நடப்போம்,
அன்பும் அர்ப்பணிப்பும் வாழ்வாக்குவோம்!"</h1>
<p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
</Col>
</Row>
</Container>
{/* anbiyangal-4 */}
<Container className="anbiyangal-container4">
<h1 className="section-title">அன்பியம்-4</h1>
<p className="section-subtitle text-center">குழந்தை இயேசு அன்பியம்</p>

<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
<div className="image-box d-flex align-items-center">
<img src={Image41} alt="Image 1" className="circle-img" />
<div className="text-content">
<h1 className="image-title">திருமதி.S. ஷைனி</h1>
<p className="image-desc">தலைவர்</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image42} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">திருமதி.D. S. மோனிஷா</h1>
<p className="image-desc">செயலாளர்</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image43} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">திருமதி.V. விஜயா</h1>
<p className="image-desc">பொருளாளர்</p>
</div>
</div>
</Col>

{/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
<Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
{/* ... rectangular image content ... */}
<img src={Image4dp} alt="Rectangular Image" className="rect-img" />
<h1 className="rect-title">குழந்தை யேசுவின் வழியில் அன்பும் சேவையும்!
நம்பிக்கையுடன் வாழ்ந்து, மகிழ்ச்சியை பரப்புவோம்!"</h1><br />
<p className="rect-desc">நடைபெறும் நேரம் ஞாயிறு மாலை 6.00  மணி</p>
</Col>
</Row>
</Container>
{/* anbiyangal-5 */}
<Container className="anbiyangal-container5">
<h1 className="section-title">அன்பியம்-5</h1>
<p className="section-subtitle text-center">அன்னை தெரேசா அன்பியம்</p>
<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
<div className="image-box d-flex align-items-center">
<img src={Image1} alt="Image 1" className="circle-img" />
<div className="text-content">
<h1 className="image-title">தலைவர்</h1>
<p className="image-desc">This is the description for Image 1.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">This is the description for Image 2.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
<p className="image-desc">This is the description for Image 3.</p>
</div>
</div>
</Col>

{/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
<Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
{/* ... rectangular image content ... */}
<img src={Image4} alt="Rectangular Image" className="rect-img" />
<h1 className="rect-title">அன்பின் சேவை, மனிதநேய வாழ்வு!
இரக்கம் மூலம் கடவுளை நேசி!"</h1>
<p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
</Col>
</Row>
</Container>
{/* anbiyangal-6 */}
<Container className="anbiyangal-container6">
<h1 className="section-title">அன்பியம்-6</h1>
<p className="section-subtitle text-center">புனித பிரான்சிஸ் சவேரியார் அன்பியம்</p>
<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
<div className="image-box d-flex align-items-center">
<img src={Image61} alt="Image 1" className="circle-img" />
<div className="text-content">
<h1 className="image-title">திருமதி. ராணி</h1>
<p className="image-desc">தலைவர்</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">செயலாளர்</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image63} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">திருமதி.மேரி ஸ்டெல்லா</h1>
<p className="image-desc">பொருளாளர்</p>
</div>
</div>
</Col>

{/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
<Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
{/* ... rectangular image content ... */}
<img src={Image4} alt="Rectangular Image" className="rect-img" />
<h1 className="rect-title">எல்லா எல்லைகளையும் கடந்து, அன்பின் சேவையில்!"</h1>
<p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
</Col>
</Row>
</Container>
{/* anbiyangal-7 */}
<Container className="anbiyangal-container7 mb-5">
<h1 className="section-title">அன்பியம்-7</h1>
<p className="section-subtitle text-center">புனித அந்தோனியார் அன்பியம்</p>
<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
<div className="image-box d-flex align-items-center">
<img src={Image1} alt="Image 1" className="circle-img" />
<div className="text-content">
<h1 className="image-title">தலைவர்</h1>
<p className="image-desc">தலைவர்</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">செயலாளர்</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
<p className="image-desc">பொருளாளர்</p>
</div>
</div>
</Col>

{/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
<Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
{/* ... rectangular image content ... */}
<img src={Image4} alt="Rectangular Image" className="rect-img" />
<h1 className="rect-title">அன்பும் உழைப்பும் அந்தோணியார் வழி!"</h1>
<p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
</Col>
</Row>
</Container>
</>
);
}

export default Anbiyangal;