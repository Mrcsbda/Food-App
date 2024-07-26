import React from "react";
import "./footerMobile.scss";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const FooterMobile = () => {
  const { isLogged } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleRoutes = (path) => {
    navigate(`${path}`);
  };

  const footerIcons = [
    {
      name: "Home",
      icon: "../images/home.svg",
      path: "/",
      show: true,
    },
    {
      name: "Search",
      icon: "../images/search.svg",
      path: "/search",
      show: true,
    },
    {
      name: "Orders",
      icon: "../images/orders.svg",
      path: "/orders",
      show: isLogged,
    },
    {
      name: "Profile",
      icon: "../images/profile.svg",
      path: `/profile`,
      show: isLogged,
    },
  ];
  return (
    <footer className="footer-mobile">
      {footerIcons.map((icon, index) => {
        return (
          icon.show && (
            <figure
              className={`footer-mobile__icon-container ${
                icon.path === pathname &&
                "footer-mobile__icon-container--active"
              }`}
              key={index}
              onClick={() => handleRoutes(icon.path)}
            >
              <img
                className="footer-mobile__icon"
                src={icon.icon}
                alt={`${icon.name} icon`}
              />
            </figure>
          )
        );
      })}
    </footer>
  );
};

export default FooterMobile;
