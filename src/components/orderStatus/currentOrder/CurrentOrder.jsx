import React from "react";
import "./currentOrder.scss";
import titleCase from "../../../services/titleCase";
import { goBack } from "../../../services/goBack";
const CurrentOrder = ({orderStep}) => {
  const orderStatuses = ["CONFIRMED", "COOKING", "ON THE WAY", "DELIVERED"];
  const ordersInfo = [
    {
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 1,
      name: "Vegetarian pizza",
      total: 32,
    },
    {
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 2,
      name: "Fresh with funcheza asd sad asd as asdasd asdasd",
      total: 28.45,
    },
  ];
  return (
    <main className="current-order">
      <img
        className="current-order__arrow"
        src="../images/arrow-prev.svg"
        alt="arrow icon"
        onClick={goBack}
      />
      <h2 className="current-order__title">Current order</h2>
      <section className="current-order__order-status-container">
        <figure className="current-order__order-status-image-container">
          <img
            className="current-order__order-status-image"
            src="../images/time-management.svg"
            alt="time management image"
          />
        </figure>
        <article className="current-order__order-statuses">
          {orderStatuses.map((status, i) => {
            return (
              <div className="current-order__order-statuses-container" key={i}>
                <div
                  className={`current-order__order-status-check ${
                    i + 1 <= orderStep
                      ? "current-order__order-status-check--active"
                      : ""
                  }`}
                >
                  <img
                    className={`current-order__order-status-check--icon ${
                      i + 1 < orderStep
                        ? "current-order__order-status-check--icon-active"
                        : ""
                    }`}
                    src="../images/check.svg"
                    alt="check icon"
                  />
                </div>
                <p
                  className={`current-order__order-status ${
                    i + 1 === orderStep
                      ? "current-order__order-status--active"
                      : ""
                  }`}
                >
                  {titleCase(status)}
                </p>
              </div>
            );
          })}
        </article>
      </section>
      <section className="current-order__info-container">
        {ordersInfo.map((order, i) => {
          return (
            <article className="current-order__info-order" key={i}>
              <div className="current-order__info">
                <figure className="current-order__info-image-container">
                  <img
                    className="current-order__info-image"
                    src={order.image}
                    alt={`${order.name} image`}
                  />
                </figure>
                <span className="current-order__info-quantity">
                  x{order.quantity}
                </span>
                <p className="current-order__info-product-name">{order.name}</p>
              </div>
              <p className="current-order__info-price">${order.total}</p>
            </article>
          );
        })}
      </section>
      <section className="current-order__final-info-container">
        <div className="current-order__total-products">
          <p className="current-order__total-products-title">Products</p>
          <span className="current-order__total-products-price">60.45$</span>
        </div>
        <div className="current-order__delivery">
          <p className="current-order__delivery-title">Delivery</p>
          <span className="current-order__delivery-price">4.5$</span>
        </div>
        <hr />
        <div className="current-order__total-to-pay">
          <p className="current-order__total-to-pay-title">Total</p>
          <span className="current-order__total-to-pay-price">64.95$</span>
        </div>
        <button className="current-order__cancel-button">Cancel</button>
      </section>
    </main>
  );
};

export default CurrentOrder;
