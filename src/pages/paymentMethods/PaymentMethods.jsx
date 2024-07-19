import React from "react";
import { goBack } from "../../services/goBack";
import "./paymentMethods.scss";
const PaymentMethods = () => {
  const cards = [
    {
      type: "visa",
      number: 1234,
    },
    {
      type: "mastercard",
      number: 1234,
    },
    {
      type: "amex",
      number: 1234,
    },
  ];

  return (
    <main className="payment-methods">
      <img
        className="payment-methods__arrow-prev"
        src="../images/arrow-prev.svg"
        alt="arrow icon"
        onClick={goBack}
      />
      <section className="payment-methods__container">
        <h1 className="payment-methods__title">Payment methods</h1>
        <article className="payment-methods__cards-container">
          {cards.map((card, index) => {
            return (
              <div className="payment-methods__card" key={index}>
                <figure className="payment-methods__card-image-container">
                  <img
                    className="payment-methods__card-image"
                    src={`../images/${card.type}.svg`}
                    alt="{{ card.type }} icon"
                  />
                  <figcaption className="payment-methods__card-number">
                    **** **** **** {card.number}
                  </figcaption>
                </figure>
                <img
                  className="payment-methods__delete-icon"
                  src="../images/delete.svg"
                  alt="delete icon"
                />
              </div>
            );
          })}
        </article>
      </section>
      <button
        className="payment-methods__add-card-button"
        routerLink="/payment-methods/add-new-card"
      >
        Add new card
      </button>
    </main>
  );
};

export default PaymentMethods;
