import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './css/HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Contemporary Pendant Lighting",
      subtitle: "Ambient LED lightbulbs",
      buttonText: "Interior",
      image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting.jpg", // Image URL yahan daalein
      color: "#fff"
    },
    {
      title: "Modern Home Decor",
      subtitle: "Exclusive collection 2026",
      buttonText: "Shop Now",
      image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock.jpg",
      color: "#000"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h1 className="animate-text" style={{ color: slide.color }}>{slide.title}</h1>
            <p className="animate-text delay-1" style={{ color: slide.color }}>{slide.subtitle}</p>
            <button className="hero-btn animate-text delay-2">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="nav-arrow left" onClick={prevSlide}>
        <ChevronLeft size={40} strokeWidth={1} />
      </button>
      <button className="nav-arrow right" onClick={nextSlide}>
        <ChevronRight size={40} strokeWidth={1} />
      </button>

      {/* Pagination Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;