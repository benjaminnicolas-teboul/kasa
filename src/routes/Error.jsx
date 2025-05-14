import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="main-container">
        <Header />
        <div className="error-container">
          <h1>404</h1>
          <p>Oups!La page que vous demandez n'existe pas.</p>
          <Link className="linkHome" to="/">
            retourner sur la page d'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
