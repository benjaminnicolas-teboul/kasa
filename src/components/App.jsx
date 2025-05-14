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
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

