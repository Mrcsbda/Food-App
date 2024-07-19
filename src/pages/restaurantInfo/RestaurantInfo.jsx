import React, { useEffect, useState } from "react";
import { goBack } from "../../services/goBack";
import { createRating } from "../../services/createRating";
import { getTime } from "../../services/getTime";
import titleCase from "../../services/titleCase";
import "./restaurantInfo.scss";
import Dish from "../../components/restaurantInfo/dish/Dish";
const RestaurantInfo = () => {
  const [rating, setRating] = useState([[]]);
  const [selectedOption, setSelectedOption] = useState("ALL");
  const restaurantInfo = {
    name: "Los Perritos",
    logo: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
    image:
      "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
    rating: 5,
    endTime: 1693015200000,
    startTime: 1692972000000,
    description:
      "Los perritos son una franquicia local de comidas rápidas. Tienen como su nombre lo indica, perros calientes, pero también ofrecen hamburguesas doble carne o sencillas. Son una buena opción de comida callejera",
    categories: ["FAST FOOD", "BURGUER"],
    deliveryPrice: 5,
    dishesCategories: ["HAMBURGUER", "DOGS", "OTHER"],
  };
  const dishesInfo = [
    {
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog",
      price: 13,
    },
    {
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog 2",
      price: 15,
    },
    {
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog 3",
      price: 16,
    },
    {
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog",
      price: 13,
    },
    {
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog 2",
      price: 15,
    },
    {
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog 3",
      price: 16,
    },
  ];
  useEffect(() => {
    setRating(createRating(restaurantInfo.rating));
  }, []);

  return (
    <main className="restaurant">
      <article className="restaurant__info-container">
        <img
          className="restaurant__arrow-prev-icon"
          src="../images/arrow-prev.svg"
          alt="arrow prev icon"
          onClick={goBack}
        />
        <figure className="restaurant__logo-container">
          <img
            className="restaurant__logo"
            src={restaurantInfo.logo}
            alt={`${restaurantInfo.name} logo`}
          />
        </figure>
        <section className="restaurant__container">
          <figure className="restaurant__image-container">
            <img
              src={restaurantInfo.image}
              alt="restaurant image"
              className="restaurant__image"
            />
          </figure>
          <div className="restaurant__info">
            <h1 className="restaurant__name">{restaurantInfo.name}</h1>
            <p className="restaurant__description">{restaurantInfo.description}</p>
            <div className="restaurant__rating-and-work-time-container">
              <div className="restaurant__rating-container">
                {rating.map((rate, i) => {
                  return (
                    <img
                      className={`restaurant__rating restaurant__rating--${rate}`}
                      src="../images/star-full.svg"
                      alt="star icon"
                      key={i}
                    />
                  );
                })}
              </div>
              <p className="restaurant__work-time">
                {" "}
                Work time {getTime(restaurantInfo.startTime)} -{" "}
                {getTime(restaurantInfo.endTime)}
              </p>
            </div>
          </div>
        </section>
      </article>
      <article className="restaurant__filter-dishes">
        <section
          className={`restaurant__filter-dish ${
            selectedOption === "ALL" ? "restaurant__filter-dish--selected" : ""
          }`}
          onClick={() => setSelectedOption("ALL")}
        >
          <p className="restaurant__filter-dish--text">All</p>
        </section>
        {restaurantInfo.dishesCategories.map((option, i) => {
          return (
            <section
              className={`restaurant__filter-dish ${
                option == selectedOption
                  ? "restaurant__filter-dish--selected"
                  : ""
              }`}
              onClick={() => setSelectedOption(option)}
              key={i}
            >
              <p className="restaurant__filter-dish--text">{titleCase(option)}</p>
            </section>
          );
        })}
      </article>
      <article className="restaurant__dishes-container">
        {
          dishesInfo.map((dish, i) => {
            return (
              <Dish dish={dish} key={i}/>
            )
          })
        }
      </article>
    </main>
  );
};

export default RestaurantInfo;
