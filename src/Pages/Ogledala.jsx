import BreadcrumbComponent from "../Components/Global/BreadcrumbComponent";
import { SecondaryHeader } from "../Components/Layout"
import logo from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function Ogledala() {

  const ogledalaHeaderTxt = [
    { headingEl: "Ogledala", para: "Vaš svet u savršenom odrazu." }
  ]

  return (
    <>
      <SecondaryHeader bgHeader="ogledalaHeader" headerInfo={ogledalaHeaderTxt} />
      <BreadcrumbComponent />
      <section className='stakleneOgradeContainer container-md mb-5 border-2 border-bottom'>
        <article className='stakleneOgradeTxtContainer d-flex flex-column'>
          <h2 className='mt-5 mb-4'><span className="fontW600 izoText fs-1">Ogledala</span> – Više od refleksije.</h2>
          <p className='fs-5 px-md-3'>Ogledala su mnogo više od funkcionalnog elementa – ona su ključni detalj koji oplemenjuje svaki prostor. Sa pravim izborom ogledala, vaš dom ili poslovni prostor može dobiti na estetici, svetlosti i vizuelnoj prostranosti.</p>

          <p className='fs-5 px-md-3 mb-5'>Naša <span className="fontW600 izoText">ogledala po meri </span>dizajnirana su da zadovolje vaše specifične potrebe i uklope se u svaki stil enterijera. Bez obzira da li vam treba ogledalo za kupatilo, hodnik, dnevni boravak ili poslovni prostor, nudimo širok spektar oblika, dimenzija i stilova.</p>

          <h3 className="fontW600">Zašto odabrati naša ogledala?</h3>
          <ul>
            <li className="fs-5 mb-2"><span className="fontW600">Prilagođena dizajnu prostora - </span>Ogledala izrađujemo po vašim merama, kako bi se savršeno uklopila u ambijent.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Kvalitetna izrada - </span>Koristimo vrhunske materijale koji osiguravaju dugotrajnost i besprekoran izgled.</li>
            <li className="fs-5"><span className="fontW600">Estetika i funkcionalnost - </span>Naša ogledala ne samo da izgledaju prelepo, već i poboljšavaju osvetljenost i prostranost prostora.</li>
          </ul>
          <h3 className="mt-5 fontW600">Dodatne usluge:</h3>
          <ul>
            <li className="fs-5 mb-2">Profesionalno sečenje i obrada ogledala</li>
            <li className="fs-5 mb-2">Postavljanje ukrasnih ivica i ramova</li>
            <li className="fs-5">Montaža ogledala na željenu lokaciju</li>
          </ul>
          <p className="fs-5 mt-4"><span className="fontW600">Dodajte sjaj svom prostoru – </span>kontaktirajte nas i izaberite ogledalo koje odražava vaš stil i eleganciju.</p>
          <img src={logo} className='ms-auto my-5' alt="Izo Decor Glass Logo" />
        </article>
      </section>
    </>
  )
}

export default Ogledala