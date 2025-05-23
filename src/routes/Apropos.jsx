import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import bannerImg from "../assets/apropos-banner.jpg";
import AboutAccordion from "../components/AboutAccordion.jsx";
import aboutList from "../datas/aboutList.json";

const Apropos = () => {
  return (
    <div>
      <div className="main-container">
        <Header />
        <Banner image={bannerImg} brightness={0.8} />
        <div className="accordion-column">
        <AboutAccordion data={aboutList}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Apropos;
