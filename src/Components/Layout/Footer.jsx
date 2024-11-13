import { PiMapPinAreaDuotone } from "react-icons/pi";
import { LuPhoneOutgoing } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mainFooter bg-dark fixed-bottom">
        <div className="container-md py-5">
            <section className="row border-bottom pb-5">
                <article className="addressContainerFooter col-lg-4 col-sm-12 col-xs-12 d-flex">
                    <div className="footerIconContainer me-4 d-flex justify-content-center align-items-center">
                        <PiMapPinAreaDuotone className="text-light w-50 h-50"/>
                    </div>
                    <div className="addressContentFooter text-light">
                        <h5 className="mb-3">Adresa</h5>
                        <a className="text-decoration-none text-light" href="#">Adresa ide ovde, Čačak</a>
                    </div>
                </article>
                <article className="phoneContainerFooter col-lg-4 col-sm-12 col-xs-12 d-flex">
                    <div className="footerIconContainer me-4 d-flex justify-content-center align-items-center">
                        <LuPhoneOutgoing className="text-light w-50 h-50"/>
                    </div>
                    <div className="addressContentFooter text-light">
                        <h5 className="mb-3">Telefon</h5>
                        <a className="text-decoration-none text-light" href="tel:123456789">123456789</a>
                    </div>
                </article>
                <article className="phoneContainerFooter col-lg-4 col-sm-12 col-xs-12 d-flex">
                    <div className="footerIconContainer me-4 d-flex justify-content-center align-items-center">
                        <LuPhoneOutgoing className="text-light w-50 h-50"/>
                    </div>
                    <div className="addressContentFooter text-light">
                        <h5 className="mb-3">Email</h5>
                        <a className="text-decoration-none text-light" href="mailto:123456789">email@test.com</a>
                    </div>
                </article>
            </section>
            <section className="d-flex justify-content-center border-bottom py-5 row">
                <a href="https://www.facebook.com/" className="socialMediaIcon border d-flex align-items-center me-2" target="_blank">
                <FaFacebookF className="fs-2 text-decoration-none text-light"/>
                </a>
                <a href="https://www.instagram.com/" className="socialMediaIcon border d-flex align-items-center ms-2" target="_blank">
                <FaInstagram  className="fs-1 text-decoration-none text-light"/>
                </a>                
            </section>
            

        </div>

    </footer>
  )
}

export default Footer