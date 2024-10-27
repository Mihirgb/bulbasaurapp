import React, { useState } from 'react';
import './ImageScroller.css';

const ImageScroller = () => {
  // State to manage the current slide index
  const [slideIndex, setSlideIndex] = useState(0);

  // Array of image data
  const slides = [
    {
      src: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
      caption: "Bulbasaur"
    },
    {
      src: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png", // Replace with the correct URL
      caption: "Ivysaur"
    },
    {
      src: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png", // Replace with the correct URL
      caption: "Venusaur"
    }
  ];

  // Function to handle next/previous slide
  const changeSlide = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  };

  // Function to set the current slide
  const setCurrentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="mySlides"
            style={{ display: index === slideIndex ? 'block' : 'none' }}
          >
            <div className="numbertext">{`${index + 1} / ${slides.length}`}</div>
            <img src={slide.src} alt={`Slide ${index + 1}`} />
            <div className="text">{slide.caption}</div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button className="prev" onClick={() => changeSlide(-1)}>❮</button>
        <button className="next" onClick={() => changeSlide(1)}>❯</button>
      </div>
      
      {/* Dots for slide navigation */}
      <div>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
