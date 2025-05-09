import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import bannerImg from "../assets/apropos-banner.jpg";
import AboutAccordion from "../components/AboutAcordion.jsx";

const Apropos = () => {
  return (
    <div>
      <div className="main-container">
        <Header />
        <Banner image={bannerImg} brightness={0.8} />
        <AboutAccordion />
      </div>
      <Footer />
    </div>
  );
};
export default Apropos;
