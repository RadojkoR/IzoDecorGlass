import HeaderLogo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Large.webp";
import HeaderLogoMd from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Medium.webp";
import HeaderLogoSm from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Small.webp";

function Header() {
  return (
    <header className="headerHome vh-100 row g-0">
      <section className="col-lg-2">
        <picture>
          <source media="(min-width:992px)" srcSet={HeaderLogo}></source>
          <source media="(min-width:768px)" srcSet={HeaderLogoMd}></source>
          <source media="(min-width:576px)" srcSet={HeaderLogoSm}></source>
          <img
            src={HeaderLogoMd}
            className="logoHeader"
            alt="Izo Decor Glass Logo"
            loading="eager" />
        </picture>

      </section>
      <section className="headerSlogan d-flex flex-column col-lg-10">
        <h1 className="py-3 mt-4 me-3 text-center border-5 border-end fontW700">IZO DECOR GLASS</h1>
        <h2 className="py-4 ps-4 ms-5 border-5 border-start fontW600 ">Vaš stručnjak za staklo</h2>
      </section>
    </header>
  )
}

export default Header