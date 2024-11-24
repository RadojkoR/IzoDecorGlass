import { SecondaryHeader } from "../Components/Layout";
import tusKabina from "../assets/Images/uslugeTusKabine.webp";
import staklenaOgrada from "../assets/Images/uslugeStakleneOgrade.webp";
import ogledalo from "../assets/Images/uslugeImg/uslugeOgledala.webp";
import stakleniZidovi from "../assets/Images/uslugeImg/uslugeStakleniZidovi.webp";

import UslugeItem from "../Components/UslugePage/UslugeItem";

function Usluge() {
  const uslugeHeaderTxt = [
    { headingEl: "Usluge", para: "Tuš Kabine, StakleneOgrade" }
  ]

  const usluge = [
    {uslugeHeading: "Tuš Kabine", para: "Tuš kabine predstavljaju savršeno rešenje za funkcionalnost i estetiku vašeg kupatila. Bilo da želite moderan dizajn ili klasičan stil, naše tuš kabine pružaju udobnost, praktičnost i lako održavanje.", img: tusKabina, paralaxClass: "paralaxTusKabine"},
    {uslugeHeading: "Staklene Ograde", para: "Staklene ograde donose savršen spoj sigurnosti i sofisticiranog dizajna. Idealan su izbor za unutrašnje i spoljašnje prostore, pružajući otvoren i moderan izgled uz vrhunsku izdržljivost i lako održavanje.", img:staklenaOgrada, paralaxClass:"paralaxStakleneOgrade"},
    {uslugeHeading: "Ogledala", para: "Ogledala unose svetlost i eleganciju u svaki prostor. Bilo da tražite funkcionalnost ili dekorativni detalj, naša ogledala po meri savršeno se uklapaju u vaš dom ili poslovni prostor, pružajući kvalitet i besprekornu estetiku.", img: ogledalo, paralaxClass:"paralaxOgledala"},
    {uslugeHeading: "Stakleni Zidovi", para: "Stakleni zidovi unose prirodnu svetlost i otvaraju prostor, stvarajući savremenu i elegantnu atmosferu. Idealan su izbor za moderan dizajn enterijera i eksterijera, pružajući osećaj prostranosti i sofisticiranosti.", img: stakleniZidovi, paralaxClass:"paralaxStakleniZidovi"},
  ]
  return (
    <>
      <SecondaryHeader bgHeader="uslugeHeader" headerInfo={uslugeHeaderTxt} />
      {usluge.length >0 ? (
        usluge.map((item, index) => (
            <UslugeItem key={index}  heading={item.uslugeHeading} para={item.para} img={item.img} paralaxClass={item.paralaxClass}/> 
        ))
      ) : (<h1>Item not found</h1>)}
      
    </>

  )
}

export default Usluge