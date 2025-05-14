import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import Caroussel from "../components/Caroussel.jsx";
import { useParams, useNavigate } from "react-router-dom";
import appartements from "../datas/appartements.json";
import { useEffect } from "react";
import LogementAccordion from "../components/LogementAccordion.jsx";
import AppartementTag from "../components/AppartementTag";
import AppartementTitle from "../components/AppartementTitle";
import AppartementLocation from "../components/AppartementLocation";
import AppartementOwner from "../components/AppartementOwner";
import AppartementOwnerPicture from "../components/AppartementOwnerPicture";
import AppartementRating from "../components/AppartementRating";

const Logement = () => {
  const { logementId } = useParams();
  const navigate = useNavigate();
  const appartement = appartements.find((a) => a.id === logementId);
  useEffect(() => {
    if (!appartement) {
      navigate("/Error", { replace: true });
    }
  }, [appartement, navigate]);

  if (!appartement) return null;

  return (
    <div className="main-container">
      <Header />
      <Caroussel id={logementId} />
      <div className="Titlesandtags_container">
        <AppartementTitle title={appartement.title} className="apart_title" />
        <AppartementLocation
          location={appartement.location}
          className="apart_location"
        />
        <div className="tags-row">
          {appartement.tags.map((tag, idx) => (
            <AppartementTag key={idx}>{tag}</AppartementTag>
          ))}
        </div>
      </div>
      <div className="ownrinfos_rating_container">
      <AppartementOwner name={appartement.host.name} />
      <AppartementOwnerPicture
        photoUrl={appartement.host.picture}
        altText={`Photo du propriétaire ${appartement.host.name}`}
      />
      <AppartementRating rating={appartement.rating} />
      </div>
      <LogementAccordion
        description={appartement.description}
        equipments={appartement.equipments}
      />
      <Footer />
    </div>
  );
};
export default Logement;
