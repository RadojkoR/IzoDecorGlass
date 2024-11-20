import PropTypes from "prop-types";


function SecondaryHeader({ bgHeader, headerInfo}) {
  const {headingEl, para} = headerInfo[0];
  
  return (
    <header className={`${bgHeader} secondaryHeader vh-100 row g-0 position-relative`}>
      <div className='secondaryHeaderTxtcontainer position-absolute'>
        <h1 className='pt-3 fontW700 text-center text-uppercase'>{headingEl}</h1>
        <div>
          <p className='fontW700 fs-2 pb-5 pt-3 ms-3'>&#8213;  &nbsp; {para}</p>
        </div>
      </div>
    </header>
  )
}

SecondaryHeader.propTypes = {
  bgHeader: PropTypes.string.isRequired,
  headerInfo: PropTypes.arrayOf(
    PropTypes.shape({
      headingEl: PropTypes.string.isRequired,
      para: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SecondaryHeader