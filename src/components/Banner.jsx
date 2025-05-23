

const Banner = ({ image, text, brightness = 0.5 }) => (
    <div className="banner">
      <img
        src={image}
        alt="Bannière"
        className="banner-image"
        style={{ filter: `brightness(${brightness})` }}
      />
      <h1 className="banner-text">{text}</h1>
    </div>
  );
  
  export default Banner;
  