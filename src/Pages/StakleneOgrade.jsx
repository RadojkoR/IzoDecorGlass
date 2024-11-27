import BreadcrumbComponent from '../Components/Global/BreadcrumbComponent';
import { SecondaryHeader } from '../Components/Layout'
import logo from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function StakleneOgrade() {
  const stakleneOgradeHeaderTxt = [
    { headingEl: "Staklene Ograde", para: "Spoj elegancije i funkcionalnosti" }
  ]
  return (
    <>
      <SecondaryHeader bgHeader="stakleneOgradeHeader" headerInfo={stakleneOgradeHeaderTxt} />
      <BreadcrumbComponent />
      <section className='stakleneOgradeContainer py-5 container-md my-5 border-2 border-bottom'>
        <article className='stakleneOgradeTxtContainer d-flex flex-column'>
          <h2 className='mt-5 mb-4'><span className="fontW600 izoText fs-1">Staklene ograde</span> – Sigurnost i stil u savršenom skladu</h2>
          <p className='fs-5 px-md-3'>Staklene ograde predstavljaju moderan i elegantan izbor za vaš dom, poslovni prostor ili eksterijer. Pružaju osećaj otvorenosti, sigurnost i sofisticiran dizajn, čineći ih idealnim rešenjem za stepeništa, terase, balkone ili dvorišta.</p>

          <h3 className="mt-5 fontW600">Prednosti naših staklenih ograda</h3>
          <ul>
            <li className="fs-5 mb-2"><span className="fontW600">Moderan i minimalistički izgled - </span> Staklene ograde unose eleganciju i prozračnost u svaki prostor</li>
            <li className="fs-5 mb-2"><span className="fontW600">Sigurnost i izdržljivost - </span>Koristimo visokokvalitetno staklo koje pruža maksimalnu sigurnost i otpornost.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Prilagođen dizajn - </span> Naše ograde izrađujemo prema vašim specifikacijama, u različitim stilovima i završnim obradama.</li>
            <li className="fs-5"><span className="fontW600">Jednostavno održavanje - </span> Glatka površina stakla omogućava lako čišćenje i dugotrajan sjaj.</li>
          </ul>

          <h3 className="mt-5 fontW600">Gde se koriste staklene ograde?</h3>
          <ul>
            <li className="fs-5 mb-2"><span className="fontW600">Balkoni i terase  - </span>Za neometan pogled i osećaj prostranosti.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Stepeništa - </span>Dodajte elegantan i siguran detalj unutrašnjosti ili eksterijeru.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Dvorišta i bašte - </span>Kreirajte moderan prelaz između prostora.</li>
          </ul>

          <h3 className="mt-5 fontW600">Naše usluge</h3>
          <ul>
            <li className="fs-5 mb-2">Konsultacije i dizajn staklenih ograda</li>
            <li className="fs-5 mb-2">Izrada po meri sa različitim opcijama nosača (inox, aluminijum, skriveni sistemi)</li>
            <li className="fs-5">Profesionalna montaža i završna obrada</li>
          </ul>
          <p className="fs-5 mt-4"><span className="fontW600">Staklene ograde za vaš prostor – </span>spoj funkcionalnosti, sigurnosti i vrhunskog stila. Kontaktirajte nas za više informacija i ponudu prilagođenu vašim potrebama.</p>

          <img src={logo} className='ms-auto my-5' alt="Izo Decor Glass Logo" />
        </article>
      </section>
    </>

  )
}

export default StakleneOgrade