import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function Nav() {

    return (
        <nav className="mainNav navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
            <div className="container-fluid">
                <NavLink to="/" className="logoNav navbar-brand py-3 px-2 me-auto">
                    <img src={logo} className="w-100" alt="Izo Decor Glass Logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-bs-auto-close="true">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="navLiItem nav-item">
                            <NavLink to="/" end className={({ isActive }) => `navLinkItem nav-link text-uppercase fs-5 ms-lg-4 ${isActive ? "active" : ""}`} aria-current="page">Izo Decor Glass</NavLink>
                        </li>
                        <li className="navLiItem nav-item dropdown d-flex align-items-center">
                            <NavLink
                                to={"/usluge"}
                                className="navLinkItem dropDown nav-link text-uppercase fs-5 ms-lg-4 " id="navbarDropdown"
                                >Usluge</NavLink>
                            <div className="dropdown-toggle" role="button"
                                data-bs-auto-close="true"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"></div>
                            <ul className="dropDownMenu dropdown-menu text-uppercase border-0" aria-labelledby="navbarDropdown">
                                <li><NavLink to={"usluge/tusKabine"} className="dropdown-item">Tuš Kabine</NavLink></li>
                                <li><NavLink to={"usluge/stakleneOgrade"} className="dropdown-item" href="#">Staklene ograde</NavLink></li>
                            </ul>
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