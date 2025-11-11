import React, { useState } from "react";
import "./Banner.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ban1 from "../Assets/ban1.jpg"
import ban2 from "../Assets/ban2.jpg"
import ban3 from "../Assets/ban3.jpg"

const images = [
    ban1,
    ban2,
    ban3
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="banner-container">
      <div className="banner-slide">
        <img
          src={images[currentIndex]}
          alt={`banner-${currentIndex}`}
          className="banner-image"
        />
        <button className="nav-btn left" onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>
        <button className="nav-btn right" onClick={nextSlide}>
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Dấu chấm hiển thị slide hiện tại */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
