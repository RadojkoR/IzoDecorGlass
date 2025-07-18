import { PiMapPinAreaDuotone } from "react-icons/pi";
import { LuPhoneOutgoing } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import webHubStudioLogo from "../../assets/Images/Logo/WebHubStudioLogoTextLight256.webp";

function Footer() {
  return (
    <footer className="mainFooter bg-dark">
      <div className="container-md pt-5">
        <section className="footer-seo-text py-4 mt-1 mb-5 border-bottom">
          <div className="container-md text-center">
            <h3 className="izoTextFooter fs-2 mb-4">Izo Decor Glass</h3>
            <p className="fs-5 text-light mx-auto">
              Staklorezačka radnja iz Kraljeva. Vršimo staklorezačke usluge u
              Kraljevu i okolnim gradovima uključujući Beograd, Čačak, Kruševac, Kragujevac, Vrnjačku Banju, Rašku i druge.
            </p>
          </div>
        </section>

        <section className="row border-bottom pb-5">
          <article className="addressContainerFooter col-lg-4 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center mb-5">
            <div className="footerIconContainer d-flex justify-content-center align-items-center mb-4">
              <PiMapPinAreaDuotone className="text-light w-50 h-50" />
            </div>
            <div className="footerContentContainer d-flex flex-column justify-content-centers align-items-center text-light text-center">
              <h4 className="mb-3">Adresa</h4>
              <section className="mb-3">
              <p className="mb-1 fw-bolder izoTextFooter">Kancelarija</p>
              <a
                className="text-decoration-none text-light"
                href="https://maps.app.goo.gl/kZAr1cZxtLcEzHao6"
                target="_blank"
              >
                Ulica Kralja Stefana Decanskog 20V, Kraljevo 36221, Srbija
              </a>
              </section>
              <section>
              <p className="mb-1 fw-bolder izoTextFooter">Proizvodnja</p>
              <a
                className="text-decoration-none text-light"
                href="https://maps.app.goo.gl/hDYR33vb7eEN9RNQ9"
                target="_blank"
              >
                Ulica Vukovića 15, Lađevci, Kraljevo
              </a>
              </section>
              
            </div>
          </article>
          <article className="phoneContainerFooter col-lg-4 col-sm-12 col-xs-12 d-flex flex-column align-items-center mb-5">
            <div className="footerIconContainer mb-4 d-flex justify-content-center align-items-center">
              <LuPhoneOutgoing className="text-light w-50 h-50" />
            </div>
            <div className="footerContentContainer d-flex flex-column justify-content-centers align-items-center text-light text-center">
              <h4 className="mb-3">Telefon</h4>
              <a
                className="text-decoration-none text-light"
                href="tel:+381641241022"
              >
                +381 64 124 1022
              </a>
            </div>
          </article>
          <article className="phoneContainerFooter col-lg-4 col-sm-12 col-xs-12 d-flex flex-column align-items-center mb-5">
            <div className="footerIconContainer mb-4 d-flex justify-content-center align-items-center">
              <MdOutlineEmail className="text-light w-50 h-50" />
            </div>
            <div className="footerContentContainer d-flex flex-column justify-content-centers align-items-center text-light text-center">
              <h4 className="mb-3">Email</h4>
              <a
                className="text-decoration-none text-light"
                href="mailto:izodecorglass@gmail.com"
              >
                izodecorglass@gmail.com
              </a>
            </div>
          </article>
        </section>
        <section className="d-flex justify-content-center border-bottom py-5 row">
          <a
            href="https://www.facebook.com/profile.php?id=61570192525209"
            className="socialMediaIcon border d-flex align-items-center me-2"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF
              className="fs-2 text-decoration-none text-light"
              alt="Facebook icon"
            />
          </a>
          <a
            href="https://www.instagram.com/izodecorglass?igsh=bHVxNzhpMnc0OWp6"
            className="socialMediaIcon border d-flex align-items-center ms-2"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram
              className="fs-1 text-decoration-none text-light"
              alt="Instagram Icon"
            />
          </a>
        </section>
        <section className="d-flex flex-column align-items-center justify-content-center py-5">
            <div className="mb-5">
                <a
                    href="https://www.webhubstudio.com/"
                    className="d-flex flex-column flex-sm-row justify-content-center align-items-center text-decoration-none "
                    target="_blank"
                    rel="noopener"
                >
                    <h5 className="webHubStudioColor fs-4 m-sm-0">Izrada i održavanje sajta &nbsp;</h5>
                    <img
                    src={webHubStudioLogo}
                    className="w-52"
                    alt="Web Hub Studio – Izrada i održavanje sajta"
                    />
                </a>
            </div>
            <p className="text-light copyrightPara m-0">
            Copyright &copy; All Rights Reserved <span>{new Date().getFullYear()}</span> Izo Decor Glass{" "}
            </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
