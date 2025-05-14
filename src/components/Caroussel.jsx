import React, { useState } from "react";
import appartements from "../datas/appartements.json";

const Carrousel = ({ id }) => {
  const appartement = appartements.find((a) => a.id === id);
  const pictures = appartement ? appartement.pictures : [];
  const [current, setCurrent] = useState(0);

  if (!appartement) return null;
  if (pictures.length === 0) return <div>Aucune photo disponible.</div>;

  const next = () => setCurrent((current + 1) % pictures.length);
  const prev = () =>
    setCurrent((current - 1 + pictures.length) % pictures.length);

  return (
    <div className="carrousel">
      {pictures.length > 1 && (
        <span className="arrow arrow_left" onClick={prev}>
          &#10094;
        </span>
      )}
      <img src={pictures[current]} alt={`Photo ${current + 1}`} />
      {pictures.length > 1 && (
        <span className="arrow arrow_right" onClick={next}>
          &#10095;
        </span>
      )}
      {pictures.length > 1 && (
        <div className="photo-counter">
          {current + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carrousel;
