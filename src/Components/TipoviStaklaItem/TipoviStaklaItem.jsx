import PropTypes from "prop-types";


function TipoviStaklaItem({title, description, img, paralaxClass}) {
  return (
    <>
      <section className={`paralax ${paralaxClass}`}></section>
    <section className='tipoviStaklaContainer pb-4 container-md my-5'>
        <h2>{title}</h2>
        <article className="tipoviStakla row mt-5">
          <div className="col-lg-8">
            <p className="fs-5 px-md-3">{description}</p>
          </div>
          <div className="tipStaklaImg col-md-4">
            <img src={img} className="w-100" alt="" />
          </div>
        </article>
      </section>
    </>
    
  )
}

TipoviStaklaItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  paralaxClass: PropTypes.string.isRequired,
};

export default TipoviStaklaItem