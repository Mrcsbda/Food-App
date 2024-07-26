import React, { useEffect, useState } from "react";
import "./dishSearch.scss";
import SearchResult from "../../components/dishSearch/searchResult/SearchResult";
import { getAllDishes } from "../../services/firebase/restaurants";
const DishSearch = () => {
  const [dishesInfo, setDishesInfo] = useState([]);
  const [copyDishesInfo, setCopyDishesInfo] = useState([]);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    const resp = await getAllDishes();
    if (resp.length > 0) {
      setDishesInfo(resp);
      setCopyDishesInfo(resp);
    } else {

    }
  };

  return (
    <main className="dish-search">
      <section className="dish-search__search-container">
        <img
          className="dish-search__search-icon"
          src="../images/search.svg"
          alt="search icon"
        />
        <input
          className="dish-search__search"
          type="text"
          placeholder="Search for a dish"
        />
        <img
          className="dish-search__delete"
          src="../images/delete.svg"
          alt="delete icon"
        />
      </section>
      <section className="dish-search__results-container">
        {dishesInfo.map((dish, index) => {
          return <SearchResult dishInfo={dish} key={index} />;
        })}
      </section>
    </main>
  );
};

export default DishSearch;
