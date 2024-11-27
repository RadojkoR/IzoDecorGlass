import RoutePageComponent from "../Components/Global/RoutePageComponent";
import { SecondaryHeader } from "../Components/Layout"
import logo from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function StakleniZidovi() {
    const stakleniZidoviHeaderTxt = [
        {headingEl: "Stakleni Zidovi", para: "Zidovi koji otvaraju prostor."}
    ]
  return (
   <>
    <SecondaryHeader bgHeader="stakleniZidoviHeader" headerInfo={stakleniZidoviHeaderTxt} />
    <RoutePageComponent/>
    <section className='stakleneOgradeContainer container-md mb-5 border-2 border-bottom'>
        <article className='stakleneOgradeTxtContainer d-flex flex-column'>
          <h2 className='mt-5 mb-4'><span className="fontW600 izoText fs-1">Stakleni zidovi</span> – Spoj elegancije i funkcionalnosti</h2>
          <p className='fs-5 px-md-3'>Stakleni zidovi su savršen način da unesete prirodnu svetlost, otvorenost i moderan dizajn u vaš prostor. Bilo da uređujete poslovni ambijent, kuću ili stan, stakleni zidovi donose osećaj prostranosti i prefinjenosti, dok istovremeno zadržavaju funkcionalnost i privatnost.</p>

          <h3 className="mt-5 fontW600">Prednosti naših staklenih zidova</h3>
          <ul>
            <li className="fs-5 mb-2"><span className="fontW600">Moderni dizajn - </span> Idealni za savremene enterijere, stakleni zidovi unose eleganciju i luksuz u svaki prostor.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Prilagodljivost po meri - </span>Zidovi su izrađeni po vašim specifikacijama, omogućavajući savršeno uklapanje u svaki ambijent.</li>
            <li className="fs-5"><span className="fontW600">Izdržljivost i sigurnost - </span> Koristimo visokokvalitetno staklo koje pruža maksimalnu sigurnost i otpornost na udarce.</li>
            <li className="fs-5"><span className="fontW600">Poboljšanje osvetljenosti - </span> Stakleni zidovi omogućavaju prirodnoj svetlosti da prođe kroz prostor, čineći ga svetlijim i prijatnijim.</li>
          </ul>

          <h3 className="mt-5 fontW600">Primena staklenih zidova</h3>
           <ul>
            <li className="fs-5 mb-2"><span className="fontW600">Poslovni prostori - </span> Deljenje prostora bez gubitka prostranosti i svetlosti.</li>
            <li className="fs-5 mb-2"><span className="fontW600">Stambeni enterijeri - </span>Moderan dodatak koji vizuelno proširuje prostor.</li>
            <li className="fs-5"><span className="fontW600">Eksterijeri - </span> Elegantan prelaz između unutrašnjeg i spoljašnjeg prostora.</li>
          </ul>

          <h3 className="mt-5 fontW600">Naše usluge</h3>
          <ul>
            <li className="fs-5 mb-2">Dizajn i izrada staklenih zidova po meri</li>
            <li className="fs-5 mb-2">Profesionalna montaža</li>
            <li className="fs-5"><span className="fontW600">Različite završne obrade i opcije – </span>  matirano staklo, transparentno, sa ukrasnim detaljima</li>
          </ul>
          <p className="fs-5 mt-4"><span className="fontW600">Oživite svoj prostor staklenim zidovima –  </span> kontaktirajte nas za savetovanje i ponudu prilagođenu vašim potrebama.</p>
          <img src={logo} className='ms-auto my-5' alt="Izo Decor Glass Logo" />
        </article>
      </section>
   </>
  )
}

export default StakleniZidovi