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
  const [respIsOk, setRespIsOk] = useState(false);

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
      setRespIsOk(true);
    } else {
      setLoading(false);
      setError(true);
      setRespIsOk(false);
    }
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const search = (searchValue) => {
    let value = searchValue.target.value.toLowerCase();
    if(!error) {
      const filteredDishes = copyDishesInfo.filter((dish) => dish.name.toLowerCase().includes(value));
      setDishesInfo(filteredDishes);
      }
  }

  const debouncedSearch = debounce(search, 700);

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
          onChange={ debouncedSearch }
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
      {
        dishesInfo.length === 0 && respIsOk && (
          <section className="dish-search__no-results-container">
            <figure className="dish-search__no-results-image-container">
              <img src="../images/search-not-found.svg" alt="" className="dish-search__no-results-image"/>
            </figure>
            <h1 className="dish-search__no-results">No results that match your search</h1>
          </section>
        )
      }
    </main>
  );
};

export default DishSearch;
