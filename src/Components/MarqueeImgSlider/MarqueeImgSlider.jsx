import PropTypes from "prop-types";

function MarqueeImgSlider({images, customClass}) {
    console.log();
    

    return (
        <section className={`marquee ${customClass}`}>
            <div className="marqueeFilterContainer my-5"></div>
            <article className="marqueeContent my-5">
                {
                    images.map((image, index) => (
                        <div key={index} className="marqueeItem"><img src={image.src} alt={image.alt} /></div>
                    ))
                }               

                {/* Duplični set slika za beskonačnu animaciju */}
                 {
                    images.map((image, index) => (
                        <div key={index} className="marqueeItem"><img src={image.src} alt="Image 1" /></div>
                    ))
                }
               
            </article>

        </section>
    )
}

// Dodavanje proptypes validacije
MarqueeImgSlider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
    customClass: PropTypes.string,
};

export default MarqueeImgSlider