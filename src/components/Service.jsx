import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Service.css";
import Image1 from "../images/service/1.png";
import Image2 from "../images/service/2.png";
import Image3 from "../images/service/3.png";
import Image4 from "../images/service/4.png";
import Image5 from "../images/service/5.png";
import Imagebr from "../images/service/br.jpeg";
import Image6 from "../images/service/6.jpeg";


const Service = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/history");
  };

  return (
    <div className="service-container my-5">
      <div className="row align-items-center my-5">
        {/* Profile Image */}
        <div className="col-md-4 text-center">
          <img src={Image1} alt="Profile" className="img-fluid profile-image" />
        </div>

        {/* Personal Information */}
        <div className="col-md-8">
          <h2 className="service-history-heading">Fr. Anish</h2>
          <p><strong>Priest ID:</strong> RCDK149</p>
          <p><strong>Date of Birth:</strong> 03.07.1994</p>
          <p><strong>Place of Birth:</strong> Kamplar</p>
          <p><strong>Date of Ordination:</strong> 14.04.2024</p>
          <p><strong>Ministering At:</strong> Co-Pastor, Mathiravilai</p>
          <p><strong>Address:</strong> Church of Our Lady of Assumption, Mathiravilai</p>
          <p><strong>Email:</strong> anishkuz94@gmail.com</p>
        </div>
      </div>
      {/* Image-2 */}
      <div className="row align-items-center my-5">
        {/* Profile Image */}
        <div className="col-md-4 text-center">
          <img src={Image2} alt="Profile" className="img-fluid profile-image" />
        </div>

        {/* Personal Information */}
        <div className="col-md-8">
          <h2 className="service-history-heading">Fr. Alphonse</h2>
          <p><strong>Priest ID:</strong> RCDK149</p>
          <p><strong>Date of Birth:</strong> 03.07.1994</p>
          <p><strong>Place of Birth:</strong> Kamplar</p>
          <p><strong>Date of Ordination:</strong> 14.04.2024</p>
          <p><strong>Ministering At:</strong> Bhagalpur diocese </p>
          <p><strong>Address:</strong> Church of Our Lady of Assumption, Mathiravilai</p>
          <p><strong>Email:</strong> anishkuz94@gmail.com</p>
        </div>
      </div>
      {/* Images-5 */}
      <div className="row align-items-center my-5">
        {/* Profile Image */}
        <div className="col-md-4 text-center">
          <img src={Imagebr} alt="Profile" className="img-fluid profile-image" />
        </div>

        {/* Personal Information */}
        <div className="col-md-8">
          <h2 className="service-history-heading">Br Maria Simson</h2>
          <p><strong>Priest ID:</strong> RCDK149</p>
          <p><strong>Date of Birth:</strong> 03.07.1994</p>
          <p><strong>Place of Birth:</strong> Kamplar</p>
          <p><strong>Date of Ordination:</strong> 14.04.2024</p>
          <p><strong>Ministering At:</strong> Co-Pastor, Mathiravilai</p>
          <p><strong>Address:</strong> Church of Our Lady of Assumption, Mathiravilai</p>
          <p><strong>Email:</strong> anishkuz94@gmail.com</p>
        </div>
      </div>
      {/* Image-3 */}
      <div className="row align-items-center my-5">
        {/* Profile Image */}
        <div className="col-md-4 text-center">
          <img src={Image3} alt="Profile" className="img-fluid profile-image" />
        </div>
      
        {/* Personal Information */}
        <div className="col-md-8">
          <h2 className="service-history-heading">Sr Ezhil</h2>
          <p><strong>Priest ID:</strong> RCDK149</p>
          <p><strong>Date of Birth:</strong> 03.07.1994</p>
          <p><strong>Place of Birth:</strong> Kamplar</p>
          <p><strong>Date of Ordination:</strong> 14.04.2024</p>
          <p><strong>Ministering At:</strong> Co-Pastor, Mathiravilai</p>
          <p><strong>Address:</strong> Church of Our Lady of Assumption, Mathiravilai</p>
          <p><strong>Email:</strong> anishkuz94@gmail.com</p>
        </div>
      </div>
      {/* Images-4 */}
      <div className="row align-items-center my-5">
        {/* Profile Image */}
        <div className="col-md-4 text-center">
          <img src={Image4} alt="Profile" className="img-fluid profile-image" />
        </div>

        {/* Personal Information */}
        <div className="col-md-8">
          <h2 className="service-history-heading">Sr Crystal shyla</h2>
          <p><strong>Priest ID:</strong> RCDK149</p>
          <p><strong>Date of Birth:</strong> 03.07.1994</p>
          <p><strong>Place of Birth:</strong> Kamplar</p>
          <p><strong>Date of Ordination:</strong> 14.04.2024</p>
          <p><strong>Ministering At:</strong> Co-Pastor, Mathiravilai</p>
          <p><strong>Address:</strong> Church of Our Lady of Assumption, Mathiravilai</p>
          <p><strong>Email:</strong> anishkuz94@gmail.com</p>
        </div>
      </div>
      {/* Images-5 */}
      <div className="row align-items-center my-5">
        {/* Profile Image */}
        <div className="col-md-4 text-center">
          <img src={Image5} alt="Profile" className="img-fluid profile-image" />
        </div>

        {/* Personal Information */}
        <div className="col-md-8">
          <h2 className="service-history-heading">Fr. Anish</h2>
          <p><strong>Priest ID:</strong> RCDK149</p>
          <p><strong>Date of Birth:</strong> 03.07.1994</p>
          <p><strong>Place of Birth:</strong> Kamplar</p>
          <p><strong>Date of Ordination:</strong> 14.04.2024</p>
          <p><strong>Ministering At:</strong> Co-Pastor, Mathiravilai</p>
          <p><strong>Address:</strong> Church of Our Lady of Assumption, Mathiravilai</p>
          <p><strong>Email:</strong> anishkuz94@gmail.com</p>
        </div>
      </div>
          {/* Images-5 */}
          <div className="row align-items-center my-5">
        {/* Profile Image */}
        <div className="col-md-4 text-center">
          <img src={Image6} alt="Profile" className="img-fluid profile-image" />
        </div>

        {/* Personal Information */}
        <div className="col-md-8">
          <h2 className="service-history-heading">Sr Armella S R A</h2>
          <p><strong>Priest ID:</strong> RCDK149</p>
          <p><strong>Date of Birth:</strong> 03.07.1994</p>
          <p><strong>Place of Birth:</strong> Kamplar</p>
          <p><strong>Date of Ordination:</strong> 14.04.2024</p>
          <p><strong>Ministering At:</strong> Co-Pastor, Mathiravilai</p>
          <p><strong>Address:</strong> Church of Our Lady of Assumption, Mathiravilai</p>
          <p><strong>Email:</strong> anishkuz94@gmail.com</p>
        </div>
      </div>
      
    </div>
  );
};

export default Service;
