import React from "react";
import appartements from "../datas/appartements.json";

const AppartementGallery = () => (
    <div className="gallery">
      {appartements.map(({ id, title, cover }) => (
        <div key={id} className="appartement-card">
          <div className="image-container">
            <img src={cover} alt={title} />
            <div className="card-title">{title}</div>
          </div>
        </div>
      ))}
    </div>
  );
  
  export default AppartementGallery;