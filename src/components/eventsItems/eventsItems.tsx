import React from "react";
import "./eventsItems.scss";
import image1 from "../../assets/images/event1.png";
import image2 from "../../assets/images/event2.png";
import image3 from "../../assets/images/event3.png";
import image4 from "../../assets/images/event4.png";
import image5 from "../../assets/images/event5.png";

const products = [image1, image2, image3, image4, image5];

const Items: React.FC = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {[...products, ...products].map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt="product" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
