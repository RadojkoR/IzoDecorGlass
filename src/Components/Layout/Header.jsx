import HeaderLogo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Large .webp";
// import { MdOutlinePriceChange } from "react-icons/md";
// import { VscTools } from "react-icons/vsc";
// import { FaRegSmile } from "react-icons/fa";
// import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="headerHome vh-100 row g-0">
      <section className="col-lg-2">
        <img src={HeaderLogo} className="logoHeader" alt="Izo Decor Glass Logo" loading="eager" />
      </section>
      <section className="headerSlogan d-flex flex-column col-lg-10">
        <h1 className="py-3 mt-4 me-3 text-center border-5 border-end fontW700 text-uppercase">Izo Decor Glass</h1>
        <h2 className="py-4 ps-4 ms-5 border-5 border-start fontW600 text-uppercase">Vaš stručnjak za staklo</h2>
      </section>
      {/* <div className="headerUsluge col-lg-10 d-flex flex-column flex-md-row justify-content-end align-items-end p-0 mb-5">
        <div className="headerUslugeContainer me-md-2 d-flex flex-column justify-content-center align-items-center">
          <div>
            <FaRegSmile className="headerIcon mt-2" />
          </div>
          <p className="px-3 mt-3 text-center fontW600">Zadovoljstvo svakog klijenta je naš prioritet</p>
        </div>
        <div className="headerUslugeContainer me-md-2 d-flex flex-column justify-content-center align-items-center">
          <div>
            <VscTools className="headerIcon mt-2" />
          </div>
          <p className="px-3 mt-3 text-center fontW600">Široka ponuda staklorezačkih usluga prilagođenih vašim potrebama.</p>
        </div>
        <div className="headerUslugeContainer me-md-2 d-flex flex-column justify-content-center align-items-center">
          <div>
            <MdOutlinePriceChange className="headerIcon mt-2" />
          </div>
          <p className="px-3 mt-3 text-center fontW600">Nudimo konkurentne cene bez kompromisa na kvalitetu.</p>
        </div>
      </div> */}

    </header>
  )
}

export default Header