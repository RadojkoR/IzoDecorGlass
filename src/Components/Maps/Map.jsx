import PropTypes from "prop-types";

function Map({ location }) {
  return (
    
      <section className="container-md mx-auto mb-5">
        <h3 className="mb-5">{location.title}</h3>
        <h4 className="mb-5 text-center">{location.subTitle}</h4>
        <iframe className="mb-5" src={location.src}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </section>
    
    
  )
}

Map.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })
};

export default Map

