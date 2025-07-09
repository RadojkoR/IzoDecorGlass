import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function UslugeItem({ heading, para, img, paralaxClass, showBtn, url }) {
  // const linkPath = heading
  //   .replace(/\s+/g, '')
  //   .replace(/^./, str => str.toLowerCase());
  return (
    <>
      <section className='uslugeContainer pb-4 container-md p-2 mb-5'>
        <h2>{heading}</h2>
        <article className="uslugeContentContainer row g-0 mt-5">
          <div className="col-lg-8 col-12 d-flex flex-column">
            <p className="fs-5 px-md-3">{para}</p>
            <Link to={url} className={`btn ms-auto saznajViseBtn fontW600 mt-4 ${showBtn}`}>Saznaj Više &nbsp;<span className='fs-5'>&#10154;</span></Link>
          </div>
          <div className="uslugeImgContainer col-lg-4 col-12 mx-auto">
            <img src={img} className="w-100" alt="" />
          </div>
        </article>
      </section>
      <div className={`paralaxUsluge ${paralaxClass}`}></div>
    </>
  )
}

UslugeItem.propTypes = {
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  paralaxClass: PropTypes.string.isRequired,
  showBtn: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default UslugeItem