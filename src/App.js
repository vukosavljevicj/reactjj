import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Meni from "./komponente/Meni";
import Pocetna from "./stranice/Pocetna";
import KupljenePonude from "./komponente/KupljenePonude";
import OMeni from "./stranice/OMeni";
import {useState} from "react";

function App() {

  const [ponude, setPonude] = useState([]);

  const dodajPonudu = (ponuda) => {
    setPonude([...ponude, ponuda]);
    alert("Uspesno ste kupili ponudu!");
  }

  return (
    <>
      <BrowserRouter>
        <Meni />
        <Routes>
          <Route path="/" element={<Pocetna ponude={ponude} dodajPonudu={dodajPonudu}/>} />
          <Route path="/ponude" element={<KupljenePonude kupljenePonude={ponude}/>} />
          <Route path="/omeni" element={<OMeni />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
