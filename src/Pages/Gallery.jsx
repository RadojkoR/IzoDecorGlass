import { SecondaryHeader } from "../Components/Layout";
import { MasonryPhotoAlbum } from "react-photo-album";
import imageGalleryData from "../Data/imageGalleryData.json"

function Gallery() {
  const galerijaHeaderTxt = [
    {
      headingEl: "Galerija",
      para: "Inspiracija u staklu – istražite naša rešenja!",
    },
  ];

  console.log(imageGalleryData);
  
  return (
    <>
      <SecondaryHeader
        bgHeader="kontaktHeader"
        headerInfo={galerijaHeaderTxt}
      />
      <section>
        <MasonryPhotoAlbum photos={imageGalleryData} columns={4}/>
      </section>
    </>
  );
}

export default Gallery;
