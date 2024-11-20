import '../App.css';
import { Footer, Nav } from '../Components/Layout/index';
import {Home, Kontakt, TipoviStakla, TusKabine, Usluge} from "../Pages/index";
import {Route, Routes} from 'react-router-dom'
import StakleneOgrade from '../Pages/StakleneOgrade';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
const location = useLocation();

  // useEffect za dinamičko postavljanje lang atributa
  useEffect(() => {
    if (location.pathname.startsWith('/en')) {
      document.documentElement.setAttribute('lang', 'en');
    } else {
      document.documentElement.setAttribute('lang', 'sr');
    }
  }, [location]);
  return (
    <section>
      <Nav />
      <section>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/usluge' element={<Usluge />}></Route>
          <Route path='/usluge/tusKabine' element={<TusKabine />}></Route>
          <Route path='/usluge/stakleneOgrade' element={<StakleneOgrade />}></Route>
          <Route path='/tipoviStakla' element={<TipoviStakla />}></Route>
          <Route path='/kontakt' element={<Kontakt />}></Route>
        </Routes>       
      </section>
      <Footer />
    </section>
  )
}

export default App
