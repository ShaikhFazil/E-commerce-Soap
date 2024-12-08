import React, { useState } from "react";
import CarouselList from "./carousel/CarouselList";
import "../components/carousel/carousel.css";
import soapData from "../ImageData/soap";
import CircleWithTextGrid from "./tabs/CircleWithText";
import perfumeData from "../ImageData/perfumeData";
import Text from "./text/Text";
import Cards from "./Cards";
import CardsData from "../ImageData/CardsData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Main = () => {
  const [activeContainer, setActiveContainer] = useState("soap");

  // Responsive breakpoints for cards
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 3000, min: 1920 }, items: 4 },
    desktop: { breakpoint: { max: 1920, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <div>
      <CarouselList />
      <div className="section">
        {/* First Container */}
        <div
          className="container"
          onClick={() => setActiveContainer("soap")}
          style={{ cursor: "pointer" }}
        >
          <div className="chat-bubble">
            <div className="chat-arrow"></div>
            <div className="chat-content">
              <span className="chat-name">(Soap) Lather Up in Luxury</span>
            </div>
          </div>
        </div>

        {/* Second Container */}
        <div
          className="container2"
          onClick={() => setActiveContainer("perfumes")}
          style={{ cursor: "pointer" }}
        >
          <div className="chat-bubble2">
            <div className="chat-arrow2"></div>
            <div className="chat-content2">
              <span className="chat-name2">(Perfumes) Scents That Tell Stories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally Render Grid Based on Selection */}
      {activeContainer === "soap" && <CircleWithTextGrid data={soapData} />}
      {activeContainer === "perfumes" && <CircleWithTextGrid data={perfumeData} />}

      <div>
        <div>
          {/* Dynamic Text Component */}
          <Text text="Unmissable Offer Just for You!" />
        </div>
        {/* CARDS in Carousel */}
        <div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            keyBoardControl={true}
            arrows={true}

          >
            {CardsData.map((card) => (
              <Cards
                key={card.id}
                title={card.title}
                word={card.price}
                description={card.description}
                type={card.stock}
                image={card.images}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Main;
