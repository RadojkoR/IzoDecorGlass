import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
    <section className="notFound text-center d-flex flex-column justify-content-center align-items-center vh-100 px-3">
      <h1 className="display-1 text-danger fw-bold mb-5">404</h1>
      <h2 className="my-5 fw-bold">Ups! Stranica nije pronađena.</h2>
      <p className="mb-4 fs-5 fw-bolder">
        Stranica koju ste tražili možda je izbrisana, premeštena ili nikada nije postojala.
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2 fs-5 rounded-pill">
        Nazad na početnu
      </Link>
    </section>
  </>
  )
}

export default NotFound