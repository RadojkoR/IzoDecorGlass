import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";

function Nav() {
    const [isDropDownOpen, setIsDropdownOpen]= useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    }

    const handleClickOutside = (e) => {
        if(!e.target.closest("#dropDownBtn") && !e.target.closest(".dropDown")) {
            setIsDropdownOpen(false)
        };
    }

      useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

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
                        <li className={`navLiItem dropDown nav-item d-flex align-items-center position-relative ${isDropDownOpen ? "open" : ""}`}>
                            <NavLink
                                to={"/usluge"}
                                className="navLinkItem nav-link text-uppercase fs-5 ms-lg-4 " id="navbarDropdown"
                                >Usluge</NavLink>

                                <MdKeyboardArrowDown id="dropDownBtn" className="fs-2 ms-2 pe-auto" role='button' onClick={handleDropdownToggle}/>

                            {/* <div className="dropdown-toggle" role="button"
                                data-bs-auto-close="true"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                aria-label="Open menu">
                            </div> */}
                            {/* {isDropDownOpen && ( */}
                            <ul className="dropDownMenu bg-light text-uppercase position-absolute ps-2 pt-4 pb-2" aria-labelledby="navbarDropdown">
                                <li className="list-group-item p-0"><NavLink to={"usluge/tusKabine"} className=" nav-link navLinkItem">Tuš Kabine</NavLink></li>
                                <li className="list-group-item"><NavLink to={"usluge/stakleneOgrade"} className="nav-link navLinkItem">Staklene ograde</NavLink></li>
                            </ul>
                            {/* )} */}
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