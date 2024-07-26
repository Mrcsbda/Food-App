import React from "react";

import "./headerMobile.scss";
import AddressHeader from "../addressHeader/AddressHeader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HeaderMobile = () => {
  const { isLogged } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleRoutes = (path) => {
    navigate(`/${path}`);
  };
  return (
    <header className="header-mobile">
      <section className="header-mobile__header-container">
        <figure className="header-mobile__logo-container">
          <img
            src="../images/logo.svg"
            alt="logo image"
            className="header-mobile__logo"
          />
        </figure>
        {isLogged && <AddressHeader />}
      </section>
      {!isLogged && (
        <article className="header-desktop__login-options">
          <button
            className="header-desktop__login-button"
            onClick={() => handleRoutes("sign-in")}
          >
            Login
          </button>
          <button
            className="header-desktop__signup-button"
            onClick={() => handleRoutes("sign-up")}
          >
            Sign Up
          </button>
        </article>
      )}
    </header>
  );
};

export default HeaderMobile;
