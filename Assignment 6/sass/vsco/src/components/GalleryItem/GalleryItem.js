import React from "react";

const GalleryItem = ({ image }) => {
  return (
    <div className="gallery-item">
      <img src={image} alt="Gallery Item" />
    </div>
  );
};

export default GalleryItem;
