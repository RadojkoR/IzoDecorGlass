import { Link } from "react-router-dom"


function UslugeHome() {
  return (
    <>
    <section>
        <section className="container-md">
                <div className="row mx-auto justify-content-center my-5">
                    <article 
                    className="uslugeHomeContainer col-lg-3 col-md-6 col-12 mx-auto d-flex flex-column align-items-center my-5" data-aos="flip-right" 
                    data-aos-delay="100">
                        {/* <GiDrill className="fs-1 mt-4 mb-3 text-danger" /> */}
                        <h3 className="fs-4 fontW600 izoText">Obrada Stakla</h3>
                        <p className="text-center textLight mt-3">Izrađujemo staklo po meri uz precizno bušenje, brušenje i fazetiranje. Pružamo visok kvalitet i savršen završni izgled za svaki prostor.</p>
                        <Link to={"#"} className="btn ms-auto saznajViseBtn fontW600 mt-4 mt-auto" >Saznaj Vise</Link>
                    </article>
                    <article 
                    className="uslugeHomeContainer col-lg-3 col-md-6 d-flex flex-column align-items-center my-5" 
                    data-aos="flip-right" 
                    data-aos-delay="300">
                        {/* <LiaPencilRulerSolid className="fs-1 mt-4 mb-3 text-danger" /> */}
                        <h3 className="fs-4 fontW600 izoText">Tuš Kabine</h3>
                        <p className="text-center textLight mt-3">Izrađujemo staklene tuš kabine po meri, spajajući funkcionalnost i moderan dizajn. Kvalitetna obrada i lako održavanje za vaš idealan prostor.</p>
                        <Link to={`/usluge/tušKabine`} className="btn ms-auto saznajViseBtn fontW600 mt-auto" >Saznaj Vise</Link>
                    </article>
                    <article 
                    className="uslugeHomeContainer col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center my-5" 
                    data-aos="flip-right" 
                    data-aos-delay="500">
                        {/* <BsTools className="fs-1 mt-4 mb-3 text-danger" /> */}
                        <h3 className="fs-4 fontW600 izoText">Staklene Ograde</h3>
                        <p className="text-center textLight mt-3">Izrađujemo staklene ograde koje kombinuju sigurnost i estetski dizajn. Idealno rešenje za vaš enterijer i eksterijer.</p>
                        <Link to={`/usluge/stakleneOgrade`} className="btn ms-auto saznajViseBtn fontW600 mt-auto" >Saznaj Vise</Link>
                    </article>
                    <article 
                    className="uslugeHomeContainer col-lg-3 col-md-6 d-flex flex-column align-items-center my-5" 
                    data-aos="flip-right" 
                    data-aos-delay="700">
                        {/* <GiLaurelsTrophy className="fs-1 mt-4 mb-3 text-danger" /> */}
                        <h3 className="fs-4 fontW600 izoText">Ogledala</h3>
                        <p className="text-center textLight mt-3">Nudimo ogledala po meri, savršen spoj funkcionalnosti i estetike za vaš prostor. Kvalitetna izrada i elegantan dizajn.</p>
                        <Link to={`/usluge/ogledala`} className="btn ms-auto saznajViseBtn fontW600 mt-auto" >Saznaj Vise</Link>
                    </article>
                    <article 
                    className="uslugeHomeContainer col-lg-3 col-md-6 d-flex flex-column align-items-center my-5" 
                    data-aos="flip-right" 
                    data-aos-delay="100">
                        {/* <GiLaurelsTrophy className="fs-1 mt-4 mb-3 text-danger" /> */}
                        <h3 className="fs-4 fontW600 izoText">Stakleni Zidovi</h3>
                        <p className="text-center textLight mt-3">Stakleni zidovi pružaju modernu i elegantnu podelu prostora. Idealno rešenje za prozračnost i svetlost u vašem enterijeru.</p>
                        <Link to={`/usluge/stakleniZidovi`} className="btn ms-auto saznajViseBtn fontW600 mt-auto" >Saznaj Vise</Link>
                    </article>
                    <article 
                    className="uslugeHomeContainer col-lg-3 col-md-6 d-flex flex-column align-items-center my-5" 
                    data-aos="flip-right" 
                    data-aos-delay="300">
                        {/* <GiLaurelsTrophy className="fs-1 mt-4 mb-3 text-danger" /> */}
                        <h3 className="fs-4 fontW600 izoText">Staklena Vrata</h3>
                        <p className="text-center textLight mt-3">Izrađujemo staklena vrata po meri koja spajaju eleganciju i funkcionalnost. Savršeno za moderan i svetao prostor.</p>
                        <Link to={`/usluge/staklenaVrata`} className="btn ms-auto saznajViseBtn fontW600 mt-auto" >Saznaj Vise</Link>
                    </article>
                    <article 
                    className="uslugeHomeContainer col-lg-3 col-md-6 d-flex flex-column align-items-center my-5" 
                    data-aos="flip-right" 
                    data-aos-delay="500">
                        {/* <GiLaurelsTrophy className="fs-1 mt-4 mb-3 text-danger" /> */}
                        <h3 className="fs-4 fontW600 izoText">Zidne Obloge od Stakla</h3>
                        <p className="text-center textLight mt-3">Elegantne i funkcionalne staklene obloge za zidove koje unose modernost i lakoću održavanja u vaš prostor.</p>
                        <Link to={`/usluge/stakleneObloge`} className="btn ms-auto saznajViseBtn fontW600 mt-auto" >Saznaj Vise</Link>
                    </article>
                </div>
            </section>
    </section>
    </>
  )
}

export default UslugeHome