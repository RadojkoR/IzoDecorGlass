import AboutUs from "../Components/HomePage/AboutUs";
import { Header } from "../Components/Layout";
import MarqueeImgSlider from "../Components/MarqueeImgSlider/MarqueeImgSlider";



function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <MarqueeImgSlider />
    </>
  )
}

export default Home