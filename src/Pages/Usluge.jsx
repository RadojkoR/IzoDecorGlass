import { SecondaryHeader } from "../Components/Layout"


function Usluge() {
  const uslugeHeaderTxt = [
    {headingEl: "Usluge", para: "Tuš Kabine, StakleneOgrade"}
  ]
  return (
    <>
    <SecondaryHeader bgHeader="uslugeHeader" headerInfo={uslugeHeaderTxt}/>
    <section className="my-5">
      <h2 className="text-center">Usluge</h2>
    </section>
    
    </>
    
  )
}

export default Usluge