import React from "react";
import { useSelector } from "react-redux";
import "./headerDesktop.scss";
import AddressHeader from "../addressHeader/AddressHeader";
import { useNavigate } from "react-router-dom";

const HeaderDesktop = () => {
  const key = 1;
  const navigate = useNavigate();
  const headerOptions = [
    {
      title: "Home",
      path: "",
    },
    {
      title: "Search",
      path: "search",
    },
  ];
  const headerOptionsUserLogged = [
    {
      title: "Home",
      path: "",
    },
    {
      title: "Search",
      path: "search",
    },
    {
      title: "Orders",
      path: "orders",
    },
    {
      title: "Profile",
      path: `profile/${key}`,
    },
  ];
  const handleRoutes = (path) => {
    navigate(`/${path}`);
  };

  const { isLogged } = useSelector((state) => state.user);
  return (
    <header className="header-desktop">
      <section className="header-desktop__logo-and-address-container">
        <figure className="header-desktop__logo-container">
          <img
            src="../images/logo.svg"
            alt="logo image"
            className="header-desktop__logo"
          />
        </figure>
        <AddressHeader />
      </section>
      <section className="header-desktop__nav-container">
        <nav className="header-desktop__nav">
          {!isLogged ? (
            <ul className="header-desktop__nav-options">
              {headerOptions.map((option, index) => {
                return (
                  <li
                    key={index}
                    className="header-desktop__nav-option"
                    onClick={() => handleRoutes(option.path)}
                  >
                    {option.title}
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className="header-desktop__nav-options">
              {headerOptionsUserLogged.map((option, index) => {
                return (
                  <li
                    key={index}
                    className="header-desktop__nav-option"
                    onClick={() => handleRoutes(option.path)}
                  >
                    {option.title}
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
        <hr />
        {!isLogged ? (
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
        ) : (
          <figure className="header-desktop__shopping-cart-container">
            <img
              src="../images/cart.svg"
              alt="shopping cart icon"
              className="header-desktop__shopping-cart"
            />
          </figure>
        )}
      </section>
    </header>
  );
};

export default HeaderDesktop;
