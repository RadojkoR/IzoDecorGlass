import AboutUs from "../Components/HomePage/AboutUs";
import { Header } from "../Components/Layout";
import MarqueeImgSlider from "../Components/MarqueeImgSlider/MarqueeImgSlider";

import ImgOne from "../assets/Images/shower1unsplash.webp";
import ImgTwo from "../assets/Images/glass2Railingspexels.webp";
import ImgThree from "../assets/Images/glass1Railingspexels.webp";
import ImgFour from "../assets/Images/glassWallunsplash.webp";



function Home() {
  const homeMarquee = [
    {src: ImgOne , alt: "Shower Image"},
    {src: ImgTwo , alt: "Glass Railing Image"},
    {src: ImgThree , alt: "Glass Railing Image"},
    {src: ImgFour , alt: "Shower Image"},

  ]
  return (
    <>
      <Header />
      <AboutUs />
      <MarqueeImgSlider images={homeMarquee} customClass={"marqueHome mb-5"}/>
    </>
  )
}

export default Home