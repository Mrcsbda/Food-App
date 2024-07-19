import React, { useEffect, useState } from "react";
import "swiper/css";
import "./home.scss";
import RestaurantCard from "../../components/home/restaurantCard/RestaurantCard";
import HomeFilterOptions from "../../components/home/homeFilterOptions/HomeFilterOptions";
import HomeCarrousel from "../../components/home/homeCarrousel/HomeCarrousel";
import { getRestaurants } from "../../services/firebase/restaurants";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurantsInfo();
  }, []);
  const getRestaurantsInfo = async () => {
    const data = await getRestaurants();
    setRestaurants(data);
  };
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
