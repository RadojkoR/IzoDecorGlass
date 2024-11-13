import '../App.css';
import { Nav } from '../Components/Layout/index';
import {Home} from "../Pages/index";
import {Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <section>
      <Nav />
      <section>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>       
      </section>
          
    </section>
  )
}

export default App
