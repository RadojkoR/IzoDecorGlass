import HeaderLogo from "../../assets/Images/Logo/IZO-DECOR-GLASS-Logo-Large .webp";



function Header() {
  return (
    <header className="headerHome  vh-100">
        <img src={HeaderLogo} className="logoHeader w-75" alt="Izo Decor Glass Logo" />
    </header>
  )
}

export default Header