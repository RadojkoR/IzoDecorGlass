import LogoBig from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Large .webp"


function Home() {
  return (
    <div className="homePage container-lg d-flex flex-column align-items-center vh-100 justify-content-center">
        <img src={LogoBig} className="homeLogo" alt="Izo Decor Glass Logo" />
        <h1 className="firstPageH mt-5">Stranica u Pripremi</h1>
    </div>
  )
}

export default Home