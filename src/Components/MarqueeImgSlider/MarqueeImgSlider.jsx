import ImgOne from "../../assets/Images/shower1unsplash.webp";
import ImgTwo from "../../assets/Images/glass2Railingspexels.webp";
import ImgThree from "../../assets/Images/glass1Railingspexels.webp";
import ImgFour from "../../assets/Images/glassWallunsplash.webp";

function MarqueeImgSlider() {
    return (
        <section className="marquee">
            <div className="marqueeFilterContainer my-5"></div>
            <article className="marqueeContent my-5">
                <div className="marqueeItem"><img src={ImgOne} alt="Image 1" /></div>
                <div className="marqueeItem"><img src={ImgTwo} alt="Image 2" /></div>
                <div className="marqueeItem"><img src={ImgThree} alt="Image 3" /></div>
                <div className="marqueeItem"><img src={ImgFour} alt="Image 4" /></div>

                {/* Duplični set slika za beskonačnu animaciju */}
                <div className="marqueeItem"><img src={ImgOne} alt="Image 1" /></div>
                <div className="marqueeItem"><img src={ImgTwo} alt="Image 2" /></div>
                <div className="marqueeItem"><img src={ImgThree} alt="Image 3" /></div>
                <div className="marqueeItem"><img src={ImgFour} alt="Image 4" /></div>
            </article>

        </section>
    )
}

export default MarqueeImgSlider