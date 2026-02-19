import React from "react";
import "./items.scss";
import image1 from "../../assets/images/lab4.png";
import image2 from "../../assets/images/lab3.png";
import image3 from "../../assets/images/lab2.png";

import image4 from "../../assets/images/lab1.png";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Camiseta Roja",
    price: "$29.99",
    image: image1,
  },
  {
    id: 2,
    name: "Camiseta Blanca",
    price: "$29.99",
    image: image2,
  },
  {
    id: 3,
    name: "Sudadera Negra",
    price: "$59.99",
    image: image3,
  },
  {
    id: 4,
    name: "Sudadera Blanca",
    price: "$59.99",
    image: image4,
  },
];

const Items: React.FC = () => {
  return (
    <div className="items-wrapper">
      <div className="items-grid">
        {products.map((p) => (
          <div className="item-card" key={p.id}>
            <div className="item-image">
              <img src={p.image} alt={p.name} />
            </div>
            <div className="item-info">
              {/* <div className="item-name">{p.name}</div> */}
              {/* <div className="item-price">{p.price}</div> */}
              {/* <div className="item-size">Disponible en talla 4</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
