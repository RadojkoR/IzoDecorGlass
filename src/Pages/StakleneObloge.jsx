import BreadcrumbComponent from '../Components/Global/BreadcrumbComponent';
import { SecondaryHeader } from '../Components/Layout'
import logo from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function StakleneObloge() {
    const stakleneOblogeHeaderTxt = [
        {headingEl: "Staklene Obloge", para: "Spoj elegancije i funkcionalnosti"}
    ]
  return (
    <>
        <SecondaryHeader bgHeader="stakleneOblogeHeader" headerInfo= {stakleneOblogeHeaderTxt} />
        <BreadcrumbComponent/>
      <section className='stakleneOgradeContainer py-5 container-md my-5 border-2 border-bottom'>
        <article className='stakleneOgradeTxtContainer d-flex flex-column'>
          <h2 className='mt-5 mb-4'><span className="fontW600 izoText fs-1">Staklene obloge </span> – Savršen spoj dizajna i funkcionalnosti</h2>
          <p className='fs-5 px-md-3'>Staklene obloge predstavljaju moderan i praktičan način da osvežite prostor i unesete dozu elegancije. Bilo da ih koristite u kuhinji, kupatilu, dnevnom boravku ili poslovnom prostoru, staklene obloge nude estetsku privlačnost, izdržljivost i lako održavanje.</p>

          <h3 className="mt-5 fontW600">Prednosti staklenih obloga</h3>
          <ul>
            <li className="fs-5 mb-2"><span className="fontW600">Moderan i Elegantan izgled - </span>Staklene obloge izrađujemo prema vašim dimenzijama i zahtevima, savršeno uklapajući ih u vaš prostor.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Prilagodljivost po meri - </span>Koristimo visokokvalitetno staklo koje pruža maksimalnu sigurnost i otpornost.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Otpornost i dugotrajnost - </span>Koristimo visokokvalitetno staklo otporno na vlagu, toplotu i ogrebotine.</li>
            <li className="fs-5"><span className="fontW600">Jednostavno održavanje - </span>Glatke i neporozne površine olakšavaju čišćenje i održavanje.</li>
          </ul>

          <h3 className="mt-5 fontW600">Primena staklenih obloga</h3>
          <ul>
            <li className="fs-5 mb-2"><span className="fontW600">Kuhinje - </span>Zamena klasičnih pločica modernim staklenim rešenjima.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Kupatila - </span>Elegantne obloge otporne na vlagu i vodu</li>
            <li className="fs-5 mb-2"><span className="fontW600">Poslovni prostori - </span>Staklene obloge sa dekorativnim motivima za luksuzan izgled.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Dekorativni zidovi - </span>Dodajte jedinstven i sofisticiran detalj svakom prostoru.</li>
          </ul>

          <h3 className="mt-5 fontW600">Naše usluge</h3>
          <ul>
            <li className="fs-5 mb-2">Izrada staklenih obloga po meri</li>
            <li className="fs-5 mb-2">Precizna montaža i stručno savetovanje</li>
            <li className="fs-5">Odabir boja i dizajna koji odgovaraju vašem enterijeru</li>
            <li className="fs-5">Različiti stilovi i završne obrade</li>
          </ul>
          <p className="fs-5 mt-4">Dodajte dozu luksuza i praktičnosti uz staklene obloge. Kontaktirajte nas za personalizovanu ponudu i profesionalnu uslugu!</p>

          <img src={logo} className='ms-auto my-5' alt="Izo Decor Glass Logo" />

        </article>

      </section>
    </>
  )
}

export default StakleneObloge