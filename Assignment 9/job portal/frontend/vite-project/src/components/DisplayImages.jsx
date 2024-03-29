// FetchImages.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/images");
        console.log(response);
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.path}
          alt={image.filename}
          style={{ width: "200px", height: "auto", margin: "5px" }}
        />
      ))}
    </div>
  );
}

export default FetchImages;
