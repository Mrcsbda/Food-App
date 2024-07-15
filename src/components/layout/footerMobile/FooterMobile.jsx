import React from "react";
import "./footerMobile.scss";
const FooterMobile = () => {
  const footerIcons = [
    {
      name: "Home",
      icon: "../images/home.svg",
      path: "/",
    },
    {
      name: "Search",
      icon: "../images/search.svg",
      path: "/search",
    },
    {
      name: "Orders",
      icon: "../images/orders.svg",
      path: "/orders",
    },
    {
      name: "Profile",
      icon: "../images/profile.svg",
      path: "/profile",
    },
  ];
  return (
    <footer className="footer-mobile">
      {footerIcons.map((icon, index) => {
        return (
          <figure className="footer-mobile__icon-container" key={index}>
            <img
              className="footer-mobile__icon"
              src={icon.icon}
              alt={`${icon.name} icon`}
            />
          </figure>
        );
      })}
    </footer>
  );
};

export default FooterMobile;
