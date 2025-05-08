import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home.jsx';
import Apropos from '../routes/Apropos.jsx';
import Logement from '../routes/Logement.jsx';
import Error from '../routes/Error.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="erreur" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

