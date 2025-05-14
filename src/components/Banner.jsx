

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
  