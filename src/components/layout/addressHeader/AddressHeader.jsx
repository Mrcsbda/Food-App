import React from "react";
import "./addressHeader.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddressHeader = () => {
  const { address } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <article className="header">
      <figure className="header__icon-container">
        <img
          className="header__icon"
          src="../images/location.svg"
          alt="location icon"
        />
      </figure>
      <div className="header__location">
        <h3 className="header__location-title">DELIVER TO</h3>
        <div className="header__location-info">
          <p
            className="header__location-address"
            onClick={() => navigate("/edit-profile")}
          >
            {address ? address : "Add new Address"}
          </p>
          <img
            className="header__location-arrow"
            src="../images/arrow-down.svg"
            alt="arrow icon"
          />
        </div>
      </div>
    </article>
  );
};

export default AddressHeader;
