import React from "react";
import "./addNewCard.scss";
import { goBack } from "../../services/goBack";

const AddNewCard = () => {

  return (
    <main className="add-new-card">
      <img
        className="add-new-card__arrow-prev"
        src="../images/arrow-prev.svg"
        alt="arrow icon"
        onClick={goBack}
      />
      <h1 className="add-new-card__title">Add new card</h1>
      <form className="add-new-card__form">
        <input
          type="text"
          className="add-new-card__input"
          placeholder="Card name"
        />
        <input
          type="text"
          className="add-new-card__input"
          placeholder="Card number"
        />
        <div className="add-new-card__input-container">
          <input
            type="text"
            className="add-new-card__input"
            placeholder="MM/YY"
          />
          <input
            type="text"
            className="add-new-card__input"
            placeholder="CVV"
          />
        </div>
        <button type="submit" className="add-new-card__submit-btn">
          Save
        </button>
      </form>
    </main>
  );
};

export default AddNewCard;
