import { SecondaryHeader } from "../Components/Layout";
import Map from "../Components/Maps/Map";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { LuPhoneOutgoing } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp"
import BreadcrumbComponent from "../Components/Global/BreadcrumbComponent";
import MetaTags from "../Components/SEO/MetaTags";

function Kontakt() {
  const kontaktHeaderTxt = [
    {
      headingEl: "Kontakt",
      para: "Staklena rešenja na dohvat ruke - kontaktirajte nas!",
    },
  ];
  const mapSrc = [
    {
      title: "Kancelarija",
      subTitle: "Kraljevo",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13685.33898204921!2d20.653483524671348!3d43.704592884937604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757012c0a5ccae3%3A0xa99a40e676c0d2b5!2sIzo%20Decor%20Glass!5e1!3m2!1sen!2sca!4v1751733572525!5m2!1sen!2sca"
    },
    {
      title: "Proizvodnja",
      subTitle: "Ladjevci - Kraljevo",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.1914436597517!2d20.606515371693263!3d43.817880176073054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e765b1754698b53%3A0xdd156a89951646d7!2sIzo%20Decor%20Glass!5e1!3m2!1sen!2sca!4v1732649128105!5m2!1sen!2sca"
    },

  ]

  return (
    <>
      <MetaTags />
      <SecondaryHeader bgHeader="kontaktHeader" headerInfo={kontaktHeaderTxt} />
      <BreadcrumbComponent />
      {/* <section className="container-md my-5">
        <h2 className="mt-5 mb-4">Kontaktirajte nas</h2>
        <p className="fs-5 px-md-3">
          Uvek smo spremni za nove projekte.Ako ste zainteresovani za naša
          staklena rešenja, slobodno nas kontaktirajte putem jednog od sledećih
          kanala, uključujući naš{" "}
          <span className="text-primary">Izo Decor Glass Chat</span> za brzu komunikaciju.
        </p>
      </section> */}
      <section className="container-md my-5">
        <h2 className="mt-5 mb-4">Kontaktirajte nas</h2>
        <p className="fs-5 px-md-3">
          Tu smo za sva vaša pitanja i projekte u vezi sa staklom. Bilo da vam je potrebno sečenje stakla, izrada po meri ili ugradnja, <span className="izoText fw-bolder">Izo Decor Glass</span> je spreman da pomogne.
        </p>
        <p className="fs-5 px-md-3">
          Usluge pružamo u Kraljevu, Čačku, Kruševcu, Kragujevcu, Beogradu, Vrnjačkoj Banji, Raški, Trsteniku,  i okolnim mestima.
        </p>
        <p className="fs-5 px-md-3">
          Kontaktirajte nas putem telefona, e-maila ili preko našeg  
          <span className="izoText fw-bolder"> Izo Decor Glass Chat</span> za brzu i direktnu komunikaciju.
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
              <a className="text-decoration-none" href="https://maps.app.goo.gl/hDYR33vb7eEN9RNQ9" target="_blank">
                Ulica Vukovića 15, Lađevci, Kraljevo
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
              <a className="text-decoration-none" href="mailto:izodecorglass@gmail.com">
                izodecorglass@gmail.com
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
      {mapSrc && mapSrc.map((location, index) => (
        <Map key={index} location={location}/>
      ))}
      
    </>
  );
}

export default Kontakt;
