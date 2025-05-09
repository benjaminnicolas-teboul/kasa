import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import AppartementGallery from "../components/AppartementGallery.jsx";
import bannerImg from "../assets/home-banner.jpg";

const Home = () => {
  return (
    <div>
      <div className="main-container">
        <Header />
        <Banner image={bannerImg} text="Chez vous, partout et ailleurs" brightness={0.5} />
       
        <AppartementGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
