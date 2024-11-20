import { SecondaryHeader } from "../Components/Layout"
import TipoviStaklaItem from "../Components/TipoviStaklaItem/TipoviStaklaItem"


function TipoviStakla() {
  const tipoviStaklaHeaderTxt = [
    {headingEl: "Tipovi Stakla", para: "Savršeno rešenje za svaki prostor"}
  ]

  const typeOfGlass = [
    {
      title: "Providno Staklo",
      description: "Klasičan i univerzalan izbor koji se uklapa u svaki prostor. Providno staklo omogućava maksimalnu prolaznost svetlosti, što ga čini idealnim za prozore, tuš kabine, staklene pregrade"
    },
    {
      title: "Kaljeno staklo",
      description: "Kaljeno staklo je poznato po svojoj čvrstoći i otpornosti na udarce. U slučaju lomljenja, razbija se na sitne komade bez oštrih ivica, čineći ga izuzetno sigurnim. Pogodno je za Balkonske i stepenišne ograde, Staklene stolove,Staklene stolove"
    },
    {
      title: "Matirano staklo",
      description: "Odlično za postizanje privatnosti bez gubitka prirodnog osvetljenja. Njegova blago zamućena površina idealna je za Kupatilske prozore, Tuš kabine, Kancelarijske pregrade"
    },
    {
      title: "Laminirano staklo",
      description: "Laminirano staklo se sastoji od dva ili više slojeva stakla povezanih folijom koja sprečava njegovo raspadanje pri lomljenju. Ovo ga čini savršenim za Zaštitu od provala, Izolaciju buke, Spoljna stakla na višespratnicama"
    }
  ]

  return (
    <>
      <SecondaryHeader bgHeader="tipoviStaklaHeader" headerInfo={tipoviStaklaHeaderTxt}/>
      <section className='tipoviStaklaContainer py-5 container-md my-4 '>
        <h2>Tipovi Stakla &#8213; Savršeno rešenje za svaki prostor</h2>
        <article className="tipoviStakla">
          <p className="fs-5 px-md-3">Staklo je materijal koji kombinuje estetiku, funkcionalnost i trajnost. Bez obzira na to da li opremate poslovni prostor, dom ili eksterijer, pravilan odabir tipa stakla ključan je za postizanje željenog izgleda i funkcije. Predstavljamo vam najčešće vrste stakla koje možete koristiti:</p>
        </article>
      </section>
      <section className="tipoviStaklaParalax"></section>
      {
        typeOfGlass.map((type,index) => (
          <TipoviStaklaItem key={index} title={type.title} description={type.description}/>
        ))
      }
     
    </>
  )
}

export default TipoviStakla