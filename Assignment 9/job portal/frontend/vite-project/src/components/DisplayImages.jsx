// FetchImages.jsx

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
      <h2>Images</h2>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Image ${index}`} />
            <br /> {/* Add a line break */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchImages;
