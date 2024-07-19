import React from "react";
import "swiper/css";
import "./home.scss";
import RestaurantCard from "../../components/home/restaurantCard/RestaurantCard";
import HomeFilterOptions from "../../components/home/homeFilterOptions/HomeFilterOptions";
import HomeCarrousel from "../../components/home/homeCarrousel/HomeCarrousel";
const Home = () => {
  const restaurants = [
    {
      deliveryPrice: 5,
      name: "McDonalds",
      endTime: 1693015200000,
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 3,
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
      rating: 2,
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
      rating: 1,
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
