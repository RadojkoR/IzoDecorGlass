import AboutUs from "../Components/HomePage/AboutUs";
import { Header } from "../Components/Layout";
import MarqueeImgSlider from "../Components/MarqueeImgSlider/MarqueeImgSlider";
import MetaTags from "../Components/SEO/MetaTags";
import ImgOne from "../assets/Images/marqueeImg/shower1unsplash.webp";
import ImgTwo from "../assets/Images/marqueeImg/glass2Railingspexels.webp";
import ImgThree from "../assets/Images/marqueeImg/glass1Railingspexels.webp";
import ImgFour from "../assets/Images/marqueeImg/glassWallunsplash.webp";
import { BanerUsluge, UslugeHome } from "../Components/HomePage";



function Home() {
  const homeMarquee = [
    { src: ImgOne, alt: "Shower Image" },
    { src: ImgTwo, alt: "Glass Railing Image" },
    { src: ImgThree, alt: "Glass Railing Image" },
    { src: ImgFour, alt: "Shower Image" },

  ]
  return (
    <>
      <MetaTags />
      <Header />
      <BanerUsluge />
      <AboutUs />
      <MarqueeImgSlider images={homeMarquee} customClass={"marqueHome mb-5"} />
      <UslugeHome />
    </>
  )
}

export default Home