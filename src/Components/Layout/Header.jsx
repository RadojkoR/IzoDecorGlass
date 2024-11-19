import HeaderLogo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Large .webp";
import { MdOutlinePriceChange } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { FaRegSmile } from "react-icons/fa";
// import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="headerHome vh-100 row g-0">
      <div className="col-lg-2">
        <img src={HeaderLogo} className="logoHeader" alt="Izo Decor Glass Logo" />
      </div>
      <div className="headerUsluge col-lg-10 d-flex flex-column flex-md-row justify-content-end align-items-end p-0 mb-5">
        <div className="headerUslugeContainer me-md-2 d-flex flex-column justify-content-center align-items-center">
          <div>
              <FaRegSmile  className="headerIcon mt-2"/>
          </div>
          <p className="px-3 mt-3 text-center fontW600">Zadovoljstvo svakog klijenta je naš prioritet</p>

          {/* <div>
            <p className="text-center mt-2 mb-1 fs-5 fontW700">Usluge 1</p>
            <p className="px-3 fontW600">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>
          <Link to={"/"} className="headerLink text-decoration-none text-white fontW700 px-3">Saznaj Vise &nbsp; &#10132;</Link> */}
        </div>
        <div className="headerUslugeContainer me-md-2 d-flex flex-column justify-content-center align-items-center">
          <div>
              <VscTools  className="headerIcon mt-2"/>
          </div>
          <p className="px-3 mt-3 text-center fontW600">Široka ponuda staklorezačkih usluga prilagođenih vašim potrebama.</p>

          {/* <div>
            <p className="text-center mt-2 fs-5 fontW700">Usluge 2</p>
            <p className="px-3 fontW600">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>
          <Link to={"/"} className="headerLink text-decoration-none text-white fontW700 px-3">Saznaj Vise &nbsp; &#10132;</Link> */}
        </div>
        <div className="headerUslugeContainer me-md-2 d-flex flex-column justify-content-center align-items-center">
          <div>
              <MdOutlinePriceChange className="headerIcon mt-2"/>
          </div>
          <p className="px-3 mt-3 text-center fontW600">Nudimo konkurentne cene bez kompromisa na kvalitetu.</p>



          {/* <div>
            <p className="text-center mt-2 fs-5 fontW700">Usluge 3</p>
            <p className="px-3 fontW600">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>
          <Link to={"/"} className="headerLink text-decoration-none text-white fontW700 px-3">Saznaj Vise &nbsp; &#10132;</Link> */}
        </div>  
           
      </div>
        
    </header>
  )
}

export default Header