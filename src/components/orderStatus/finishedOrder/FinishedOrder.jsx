import React from "react";
import "./finishedOrder.scss";
const FinishedOrder = () => {
  return (
    <main className="finished-order">
      <img
        className="finished-order__arrow-prev-icon"
        src="../images/arrow-prev.svg"
        alt="arrow prev icon"
      />
      <h2 className="finished-order__date">16.11.2022</h2>
      <section className="finished-order__info-container">
         {/* TODO: Add order info here */}
        <article className="finished-order__info-item">
          <div className="finished-order__info">
            <p className="finished-order__quantity">1x</p>
            <p className="finished-order__order">Meat Pizza(Medium)</p>
          </div>
          <p className="finished-order__price">$35.50</p>
        </article>
        <article className="finished-order__info-item">
          <div className="finished-order__info">
            <p className="finished-order__quantity">1x</p>
            <p className="finished-order__order">Meat Pizza(Medium)</p>
          </div>
          <p className="finished-order__price">$35.50</p>
        </article>
        <article className="finished-order__info-item">
          <div className="finished-order__info">
            <p className="finished-order__quantity">1x</p>
            <p className="finished-order__order">Meat Pizza(Medium)</p>
          </div>
          <p className="finished-order__price">$35.50</p>
        </article>
        {/* TODO: Add order info here */}
      </section>
      <section className="finished-order__production-cost-container">
        <p className="finished-order__production-cost">Production cost</p>
        <span className="finished-order__production-cost-price">$15.00</span>
      </section>
      <section className="finished-order__cost-of-delivery-container">
        <p className="finished-order__cost-of-delivery">Cost of delivery</p>
        <span className="finished-order__cost-of-delivery-price">$5.00</span>
      </section>
      <hr className="finished-order__hr" />
      <section className="finished-order__total-container">
        <p className="finished-order__total">Total</p>
        <span className="finished-order__total-price">$40.50</span>
      </section>
    </main>
  );
};

export default FinishedOrder;
