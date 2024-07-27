import React, { useEffect, useState } from "react";
import "swiper/css";
import "./home.scss";
import RestaurantCard from "../../components/home/restaurantCard/RestaurantCard";
import HomeFilterOptions from "../../components/home/homeFilterOptions/HomeFilterOptions";
import HomeCarrousel from "../../components/home/homeCarrousel/HomeCarrousel";
import { getRestaurants } from "../../services/firebase/restaurants";
import Loader from "../../components/loader/Loader";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [copyRestaurants, setCopyRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  const getRestaurantsInfo = async () => {
    setLoading(true);
    const data = await getRestaurants();
    setRestaurants(data);
    setCopyRestaurants(data);
    setLoading(false);
  };

  const filterRestaurants = (value) => {
    if (value === "ALL") {
      setRestaurants(copyRestaurants);
    } else {
      const filteredRestaurants = copyRestaurants.filter((restaurant) =>
        restaurant.categories.includes(value)
      );
      setRestaurants(filteredRestaurants);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="home">
          <HomeCarrousel />
          <h1 className="home__title">Restaurants</h1>
          <article className="home__filter-options">
            <HomeFilterOptions filterRestaurants={filterRestaurants} />
          </article>
          <article className="home__restaurants">
            {restaurants.map((restaurant, index) => {
              return <RestaurantCard key={index} restaurant={restaurant} />;
            })}
          </article>
        </main>
      )}
    </>
  );
};

export default Home;
