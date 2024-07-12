import React from "react";
import "swiper/css";
import "./home.scss";
import HomeCarrousel from "../../components/homeCarrousel/HomeCarrousel";
import HomeFilterOptions from "../../components/homeFilterOptions/HomeFilterOptions";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";
const Home = () => {
  const restaurants = [
    {
      deliveryPrice: 5,
      name: "McDonalds",
      endTime: 1693015200000,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 5,
      startTime: 1692972000000,
    },
    {
      deliveryPrice: 5,
      name: "McDonalds",
      endTime: 1693015200000,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 5,
      startTime: 1692972000000,
    },
    {
      deliveryPrice: 5,
      name: "McDonalds",
      endTime: 1693015200000,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 5,
      startTime: 1692972000000,
    },
    {
      deliveryPrice: 5,
      name: "McDonalds",
      endTime: 1693015200000,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 5,
      startTime: 1692972000000,
    },
    {
      deliveryPrice: 5,
      name: "McDonalds",
      endTime: 1693015200000,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 5,
      startTime: 1692972000000,
    },
    {
      deliveryPrice: 5,
      name: "McDonalds",
      endTime: 1693015200000,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 5,
      startTime: 1692972000000,
    },
  ];

  return (
    <main className="home">
      <HomeCarrousel />
      <h1 className="home__title">Restaurants</h1>
      <article className="home__filter-options">
        <HomeFilterOptions />
      </article>
      <article className="home__restaurants">
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} restaurant={restaurant} />;
        })}
      </article>
    </main>
  );
};

export default Home;
