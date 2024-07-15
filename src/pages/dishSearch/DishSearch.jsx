import React from "react";
import "./dishSearch.scss";
import SearchResult from "../../components/dishSearch/searchResult/SearchResult";
const DishSearch = () => {
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

  return (
    <main className="dish-search">
      <section className="dish-search__search-container">
        <img
          className="dish-search__search-icon"
          src="./images/search.svg"
          alt="search icon"
        />
        <input
          className="dish-search__search"
          type="text"
          placeholder="Search for a dish"
        />
        <img
          className="dish-search__delete"
          src="./images/delete.svg"
          alt="delete icon"
        />
      </section>
      <section className="dish-search__results-container">
        {dishesInfo.map((dish, index) => {
          return <SearchResult dishInfo={dish} key={index}/>;
        })}
      </section>
    </main>
  );
};

export default DishSearch;
