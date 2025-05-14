import React from "react";
import appartements from "../datas/appartements.json";
import { Link } from "react-router-dom"; 

  const AppartementGallery = () => (
  <div className="gallery">
    {appartements.map(({ id, title, cover }) => (
      <Link 
        to={`/logement/${id}`} // Lien dynamique avec l'ID
        key={id} 
        className="appartement-card"
      >
        <div className="image-container">
          <img src={cover} alt={title} />
          <div className="card-title">{title}</div>
        </div>
      </Link>
    ))}
  </div>
);


  export default AppartementGallery;