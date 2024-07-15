import React from "react";
import "./orders.scss";
import titleCase from "../../services/titleCase";
const Orders = () => {
  const orders = [
    {
      restaurant: "Perritos",
      total: 132,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      status: "PENDING",
    },
    {
      restaurant: "Pizza Hut",
      total: 240,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817741/deliveryApp/pizza-hut.png",
      status: "CANCELLED",
    },
    {
      restaurant: "The barbecue station",
      total: 55,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692818072/deliveryApp/the-barbecue-station.png",
      status: "DELIVERED",
    },
    {
      restaurant: "Los Pollos Hermanos",
      total: 70,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692818207/deliveryApp/Los_Pollos_Hermanos_logo.png",
      status: "PENDING",
    },
    {
      restaurant: "Cosechas",
      total: 123,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692819155/deliveryApp/cosechas-logo-ahora.png",
      status: "CANCELLED",
    },
    {
      restaurant: "Crepes & Waffles",
      total: 432,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692823728/deliveryApp/C_Wlogo_nk4rzy.svg",
      status: "DELIVERED",
    },
    {
      restaurant: "The station grill",
      total: 123,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692824369/deliveryApp/station-grill-logo_yxoyxs.webp",
      status: "PENDING",
    },
    {
      restaurant: "Perritos",
      total: 325,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      status: "CANCELLED",
    },
    {
      restaurant: "Perritos",
      total: 597,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      status: "DELIVERED",
    },
  ];
  return (
    <main className="orders">
      <h1 className="orders__title">All orders</h1>
      <section className="orders__orders-container">
        {orders.map((order, index) => {
          return (
            <article key={index} className="orders__order">
              <div className="orders__order-info">
                <figure className="orders__order-image-container">
                  <img
                    src={order.image}
                    alt={`${order.restaurant} image`}
                    className="orders__order-image"
                  />
                </figure>
                <div className="orders__order-info-container">
                  <p className="orders__restaurant-name">{order.restaurant}</p>
                  <span className="orders__order-total">$ {order.total}</span>
                </div>
              </div>
              <div className="orders__order-status-container">
                <p
                  className={`"orders__order-status" orders__order-status--${order.status.toLowerCase()}`}
                >
                  {titleCase(order.status)}
                </p>
                <img
                  className="orders__arrow-icon"
                  src="./images/arrow-next.svg"
                  alt="arrow icon"
                />
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Orders;
