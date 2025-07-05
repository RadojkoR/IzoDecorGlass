import BreadcrumbComponent from "../Components/Global/BreadcrumbComponent";
import { SecondaryHeader } from "../Components/Layout"
import MetaTags from "../Components/SEO/MetaTags";
import logo from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function StaklenaVrata() {
  const staklenaVrataHeaderTxt = [
    { headingEl: "Staklena Vrata", para: "Spoj elegancije i funkcionalnosti" }
  ]
  return (
    <>
    <MetaTags />
      <SecondaryHeader bgHeader="stakleniZidoviHeader" headerInfo={staklenaVrataHeaderTxt} />
      <BreadcrumbComponent />
      <section className='stakleneOgradeContainer container-md mb-5 border-2 border-bottom'>
        <article className='stakleneOgradeTxtContainer d-flex flex-column'>
          <h2 className='mt-5 mb-4'><span className="fontW600 izoText fs-1">Staklena vrata</span> –  Elegancija i praktičnost u jednom</h2>
          <p className='fs-5 px-md-3'>Staklena vrata su idealno rešenje za svaki prostor, donoseći savremen dizajn, prirodnu svetlost i sofisticiran izgled. Bilo da ih koristite za poslovne ili stambene prostore, staklena vrata nude estetsku privlačnost i funkcionalnost, uz mogućnost prilagođavanja vašim specifičnim potrebama.</p>

          <h3 className="mt-5 fontW600">Prednosti naših staklenih vrata</h3>
          <ul>
            <li className="fs-5 mb-2"><span className="fontW600">Moderni dizajn - </span>Minimalistički i luksuzni izgled koji oplemenjuje svaki prostor.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Prilagodljivost po meri - </span>Staklena vrata izrađujemo prema vašim dimenzijama i zahtevima, savršeno uklopljena u vaš enterijer.</li>
            <li className="fs-5"><span className="fontW600">Izdržljivost i sigurnost - </span>Koristimo visokokvalitetno staklo koje pruža dodatnu sigurnost i dugotrajnost.</li>
            <li className="fs-5"><span className="fontW600">Jednostavno održavanje - </span> Glatke površine olakšavaju čišćenje i održavanje staklenih vrata.</li>
          </ul>

          <h3 className="mt-5 fontW600">Primena staklenih vrata</h3>
          <ul>
            <li className="fs-5 mb-2"><span className="fontW600">Unutrašnji prostori - </span>Idealna za odvajanje prostorija bez gubitka svetlosti i otvorenosti.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Ulazna vrata - </span>Moderan i privlačan ulaz u vaš dom ili poslovni prostor.</li>
            <li className="fs-5"><span className="fontW600">Kancelarije - </span>Povezivanje i deljenje prostora uz očuvanje privatnosti i profesionalnog izgleda.</li>
          </ul>

          <h3 className="mt-5 fontW600">Naše usluge</h3>
          <ul>
            <li className="fs-5 mb-2">Izrada staklenih vrata po meri</li>
            <li className="fs-5 mb-2">Profesionalna montaža</li>
            <li className="fs-5"><span className="fontW600">Različite opcije stakla – </span> providno staklo, matirano staklo, sa ukrasnim detaljima</li>
            <li className="fs-5 mb-2">Stručna i precizna montaža</li>
            <li className="fs-5 mb-2">Stručna i precizna montaža</li>
            <li className="fs-5 mb-2">Savetovanje i prilagođavanje vašim potrebama</li>
          </ul>
          <p className="fs-5 mt-4">Unesite stil i funkcionalnost u svoj prostor uz naša staklena vrata. Kontaktirajte nas za više informacija i ponudu po meri!</p>
          <img src={logo} className='ms-auto my-5' alt="Izo Decor Glass Logo" />
        </article>
      </section>
    </>
  )
}

export default StaklenaVrata