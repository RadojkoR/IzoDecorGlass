import { SecondaryHeader } from "../Components/Layout";
import { ColumnsPhotoAlbum } from "react-photo-album";
import galleryData from "../Data/imageGalleryData";
import "react-photo-album/columns.css";

function Gallery() {
  const galerijaHeaderTxt = [
    {
      headingEl: "Galerija",
      para: "Inspiracija u staklu – istražite naša rešenja!",
    },
  ];

  return (
    <>
      <SecondaryHeader
        bgHeader="kontaktHeader"
        headerInfo={galerijaHeaderTxt}
      />
      <section className="container-md my-5">
        <article className="border-bottom border-secondary-subtle mb-5">
          <h2 className="mt-5 mb-4">Galerija</h2>
          <p className="fs-5 px-md-3 pb-3">
            Pogledajte izbor naših prethodnih projekata i inspirišite se kvalitetom i elegancijom staklenih rešenja koja nudimo.
          </p>
        </article>

        <article>
          <ColumnsPhotoAlbum
            photos={galleryData}
            columns={(containerWidth) => {
              if(containerWidth < 576) return 3;
              if(containerWidth < 768) return 4;
              return 5;
            }}
          />
        </article>

      </section>
    </>
  );
}

export default Gallery;
