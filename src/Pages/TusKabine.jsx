import { SecondaryHeader } from "../Components/Layout"
import MarqueeImgSlider from "../Components/MarqueeImgSlider/MarqueeImgSlider"
import logo from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

import imgOne from "../assets/Images/shower2.webp";
import imgTwo from "../assets/Images/shower3.webp";
import imgThree from "../assets/Images/shower4.webp";
import imgFour from "../assets/Images/shower5.webp";
import imgFive from "../assets/Images/shower6.webp";
import imgSix from "../assets/Images/shower7.webp";



function TusKabine() {

  const tusKabineHeaderTxt = [
    {headingEl: "Tuš Kabine", para: "Spoj Funkcionalnosti i estetike"}
  ]


  const showerMarquee = [
    { src: imgOne, alt: "Shower Image" },
    { src: imgTwo, alt: "Shower Image" },
    { src: imgThree, alt: "Shower Image" },
    { src: imgFour, alt: "Shower Image" },
    { src: imgFive, alt: "Shower Image" },
    { src: imgSix, alt: "Shower Image" },
  ]
  return (
    <>
      <SecondaryHeader bgHeader="tusKabineHeader" headerInfo={tusKabineHeaderTxt}/>
      {/* <div className="paralaxTusKabine my-4">
        <div className="paralaxColor"> */}
          <section className="tusKabineContainer container-md py-5 position-relative my-5 border-2 border-bottom">
            <h3 className="mt-5 mb-4">Tuš Kabine &#8213; Spoj Funkcionalnosti i estetike</h3>
            <article className="tusKabineTxtContainer d-flex flex-column">
              <p className="fs-5 px-md-3">Tuš kabine predstavljaju savršen način da prilagodite svaki detalj vašeg kupatila, stvarajući prostor za opuštanje i uživanje. Bez obzira na dimenzije ili specifičnosti prostora, naši stručnjaci su tu da pronađu najbolje rešenje koje u potpunosti odgovara vašim željama i potrebama.</p>
              <p className="fs-5 px-md-3">Ono što naše tuš kabine čini posebnim jeste mogućnost potpune personalizacije – od oblika i veličine, do izbora vrste stakla. Da li preferirate elegantne kvadratne linije ili zakrivljene ivice? Da li je vaš izbor klasično providno, moderno matirano ili luksuzno obojeno staklo? Sve ove opcije su vam na raspolaganju.</p>

              <MarqueeImgSlider images={showerMarquee} customClass={"showerMarquee"} />

              <p className="fs-5 px-md-3 mt-5">Koristimo kaljeno i laminirano staklo visokog kvaliteta, koje je ne samo estetski privlačno, već i izuzetno sigurno i dugotrajno. Naša stakla su tretirana specijalnim premazima koji omogućavaju lako održavanje i smanjuju nakupljanje kamenca, čime se štedi vaše vreme i trud.</p>
              <p className="fs-5 px-md-3">Ukoliko želite dodatnu dozu luksuza, nudimo mogućnost ugradnje LED rasvete koja će stvoriti prijatnu atmosferu unutar vaše tuš kabine. Naš tim pažljivo postavlja svaki detalj, vodeći računa o funkcionalnosti i sigurnosti, dok krajnji rezultat odražava vaše zamisli i stil.</p>
              <p className="fs-5 px-md-3">Od klasičnih do modernih rešenja, svaki projekat izrađujemo s maksimalnom preciznošću, tako da vaše kupatilo postane oaza mira i zadovoljstva. Prepustite se stručnjacima i zajedno kreirajmo savršenu tuš kabinu koja će odgovarati vašem ukusu i prostoru.</p>
              <img src={logo} className='ms-auto my-5' alt="Izo Decor Glass Logo" />
            </article>
          </section>
        {/* </div>

      </div> */}

    </>
  )
}

export default TusKabine