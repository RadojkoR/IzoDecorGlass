import PropTypes from "prop-types";


function SecondaryHeader({bgHeader}) {
  return (
    <header className={`${bgHeader} secondaryHeader vh-100 row g-0`}>
      <div className="col-lg-2">
      </div>
        
    </header>
  )
}

SecondaryHeader.propTypes = {
  bgHeader: PropTypes.string.isRequired, // Prop mora biti string
};

export default SecondaryHeader