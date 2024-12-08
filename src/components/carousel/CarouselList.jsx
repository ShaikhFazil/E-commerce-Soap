import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import images from "../../ImageData/data";
import './carousel.css';

const CarouselList = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 3000, min: 1920 }, items: 1 },
    desktop: { breakpoint: { max: 1920, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  // Custom dots to be displayed over the image
  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <button
        onClick={onClick}
        className={active ? "dot active" : "dot"}
      ></button>
    );
  };

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        keyBoardControl={true}
        renderDotsOutside={false}
        customDot={<CustomDot />}
        dotListClass="custom-dot-list"
      >
        {images.map((image) => (
          <div key={image.id} className="carousel-item">
            <img
              src={image.src}
              alt={image.alt}
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselList;
