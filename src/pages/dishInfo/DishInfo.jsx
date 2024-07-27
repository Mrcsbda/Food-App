import React from "react";
import "./dishInfo.scss";
import { goBack } from "../../services/goBack";
const DishInfo = () => {
  const dish = {
    image:
      "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
    name: "Hot Dog",
    adittions: ["French fries", "Coca Cola 750ml"],
    description:
      "Our Quesudo Hot Dog is made with warm bread, baked Zenú sausage, melted cheese, our rich and fresh salad and potato chips.",
  };
  
  return (
    <main className="dish">
      <section className="dish__container">
        <article className="dish__info-container">
          <img
            className="dish__arrow-prev-icon"
            src="../images/arrow-prev.svg"
            alt="arrow icon"
            onClick={goBack}
          />
          <figure className="dish__image-container">
            <img
              className="dish__image"
              src={dish.image}
              alt={`${dish.name} image`}
            />
          </figure>
          <div className="dish__info">
            <div className="dish__title-container">
              <h1 className="dish__title">{dish.name}</h1>
              <figure className="dish__time-container">
                <img
                  className="dish__time-icon"
                  src="../images/clock.svg"
                  alt=""
                />
                <figcaption className="dish__time">15-20 min</figcaption>
              </figure>
            </div>
            <p className="dish__description">{dish.description}</p>
          </div>
        </article>
        <article className="dish__additional-info">
          <h2 className="dish__additional-info-title">
            Additional ingredients
          </h2>
          <div className="dish__additional-info-container">
            {dish.adittions.map((adittion, index) => {
              return (
                <div className="dish__addition" key={index}>
                  <div className="dish__addition-container">
                    <input type="checkbox" />
                    <p className="dish__addition-text">{adittion}</p>
                  </div>
                  <p className="dish__addition-price">+2$</p>
                </div>
              );
            })}
          </div>
        </article>
      </section>
      <section className="dish__order-buttons-container">
        <article className="dish__order-buttons">
          <button className="dish__minus-button">-</button>
          <p className="dish__quantity">0</p>
          <button className="dish__plus-button">+</button>
        </article>
        <button className="dish__add-to-cart-button">
          <p className="dish__add-to-cart-text">Add to cart</p>
          <p className="dish__add-to-cart-total">$0</p>
        </button>
      </section>
    </main>
  );
};

export default DishInfo;
