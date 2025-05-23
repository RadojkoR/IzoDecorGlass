import { PiMapPinAreaDuotone } from "react-icons/pi";
import { LuPhoneOutgoing } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import webHubStudioLogo from "../../assets/Images/Logo/WebHubStudioLogoTextLight256.webp"

function Footer() {
    return (
        <footer className="mainFooter bg-dark">
            <div className="container-md pt-5">
                <section className="row border-bottom pb-5">
                    <article className="addressContainerFooter col-lg-4 col-sm-12 col-xs-12 d-flex mb-4">
                        <div className="footerIconContainer me-4 d-flex justify-content-center align-items-center">
                            <PiMapPinAreaDuotone className="text-light w-50 h-50" />
                        </div>
                        <div className="footerContentContainer text-light">
                            <h4 className="mb-3">Adresa</h4>
                            <a className="text-decoration-none text-light" href="https://maps.app.goo.gl/hDYR33vb7eEN9RNQ9" target="_blank">Ulica Vukovića 15, Lađevci</a>
                        </div>
                    </article>
                    <article className="phoneContainerFooter col-lg-4 col-sm-12 col-xs-12 d-flex mb-4">
                        <div className="footerIconContainer me-4 d-flex justify-content-center align-items-center">
                            <LuPhoneOutgoing className="text-light w-50 h-50" />
                        </div>
                        <div className="footerContentContainer text-light">
                            <h4 className="mb-3">Telefon</h4>
                            <a className="text-decoration-none text-light" href="tel:+381641241022">+381 64 124 1022</a>
                        </div>
                    </article>
                    <article className="phoneContainerFooter col-lg-4 col-sm-12 col-xs-12 d-flex mb-4">
                        <div className="footerIconContainer me-4 d-flex justify-content-center align-items-center">
                            <MdOutlineEmail className="text-light w-50 h-50" />
                        </div>
                        <div className="footerContentContainer text-light">
                            <h4 className="mb-3">Email</h4>
                            <a className="text-decoration-none text-light" href="mailto:izodecorglass@gmail.com">izodecorglass@gmail.com</a>
                        </div>
                    </article>
                </section>
                <section className="d-flex justify-content-center border-bottom py-5 row">
                    <a href="https://www.facebook.com/profile.php?id=61570192525209" className="socialMediaIcon border d-flex align-items-center me-2" target="_blank" aria-label="Facebook">
                        <FaFacebookF className="fs-2 text-decoration-none text-light" alt="Facebook icon" />
                    </a>
                    <a href="https://www.instagram.com/" className="socialMediaIcon border d-flex align-items-center ms-2" target="_blank" aria-label="Instagram">
                        <FaInstagram className="fs-1 text-decoration-none text-light" alt="Instagram Icon" />
                    </a>
                </section>
                <section className="d-flex flex-column flex-sm-row align-items-center justify-content-center py-5">
                    <p className="text-light copyrightPara m-0">Copyright &copy; All Rights Reserved Izo Decor Glass </p>
                    <div className="text-light d-flex align-items-center">
                       <p className="m-0">&nbsp; &nbsp;&nbsp;&nbsp;Powered by &nbsp;</p> 
                        <a className="poweredBy text-decoration-none " href="https://www.webhubstudio.com/" target="_blank"> 
                            <img src={webHubStudioLogo} alt="Web hub Studio Logo" />
                        </a>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer