import React from "react";
import { useSelector } from "react-redux";
import AddressHeader from "../addressHeader/AddressHeader";
import "./headerDesktop.scss";

const HeaderDesktop = () => {
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
      path: "profile",
    },
  ];
  const { isLogged } = useSelector((state) => state.user);
  return (
    <header className="header-desktop">
      <section className="header-desktop__logo-and-address-container">
        <figure className="header-desktop__logo-container">
          <img
            src="./images/logo.svg"
            alt="logo image"
            className="header-desktop__logo"
          />
        </figure>
        <AddressHeader />
      </section>
      <section className="header-desktop__nav-container">
        <nav className="header-desktop__nav">
          {!isLogged && (
            <ul className="header-desktop__nav-options">
              {headerOptions.map((option) => (
                <li key={option.title} className="header-desktop__nav-option">
                  {option.title}
                </li>
              ))}
            </ul>
          )}
          {isLogged && (
            <ul className="header-desktop__nav-options">
              {headerOptionsUserLogged.map((option) => (
                <li key={option.title} className="header-desktop__nav-option">
                  {option.title}
                </li>
              ))}
            </ul>
          )}
        </nav>
        <hr />
        {!isLogged && (
          <article className="header-desktop__login-options">
            <button className="header-desktop__login-button">Login</button>
            <button className="header-desktop__signup-button">Sign Up</button>
          </article>
        )}
        {isLogged && (
          <figure
            class="header-desktop__shopping-cart-container"
            routerLink="/cart"
          >
            <img
              src="./images/cart.svg"
              alt="shopping cart icon"
              class="header-desktop__shopping-cart"
            />
          </figure>
        )}
      </section>
    </header>
  );
};

export default HeaderDesktop;
