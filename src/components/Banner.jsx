import React from "react";
/*
const Banner = ({ image, text }) => (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-image" />
      <div className="banner-text">{text}</div>
    </div>
  );

export default Banner;
*/
const Banner = ({ image, text, brightness = 0.5 }) => (
    <div className="banner">
      <img
        src={image}
        alt="Bannière"
        className="banner-image"
        style={{ filter: `brightness(${brightness})` }}
      />
      <div className="banner-text">{text}</div>
    </div>
  );
  
  export default Banner;
  