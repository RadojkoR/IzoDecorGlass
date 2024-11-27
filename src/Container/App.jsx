import '../App.css';
import { Footer, Nav } from '../Components/Layout/index';
import { Home, Kontakt, Ogledala, StaklenaVrata, StakleneObloge, StakleniZidovi, TipoviStakla, TusKabine, Usluge } from "../Pages/index";
import { Route, Routes } from 'react-router-dom'
import StakleneOgrade from '../Pages/StakleneOgrade';

function App() {
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
          <Route path='/kontakt' element={<Kontakt />}></Route>
        </Routes>
      </section>
      <Footer />
    </section>
  )
}

export default App
