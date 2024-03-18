import React, { useState } from "react";

const images = [
  "https://fhsnixnews.com/wp-content/uploads/2019/10/VSCO.jpg",
  "https://www.thephoblographer.com/wp-content/uploads/2022/08/Brittany-Smith-The-Phoblographer-VSCO-Image-Sample-4405-770x1023.jpg",
  "https://i.pinimg.com/736x/a5/4e/35/a54e356f37f1ca64da59482c9924f8fa.jpg",
  "https://miro.medium.com/v2/resize:fit:1400/1*PUyKadJeFscCvD9E3ilphA.jpeg",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="btn -secondary" onClick={prevSlide}>
        Previous
      </button>
      <div className="slider-images">
        <img
          className="slider-image"
          src={images[(currentSlide - 1 + images.length) % images.length]}
          alt={`Slide ${currentSlide - 1}`}
        />
        <img
          className="slider-image"
          src={images[currentSlide]}
          alt={`Slide ${currentSlide}`}
        />

        <img
          className="slider-image"
          src={images[(currentSlide + 1) % images.length]}
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>
      <button className="btn -secondary" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
