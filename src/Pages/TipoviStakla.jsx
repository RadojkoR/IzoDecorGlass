import { SecondaryHeader } from "../Components/Layout"
import TipoviStaklaItem from "../Components/TipoviStaklaItem/TipoviStaklaItem"
import clearGlassImg from "../assets/Images/tipoviStaklaImg/clearGlass.webp";
import lacobelGlassImg from "../assets/Images/tipoviStaklaImg/lacobelGlass.webp";
import temperedGlassImg from "../assets/Images/tipoviStaklaImg/temperedGlass.webp";
import frostedGlassImg from "../assets/Images/tipoviStaklaImg/frostedGlass.webp";
import laminatedGlassImg from "../assets/Images/tipoviStaklaImg/laminatedGlass.webp";
import BreadcrumbComponent from "../Components/Global/BreadcrumbComponent";

function TipoviStakla() {
  const tipoviStaklaHeaderTxt = [
    { headingEl: "Tipovi Stakla", para: "Savršeno rešenje za svaki prostor" }
  ]

  const typeOfGlass = [
    {
      title: "Providno Staklo",
      description: "Klasičan i univerzalan izbor koji se uklapa u svaki prostor. Providno staklo omogućava maksimalnu prolaznost svetlosti, što ga čini idealnim za prozore, tuš kabine, staklene pregrade",
      img: clearGlassImg,
      paralaxClass: "paralaxOne"
    },
    {
      title: "Lacobel - Lakirano Staklo",
      description: "Lakobel staklo je dekorativno staklo bojeno specijalnim postupkom, idealno za savremene enterijere. Popularno među dizajnerima i arhitektama, koristi se za oblaganje zidova, plakara, kuhinjskih površina, pa čak i kao zamena za pločice u kupatilima. Njegova glatka i sjajna površina unosi eleganciju i stil, dok širok izbor boja omogućava prilagođavanje svakom prostoru.",
      img: lacobelGlassImg,
      paralaxClass: "paralaxFive"
    },
    {
      title: "Kaljeno staklo",
      description: "Kaljeno staklo je poznato po svojoj čvrstoći i otpornosti na udarce. U slučaju lomljenja, razbija se na sitne komade bez oštrih ivica, čineći ga izuzetno sigurnim. Pogodno je za Balkonske i stepenišne ograde, Staklene stolove.",
      img: temperedGlassImg,
      paralaxClass: "paralaxTwo"
    },
    {
      title: "Matirano staklo",
      description: "Odlično za postizanje privatnosti bez gubitka prirodnog osvetljenja. Njegova blago zamućena površina idealna je za Kupatilske prozore, Tuš kabine, Kancelarijske pregrade",
      img: frostedGlassImg,
      paralaxClass: "paralaxThree"
    },
    {
      title: "Laminirano staklo",
      description: "Laminirano staklo se sastoji od dva ili više slojeva stakla povezanih folijom koja sprečava njegovo raspadanje pri lomljenju. Ovo ga čini savršenim za Zaštitu od provala, Izolaciju buke, Spoljna stakla na višespratnicama",
      img: laminatedGlassImg,
      paralaxClass: "paralaxFour"
    }
  ]

  return (
    <>
      <SecondaryHeader bgHeader="tipoviStaklaHeader" headerInfo={tipoviStaklaHeaderTxt} />
      <BreadcrumbComponent />
      <section className='tipoviStaklaContainer py-5 container-md my-4 '>
        <h2>Tipovi Stakla &#8213; Savršeno rešenje za svaki prostor</h2>
        <article className="tipoviStakla mt-4">
          <p className="fs-5 px-md-3">Staklo je materijal koji kombinuje estetiku, funkcionalnost i trajnost. Bez obzira na to da li opremate poslovni prostor, dom ili eksterijer, pravilan odabir tipa stakla ključan je za postizanje željenog izgleda i funkcije. Predstavljamo vam najčešće vrste stakla koje možete koristiti:</p>
        </article>
      </section>
      {
        typeOfGlass.map((type, index) => (
          <TipoviStaklaItem key={index} title={type.title} description={type.description} img={type.img} paralaxClass={type.paralaxClass} />
        ))
      }

    </>
  )
}

export default TipoviStakla