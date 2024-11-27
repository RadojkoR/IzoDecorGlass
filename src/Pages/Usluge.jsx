import { SecondaryHeader } from "../Components/Layout";
import obradaStakla from "../assets/Images/uslugeImg/uslugeObradaStakla.webp";
import tusKabina from "../assets/Images/uslugeImg/uslugeTusKabine.webp";
import staklenaOgrada from "../assets/Images/uslugeImg/uslugeStakleneOgrade.webp";
import ogledalo from "../assets/Images/uslugeImg/uslugeOgledala.webp";
import stakleniZidovi from "../assets/Images/uslugeImg/uslugeStakleniZidovi.webp";
import staklenaVrata from "../assets/Images/uslugeImg/uslugeStaklenaVrata.webp";
import stakleneObloge from "../assets/Images/uslugeImg/uslugeStakleneObloge.webp";

import UslugeItem from "../Components/UslugePage/UslugeItem";
import RoutePageComponent from "../Components/Global/RoutePageComponent";

function Usluge() {
  const uslugeHeaderTxt = [
    { headingEl: "Usluge", para: "Tuš Kabine, StakleneOgrade" }
  ]

  const usluge = [
     {uslugeHeading: "Obrada Stakla", para: "Specijalizovani smo za preciznu obradu stakla, uključujući bušenje, brušenje, fazetiranje i druge tehnike. Naše usluge obezbeđuju visok kvalitet, savršenu završnu obradu i prilagođenost vašim potrebama, bilo da se radi o dekorativnim ili funkcionalnim staklenim rešenjima.", img: obradaStakla, paralaxClass: "paralaxObradaStakla", showBtnClass: "d-none"},
    {uslugeHeading: "Tuš Kabine", para: "Tuš kabine predstavljaju savršeno rešenje za funkcionalnost i estetiku vašeg kupatila. Bilo da želite moderan dizajn ili klasičan stil, naše tuš kabine pružaju udobnost, praktičnost i lako održavanje.", img: tusKabina, paralaxClass: "paralaxTusKabine", showBtnClass: "d-block"},
    {uslugeHeading: "Staklene Ograde", para: "Staklene ograde donose savršen spoj sigurnosti i sofisticiranog dizajna. Idealan su izbor za unutrašnje i spoljašnje prostore, pružajući otvoren i moderan izgled uz vrhunsku izdržljivost i lako održavanje.", img:staklenaOgrada, paralaxClass:"paralaxStakleneOgrade", showBtnClass: "d-block"},
    {uslugeHeading: "Ogledala", para: "Ogledala unose svetlost i eleganciju u svaki prostor. Bilo da tražite funkcionalnost ili dekorativni detalj, naša ogledala po meri savršeno se uklapaju u vaš dom ili poslovni prostor, pružajući kvalitet i besprekornu estetiku.", img: ogledalo, paralaxClass:"paralaxOgledala", showBtnClass: "d-block"},
    {uslugeHeading: "Stakleni Zidovi", para: "Stakleni zidovi unose prirodnu svetlost i otvaraju prostor, stvarajući savremenu i elegantnu atmosferu. Idealan su izbor za moderan dizajn enterijera i eksterijera, pružajući osećaj prostranosti i sofisticiranosti.", img: stakleniZidovi, paralaxClass:"paralaxStakleniZidovi", showBtnClass: "d-block"},
    {uslugeHeading: "Staklena Vrata", para: "Staklena vrata su savršeno rešenje za povezivanje prostora uz očuvanje prirodne svetlosti i estetske privlačnosti. Idealan su izbor za moderne enterijere, omogućavajući elegantan i prostran izgled uz funkcionalnost. Sa mogućnošću prilagođavanja dizajna, savršeno se uklapaju u svaki stil i namenu.", img: staklenaVrata, paralaxClass:"paralaxStaklenaVrata", showBtnClass: "d-block"},
    {uslugeHeading: "Staklene Obloge", para: "Staklene obloge unose sofisticiranost i funkcionalnost u svaki prostor. Savršene za kuhinje, kupatila ili poslovne prostore, omogućavaju jednostavno održavanje i dugotrajan estetski izgled. Sa mogućnošću prilagođavanja dizajna, staklene obloge se lako uklapaju u svaki ambijent, stvarajući moderan i elegantan vizuelni dojam.", img: stakleneObloge, paralaxClass:"d-none", showBtnClass: "d-block"},
  ]
  return (
    <>
      <SecondaryHeader bgHeader="uslugeHeader" headerInfo={uslugeHeaderTxt} />
      <RoutePageComponent />
      {usluge.length >0 ? (
        usluge.map((item, index) => (
            <UslugeItem key={index}  heading={item.uslugeHeading} para={item.para} img={item.img} paralaxClass={item.paralaxClass} showBtn={item.showBtnClass}/> 
        ))
      ) : (<h1>Item not found</h1>)}
      
    </>

  )
}

export default Usluge