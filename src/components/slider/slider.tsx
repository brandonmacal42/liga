import { useState } from "react";
import "./slider.scss";
import image1 from "../../assets/images/slide2.png";
import image2 from "../../assets/images/slide1.png";
import image3 from "../../assets/images/slide3.png";
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="arrow arrow-left" onClick={prevSlide}></button>

      <button className="arrow arrow-right" onClick={nextSlide}></button>
    </div>
  );
}

export default Slider;
