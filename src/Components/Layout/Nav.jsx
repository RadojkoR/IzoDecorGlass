import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
            <div className="container-fluid">
                <NavLink to="/" className="logoNav navbar-brand py-3 px-2 ms-auto">
                    <img src={logo} className="w-100" alt="Izo Decor Glass Logo" />
                </NavLink>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active text-uppercase fs-5" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link text-uppercase fs-5" href="#">Features</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link text-uppercase fs-5" href="#">Pricing</NavLink>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}

export default Nav