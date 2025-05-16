import { useState } from "react";
import { SecondaryHeader } from "../Components/Layout";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import galleryData from "../Data/imageGalleryData";
import Lightbox from "yet-another-react-lightbox";
import { Counter, Fullscreen, Thumbnails, Zoom, Download, Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";




function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)

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
              if (containerWidth < 576) return 3;
              if (containerWidth < 768) return 4;
              return 5;
            }}
            onClick={({ index }) => {
              setIndex(index)
              setOpen(true)
            }}
          />
          <Lightbox
            slides={galleryData}
            open={open}
            close={() => setOpen(false)}
            index={index}
            plugins={[Counter, Fullscreen, Thumbnails, Zoom, Download, Captions]}
            counter={{ container: { style: { top: "unset", bottom: 0, right: 0, left: "unset" } } }}
          />
        </article>

      </section>
    </>
  );
}

export default Gallery;
