import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://picsum.photos/2000/3000",
  "https://picsum.photos/3000/2000",
  "https://picsum.photos/4000/3000",
  "https://picsum.photos/3000/1500",
  "https://picsum.photos/1000/2500",
  "https://picsum.photos/1500/2000",
];
const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="profile-container">
        <div className="profile-picture">
          <img
            src="https://r2.community.samsung.com/t5/image/serverpage/image-id/1033577i9BF90E7DC85500E1?v=v2"
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <h3>Shruti T.</h3>
          <p>
            ABOUT <br></br> Doucmenting
          </p>
        </div>
      </div>
      <div className="gallery-container">
        <p>Gallery</p>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <button className="btn -secondary"> Load </button>
      </div>
    </div>
  );
};

export default Gallery;
