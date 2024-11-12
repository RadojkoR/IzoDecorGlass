import LogoBig from "../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Large .webp"


function Home() {
  return (
    <div className="homePage container d-flex flex-column align-items-center vh-100 justify-content-center">
        <img src={LogoBig} className="w-50" alt="Izo Decor Glass Logo" />
        <h1 className="firstPageH fw-bold mt-5">Stranica u pripremi</h1>
    </div>
  )
}

export default Home