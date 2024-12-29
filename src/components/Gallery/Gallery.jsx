import React from "react";
import Cards from "./Cards";
import GalleryStyle from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={GalleryStyle.container}>
      <Cards />
    </div>
  );
}

export default Gallery;
