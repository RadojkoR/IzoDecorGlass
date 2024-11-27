import PropTypes from "prop-types";

function MarqueeImgSlider({ images, customClass }) {
    return (
        <section className={`marquee ${customClass}`}>
            <div className="marqueeFilterContainer my-5"></div>
            <article className="marqueeContent my-5">
                {
                    images.map((image, index) => (
                        <div key={index} className="marqueeItem"><img src={image.src} alt={image.alt} /></div>
                    ))
                }

                {
                    images.map((image, index) => (
                        <div key={index} className="marqueeItem"><img src={image.src} alt="Image 1" /></div>
                    ))
                }

            </article>

        </section>
    )
}

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