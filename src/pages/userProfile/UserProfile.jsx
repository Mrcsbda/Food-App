import React from "react";
import "./userProfile.scss";
const UserProfile = () => {
  const configOptions = [
    {
      icon: "../images/account-edit.svg",
      title: "Account edit",
      path: "/profile/edit",
    },
    {
      icon: "../images/payment-methods.svg",
      title: "Payment methods",
      path: "/payment-methods",
    },
    {
      icon: "../images/location-edit.svg",
      title: "Location",
    },
    {
      icon: "../images/FAQ.svg",
      title: "FAQ",
    },
    {
      icon: "../images/support.svg",
      title: "Support",
    },
    {
      icon: "../images/logout.svg",
      title: "Logout",
    },
  ];
  return (
    <main className="user-profile">
      <figure className="user-profile__picture-container">
        <img
          className="user-profile__picture"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile picture"
        />
        <figcaption className="user-profile__user-name">
          Mariana Castañeda
        </figcaption>
      </figure>
      <section className="user-profile__options-container">
        {configOptions.map((option, index) => {
          return (
            <article key={index} className="user-profile__option">
              <div className="user-profile__option-info">
                <img
                  className="user-profile__option-icon"
                  src={option.icon}
                  alt={`${option.title} image`}
                />
                <p className="user-profile__option-title">{option.title}</p>
              </div>
              <img
                className="user-profile__arrow-icon"
                src="../images/arrow-next.svg"
                alt=""
              />
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default UserProfile;
