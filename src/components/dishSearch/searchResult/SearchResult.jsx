import React from "react";
import "./searchResult.scss";

const SearchResult = ({ dishInfo }) => {
  return (
    <article className="search-result-info">
      <figure className="search-result-info__image-container">
        <img
          src={dishInfo.image}
          alt={`${dishInfo.name} image`}
          className="search-result-info__image"
        />
      </figure>
      <div className="search-result-info__info">
        <h3 className="search-result-info__name">{dishInfo.name}</h3>
        <p className="search-result-info__price">$ {dishInfo.price}</p>
      </div>
    </article>
  );
};

export default SearchResult;
