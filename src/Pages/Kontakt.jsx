import { SecondaryHeader } from "../Components/Layout";
import Map from "../Components/Maps/Map";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { LuPhoneOutgoing } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp"

function Kontakt() {
  const kontaktHeaderTxt = [
    {
      headingEl: "Kontakt",
      para: "Staklena rešenja na dohvat ruke - kontaktirajte nas!",
    },
  ];
  return (
    <>
      <SecondaryHeader bgHeader="kontaktHeader" headerInfo={kontaktHeaderTxt} />
      <section className="container-md my-5">
        <h2 className="mt-5 mb-4">Kontaktirajte nas</h2>
        <p className="fs-5 px-md-3">
          Uvek smo spremni za nove projekte.Ako ste zainteresovani za naša
          staklena rešenja, slobodno nas kontaktirajte putem jednog od sledećih
          kanala, uključujući naš{" "}
          <span className="text-primary">Izo Decor Glass Chat</span>{" "}
          <span className="">za brzu komunikaciju</span> za brzu komunikaciju.
        </p>
      </section>
      <section className="kontaktContainer d-flex flex-column border-bottom container-md mx-auto pb-5 mb-5">
        <div className="row">
          <article className="addressContainerKontakt col-lg-4 col-sm-12 col-xs-12 d-flex mb-4">
            <div className="kontaktIconContainer me-4 d-flex justify-content-center align-items-center">
              <PiMapPinAreaDuotone className="w-50 h-50" />
            </div>
            <div className="kontaktContentContainer">
              <h4 className="mb-3">Adresa</h4>
              <a className="text-decoration-none" href="#">
                Adresa ide ovde, Čačak
              </a>
            </div>
          </article>
          <article className="phoneContainerKontakt col-lg-4 col-sm-12 col-xs-12 d-flex mb-4">
            <div className="kontaktIconContainer me-4 d-flex justify-content-center align-items-center">
              <LuPhoneOutgoing className=" w-50 h-50" />
            </div>
            <div className="kontaktContentContainer">
              <h4 className="mb-3">Telefon</h4>
              <a className="text-decoration-none" href="tel:+381641241022">
                +381 64 124 1022
              </a>
            </div>
          </article>
          <article className="phoneContainerKontakt col-lg-4 col-sm-12 col-xs-12 d-flex mb-4">
            <div className="kontaktIconContainer me-4 d-flex justify-content-center align-items-center">
              <MdOutlineEmail className="w-50 h-50" />
            </div>
            <div className="kontaktContentContainer">
              <h4 className="mb-3">Email</h4>
              <a className="text-decoration-none" href="mailto:123456789">
                email@test.com
              </a>
            </div>
          </article>
        </div>
        <div className="d-flex flex-column mx-auto mt-5">
          <p className="fs-5 px-3 mb-0 fontW700 izoText">Boško Miletić</p>
          <p className="fs-6 fontW600 px-3 ">
            Osnivač i vlasnik, Izo Decor Glass
          </p>
        </div>
        <img src={logo} className="kontaktLogo ms-auto" alt="Izo Decor Glass Logo" />
      </section>
      <Map />
    </>
  );
}

export default Kontakt;
