import React from "react";
import "./dish.scss";
const Dish = ({ dish }) => {
  return (
    <section className="dish-info">
      <figure className="dish-info__image-container">
        <img
          className="dish-info__image"
          src={dish.image}
          alt={`${dish.name} image`}
        />
      </figure>
      <h2 className="dish-info__name">{dish.name}</h2>
      <p className="dish-info__price">$ {dish.price}</p>
    </section>
  );
};

export default Dish;
