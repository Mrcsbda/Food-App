import React, { useEffect, useState } from "react";
import "./dishSearch.scss";
import SearchResult from "../../components/dishSearch/searchResult/SearchResult";
import { getAllDishes } from "../../services/firebase/restaurants";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
const DishSearch = () => {
  const [dishesInfo, setDishesInfo] = useState([]);
  const [copyDishesInfo, setCopyDishesInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    const resp = await getAllDishes();
    if (resp.length > 0) {
      setDishesInfo(resp);
      setCopyDishesInfo(resp);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <main className="dish-search">
      {loading && <Loader />}
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
      {error ? (
        <Error />
      ) : (
        <section className="dish-search__results-container">
          {dishesInfo.map((dish, index) => {
            return <SearchResult dishInfo={dish} key={index} />;
          })}
        </section>
      )}
    </main>
  );
};

export default DishSearch;
