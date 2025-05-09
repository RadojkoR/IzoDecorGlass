import '../App.css';
import { Footer, Nav } from '../Components/Layout/index';
import { Gallery, Home, Kontakt, Ogledala, StaklenaVrata, StakleneObloge, StakleniZidovi, TipoviStakla, TusKabine, Usluge } from "../Pages/index";
import { Route, Routes } from 'react-router-dom'
import StakleneOgrade from '../Pages/StakleneOgrade';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    //  Start of Tawk.to Script
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/6745f0b14304e3196ae9087d/1idkj8dgt';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  // End of Tawk.to Script
  }, [])
  return (
    <section>
      <Nav />
      <section>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/usluge' element={<Usluge />}></Route>
          <Route path='/usluge/tušKabine' element={<TusKabine />}></Route>
          <Route path='/usluge/stakleneOgrade' element={<StakleneOgrade />}></Route>
          <Route path='/usluge/ogledala' element={<Ogledala />}></Route>
          <Route path='/usluge/stakleniZidovi' element={<StakleniZidovi />}></Route>
          <Route path='/usluge/staklenaVrata' element={<StaklenaVrata />}></Route>
          <Route path='/usluge/stakleneObloge' element={<StakleneObloge />}></Route>
          <Route path='/tipoviStakla' element={<TipoviStakla />}></Route>
          <Route path='/galerija' element={<Gallery />}></Route>
          <Route path='/kontakt' element={<Kontakt />}></Route>
        </Routes>
      </section>
      <Footer />
    </section>
  )
}

export default App
