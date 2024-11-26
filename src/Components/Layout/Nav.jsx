import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";

function Nav() {
    const [isDropDownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    }

    const handleClickOutside = (e) => {
        if (!e.target.closest("#dropDownBtn") && !e.target.closest(".dropDown")) {
            setIsDropdownOpen(false)
        };
    }

    const handleClickOutHamburger = (e) => {
        if (!e.target.closest(".navbar-toggler") && !e.target.closest("#dropDownBtn")) {
            setIsMenuOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("click", handleClickOutHamburger);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("click", handleClickOutHamburger);
        };
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };


    return (
        <nav className="mainNav navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
            <div className="container-fluid">
                <NavLink to="/" className="logoNav navbar-brand py-3 px-2 me-auto">
                    <img src={logo} className="w-100" alt="Izo Decor Glass Logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    data-bs-auto-close="true"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="navLiItem nav-item">
                            <NavLink to="/" end className={({ isActive }) => `navLinkItem nav-link text-uppercase fs-5 ms-lg-4 ${isActive ? "active" : ""}`} aria-current="page">Izo Decor Glass</NavLink>
                        </li>
                        <li className={`navLiItem dropDown nav-item d-flex align-items-center position-relative ${isDropDownOpen ? "open" : ""}`}>
                            <NavLink
                                to={"/usluge"}
                                className="navLinkItem nav-link text-uppercase fs-5 ms-lg-4 " id="navbarDropdown"
                            >Usluge</NavLink>

                            <MdKeyboardArrowDown id="dropDownBtn" className="fs-2 ms-2 pe-auto" role='button' onClick={handleDropdownToggle} />
                            <ul className="dropDownMenu bg-light text-uppercase position-absolute ps-2 pt-4 pb-2" aria-labelledby="navbarDropdown">
                                <li className="list-group-item p-0"><NavLink to={"usluge/tušKabine"} className=" nav-link navLinkItem">Tuš Kabine</NavLink></li>
                                <li className="list-group-item"><NavLink to={"usluge/stakleneOgrade"} className="nav-link navLinkItem">Staklene ograde</NavLink></li>
                                <li className="list-group-item"><NavLink to={"usluge/ogledala"} className="nav-link navLinkItem">Ogledala</NavLink></li>
                                <li className="list-group-item"><NavLink to={"usluge/stakleniZidovi"} className="nav-link navLinkItem">Stakleni Zidovi</NavLink></li>
                                <li className="list-group-item"><NavLink to={"usluge/staklenaVrata"} className="nav-link navLinkItem">Staklena Vrata</NavLink></li>
                                <li className="list-group-item"><NavLink to={"usluge/stakleneObloge"} className="nav-link navLinkItem">Staklene Obloge</NavLink></li>
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