import React from "react";
import "swiper/css";
import "./home.scss";
import HomeCarrousel from "../../components/homeCarrousel/HomeCarrousel";
import HomeFilterOptions from "../../components/homeFilterOptions/HomeFilterOptions";
const Home = () => {
  return (
    <main className="home">
      <HomeCarrousel />
      <h1 className="home__title">Restaurants</h1>
      <HomeFilterOptions />
    </main>
  );
};

export default Home;
