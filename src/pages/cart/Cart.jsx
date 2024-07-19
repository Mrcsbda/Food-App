import React from "react";
import { goBack } from "../../services/goBack";
import "./cart.scss";
const Cart = () => {
  return (
    <main className="cart">
      <img
        className="cart__arrow-prev"
        src="../images/arrow-prev.svg"
        alt="arrow prev"
        onClick={goBack}
      />
      <h1 className="cart__title">New Order</h1>
      <section className="cart__address-container">
        <h2 className="cart__subtitle">Deliver to</h2>
        <article className="cart__address">
          <div className="cart__location-container">
            <img
              className="cart__location-icon"
              src="../images/location.svg"
              alt=""
            />
            <p>882 Well St, New-York</p>
          </div>
          <img
            className="cart__arrow-next"
            src="../images/arrow-next.svg"
            alt="arrow next"
            routerLink="/profile/edit"
          />
        </article>
      </section>
      <section className="cart__payments-container">
        <h2 className="cart__subtitle">Payment</h2>
        <article className="cart__payments">
          <div className="cart__payment-method">Cash</div>
          {/* TODO: add payment methods and use swiper*/}
          <div className="cart__payment-method">
            <img
              className="cart__payment-icon"
              src="../images/mastercard.svg"
              alt=""
            />
            <p className="cart__payment-number">.... .... 4589</p>
          </div>
          <div className="cart__payment-method">
            <img
              className="cart__payment-icon"
              src="../images/mastercard.svg"
              alt=""
            />
            <p className="cart__payment-number">.... .... 4589</p>
          </div>
          <div className="cart__payment-method">
            <img
              className="cart__payment-icon"
              src="../images/mastercard.svg"
              alt=""
            />
            <p className="cart__payment-number">.... .... 4589</p>
          </div>
          {/* TODO: add payment methods and use swiper*/}
        </article>
      </section>
      <section className="cart__order-info-container">
        {/*TODO: add order info*/}
        <article className="cart__order">
          <div className="cart__order-info">
            <img
              className="cart__order-image"
              src="https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg"
              alt="dish image"
            />
            <div className="cart__order-quantity">
              <button className="cart__order-quantity-button">-</button>
              <p>1</p>
              <button className="cart__order-quantity-button">+</button>
            </div>
            <p className="cart__order-product">Fresh with funcheza</p>
          </div>
          <p className="cart__order-total-per-product">$ 32.00</p>
        </article>
        <article className="cart__order">
          <div className="cart__order-info">
            <img
              className="cart__order-image"
              src="https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg"
              alt="dish image"
            />
            <div className="cart__order-quantity">
              <button className="cart__order-quantity-button">-</button>
              <p>1</p>
              <button className="cart__order-quantity-button">+</button>
            </div>
            <p className="cart__order-product">Fresh with funcheza</p>
          </div>
          <p className="cart__order-total-per-product">$ 32.00</p>
        </article>
        {/*TODO: add order info*/}
      </section>
      <section className="cart__total-products-container">
        <article className="cart__total-products-info">
          <p className="cart__total-text">Products</p>
          <p className="cart__total-price">$ 60.45</p>
        </article>
        <article className="cart__total-products-info">
          <p className="cart__total-text">Delivery</p>
          <p className="cart__total-price">$ 60.45</p>
        </article>
        <hr className="cart__total-hr" />
        <article className="cart__total-products-info">
          <p className="cart__total-text">Total</p>
          <p className="cart__total-price">$ 60.45</p>
        </article>
      </section>
      <button className="cart__confirm-button">Confirm Order</button>
    </main>
  );
};

export default Cart;
