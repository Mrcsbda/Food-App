import React, { useEffect, useState } from "react";
import "./restaurantCard.scss";
import { createRating } from "../../../services/createRating";
import { getTime } from "../../../services/getTime";
const RestaurantCard = ({ restaurant }) => {
  const [rateStars, setRateStars] = useState([]);

  useEffect(() => {
    setRateStars(createRating(restaurant.rating));
  }, []);

  return (
    <section className="restaurant-card">
      <figure className="restaurant-card__image-container">
        <img
          className="restaurant-card__image"
          src={restaurant.image}
          alt={`${restaurant.name} image`}
        />
      </figure>
      <div className="restaurant-card__info">
        <h2 className="restaurant-card__name">{restaurant.name}</h2>
        <div className="restaurant-card__rating-container">
          {rateStars.length &&
            rateStars.map((rate, i) => (
              <img
                className={`restaurant-card__rating restaurant-card__rating--${rate}`}
                key={i}
                src="../images/star-full.svg"
                alt="star icon"
              />
            ))}
        </div>
        <p className="restaurant-card__work-time">
          Work time {getTime(restaurant.startTime)} -
          {getTime(restaurant.endTime)}
        </p>
        <p className="restaurant-card__delivery-price">
          Delivery price <span>{restaurant.deliveryPrice} $</span>
        </p>
      </div>
    </section>
  );
};

export default RestaurantCard;
