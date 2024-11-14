import HeaderLogo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Large .webp";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="headerHome vh-100 row w-100">
      <div className="col-2">
        <img src={HeaderLogo} className="logoHeader" alt="Izo Decor Glass Logo" />
      </div>
      <div className="headerUsluge col-10 d-flex justify-content-end align-items-end">
        <div className="headerUslugeContainer me-2">
          <p className="text-center mt-2 fs-5 fontW700">Usluge 1</p>
          <p className="px-3 fontW600">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          <Link to={"/"} end className="headerLink text-decoration-none text-white fontW700 px-3">Saznaj Vise &nbsp; &#10132;</Link>
        </div>
        <div className="headerUslugeContainer me-2">
           <p className="text-center mt-2 fs-5 fontW700">Usluge 2</p>
           <p className="px-3 fontW600">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          <Link to={"/"} className="headerLink text-decoration-none text-white fontW700 px-3">Saznaj Vise &nbsp; &#10132;</Link>
        </div>
        <div className="headerUslugeContainer">
           <p className="text-center mt-2 fs-5 fontW700">Usluge 3</p>
           <p className="px-3 fontW600">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          <Link to={"/"} className="headerLink text-decoration-none text-white fontW700 px-3">Saznaj Vise &nbsp; &#10132;</Link>
        </div>  
           
      </div>
        
    </header>
  )
}

export default Header