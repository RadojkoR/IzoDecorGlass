import { SecondaryHeader } from '../Components/Layout'
import logo from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function StakleneOgrade() {
  const stakleneOgradeHeaderTxt = [
    {headingEl: "StakleneOgrade", para: "Spoj elegancije i funkcionalnosti"}
  ]
  return (
    <>
      <SecondaryHeader bgHeader="stakleneOgradeHeader" headerInfo= {stakleneOgradeHeaderTxt} />

      <section className='stakleneOgradeContainer py-5 container-md my-5 border-2 border-bottom'>
        <article className='stakleneOgradeTxtContainer d-flex flex-column'>
          <h3 className='mt-5 mb-4'>Staklene ograde – Spoj elegancije i funkcionalnosti</h3>
          <p className='fs-5 px-md-3'>Staklene ograde predstavljaju savremeno i estetski privlačno rešenje koje prostoru daje osećaj prostranosti i luksuza. Bilo da se koriste za unutrašnje stepenice, balkone, terase ili spoljašnje prostore, staklene ograde su idealan izbor za sve koji žele kombinaciju modernog dizajna i sigurnosti.</p>

          <p className='fs-5 px-md-3'>Ono što ih čini posebnim jeste njihov minimalistički izgled koji se savršeno uklapa u svaki stil uređenja – od klasičnog do potpuno modernog. Transparentnost stakla omogućava više prirodne svetlosti, što dodatno doprinosi osećaju otvorenosti i topline u prostoru.</p>

          <p className='fs-5 px-md-3'>Naše staklene ograde izrađene su od visokokvalitetnog kaljenog ili laminiranog stakla, koje pruža vrhunsku čvrstoću i sigurnost. Pored transparentnog stakla, u ponudi imamo i matirane, peskirane ili obojene varijante, koje omogućavaju dodatnu privatnost i unikatni vizuelni efekat.</p>

          <p className='fs-5 px-md-3'>Konstrukcija staklenih ograda dolazi u kombinaciji sa nerđajućim čelikom, aluminijumom ili drvetom, pružajući mogućnost prilagođavanja vašim specifičnim zahtevima. Naši stručnjaci vode računa o svakom detalju, od preciznih merenja do montaže, kako bismo obezbedili savršeno uklapanje i besprekornu stabilnost.</p>

          <p className='fs-5 px-md-3'>Neka vaša terasa, stepenište ili balkon zasijaju u punom sjaju uz staklene ograde koje će impresionirati svakog posetioca. Kontaktirajte nas i zajedno kreirajmo rešenje koje savršeno odgovara vašem prostoru i stilu!</p>

          <img src={logo} className='ms-auto my-5' alt="Izo Decor Glass Logo" />

        </article>

      </section>
    </>

  )
}

export default StakleneOgrade