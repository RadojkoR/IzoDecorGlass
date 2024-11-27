import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css"
import { useEffect } from "react";

import { BsTools } from "react-icons/bs";
import { GiDrill } from "react-icons/gi";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { GiLaurelsTrophy } from "react-icons/gi";

function BanerUsluge() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <>
            <section className="container-md">
                <div className="row mx-auto justify-content-between my-5">
                    <article
                        className="banerItemContainer col-lg-3 col-6 d-flex flex-column align-items-center my-2" data-aos="flip-right"
                        data-aos-delay="100">
                        <GiDrill className="fs-1 mt-4 mb-3 text-danger" />
                        <h2 className="fs-4 fontW600 izoText">Obrada Stakla</h2>
                        <p className="text-center text-black-50 mt-4">Precizno bušenje, brušenje, fazetiranje i još mnogo toga</p>
                    </article>
                    <article
                        className="banerItemContainer col-lg-3 col-6 d-flex flex-column align-items-center my-2"
                        data-aos="flip-right"
                        data-aos-delay="300">
                        <LiaPencilRulerSolid className="fs-1 mt-4 mb-3 text-danger" />
                        <h2 className="fs-4 fontW600 izoText">Staklo po vašoj meri</h2>
                        <p className="text-center text-black-50 mt-4">Ogledala, tuš kabine, stakleni zidovi i ograde prilagođeni vašim potrebama i prostoru.</p>
                    </article>
                    <article
                        className="banerItemContainer col-lg-3 col-6 d-flex flex-column align-items-center my-2"
                        data-aos="flip-right"
                        data-aos-delay="500">
                        <BsTools className="fs-1 mt-4 mb-3 text-danger" />
                        <h2 className="fs-4 fontW600 izoText">Stručna montaža</h2>
                        <p className="text-center text-black-50 mt-4">Ogledala, tuš kabine, stakleni zidovi i ograde prilagođeni vašim potrebama i prostoru.</p>
                    </article>
                    <article
                        className="banerItemContainer col-lg-3 col-6 d-flex flex-column align-items-center my-2"
                        data-aos="flip-right"
                        data-aos-delay="700">
                        <GiLaurelsTrophy className="fs-1 mt-4 mb-3 text-danger" />
                        <h2 className="fs-4 fontW600 izoText">Visok kvalitet</h2>
                        <p className="text-center text-black-50 mt-4">Ogledala, tuš kabine, stakleni zidovi i ograde prilagođeni vašim potrebama i prostoru.</p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default BanerUsluge