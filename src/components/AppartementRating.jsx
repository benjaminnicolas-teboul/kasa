const AppartementRating = ({ rating }) => {
  return (
    <div className="appartement-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? 'star-filled' : 'star-empty'}
          aria-label={index < rating ? "étoile remplie" : "étoile vide"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default AppartementRating;
