import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function Nav() {

    return (
        <nav className="mainNav navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
            <div className="container-fluid">
                <NavLink to="/" className="logoNav navbar-brand py-3 px-2 me-auto">
                    <img src={logo} className="w-100" alt="Izo Decor Glass Logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="navLiItem nav-item">
                            <NavLink to="/" end className={({ isActive }) => `navLinkItem nav-link text-uppercase fs-5 ms-lg-4 ${isActive ? "active" : ""}` } aria-current="page">Izo Decor Glass</NavLink>
                        </li>
                        <li className="navLiItem nav-item">
                            <NavLink to={"/usluge"} className="navLinkItem nav-link text-uppercase fs-5 ms-lg-4">Usluge</NavLink>
                        </li>
                        <li className="navLiItem nav-item">
                            <NavLink to={"/tipoviStakla"} className="navLinkItem nav-link text-uppercase fs-5 ms-lg-4">Tipovi Stakla</NavLink>
                        </li>
                        <li className="navLiItem nav-item">
                            <NavLink to={"/kontakt"} className="navLinkItem nav-link text-uppercase fs-5 ms-lg-4">Kontakt</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav