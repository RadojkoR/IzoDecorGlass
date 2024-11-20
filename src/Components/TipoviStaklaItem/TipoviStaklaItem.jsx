


function tipoviStaklaItem({title, description}) {
  return (
    <section className='tipoviStaklaContainer py-5 container-md my-5 border-2 border-bottom'>
        <h2>{title}</h2>
        <article className="tipoviStakla">
          <p className="fs-5 px-md-3">{description}</p>
        </article>
      </section>
  )
}

export default tipoviStaklaItem