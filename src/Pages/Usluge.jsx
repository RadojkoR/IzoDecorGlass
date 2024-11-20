import { SecondaryHeader } from "../Components/Layout"
import tusKabina from "../assets/Images/uslugeTusKabine.webp"
import staklenaOgrada from "../assets/Images/uslugeStakleneOgrade.webp"

function Usluge() {
  const uslugeHeaderTxt = [
    { headingEl: "Usluge", para: "Tuš Kabine, StakleneOgrade" }
  ]
  return (
    <>
      <SecondaryHeader bgHeader="uslugeHeader" headerInfo={uslugeHeaderTxt} />
      <section className='uslugeContainerOne pb-4 container-md p-2'>
        <h2>Tus Kabine</h2>
        <article className="uslugeContentContainer row g-0 mt-5">
          <div className="col-lg-8 col-12">
            <p className="fs-5 px-md-3">Tuš kabine predstavljaju savršeno rešenje za funkcionalnost i estetiku vašeg kupatila. Bilo da želite moderan dizajn ili klasičan stil, naše tuš kabine pružaju udobnost, praktičnost i lako održavanje.</p>
          </div>
          <div className="uslugeImgContainer col-lg-4 col-12 mx-auto">
            <img src={tusKabina} className="w-100" alt="" />
          </div>
        </article>
      </section>
      <div className="uslugePartalax uslugeParalaxOne"></div>
      <section className='uslugeContainer pb-4 container-md p-2'>
        <h2>Staklene Ograde</h2>
        <article className="uslugeContentContainer row g-0 mt-5">
          <div className="col-lg-8 col-12">
            <p className="fs-5 px-md-3">Tuš kabine predstavljaju savršeno rešenje za funkcionalnost i estetiku vašeg kupatila. Bilo da želite moderan dizajn ili klasičan stil, naše tuš kabine pružaju udobnost, praktičnost i lako održavanje.</p>
          </div>
          <div className="uslugeImgContainer col-lg-4 col-12 mx-auto">
            <img src={ staklenaOgrada} className="w-100" alt="" />
          </div>
        </article>
      </section>

    </>

  )
}

export default Usluge