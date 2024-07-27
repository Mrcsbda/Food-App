import React from "react";
import "./userProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slides/user/user";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, avatar } = useSelector((state) => state.user);
  const configOptions = [
    {
      icon: "../images/account-edit.svg",
      title: "Account edit",
      type: "edit-profile",
    },
    {
      icon: "../images/payment-methods.svg",
      title: "Payment methods",
      type: "edit-payment-methods",
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
      type: "logout",
    },
  ];

  const handleConfigOptions = (type) => {
    switch (type) {
      case "edit-profile":
        navigate("/edit-profile");
        break;
      case "edit-payment-methods":
        break;
      case "logout":
        Swal.fire({
          title: "Are you sure you want to log out?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, log out!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            localStorage.clear();
            dispatch(logout());
            navigate("/");
          }
        });

        break;
      default:
        break;
    }
  };

  return (
    <main className="user-profile">
      <figure className="user-profile__picture-container">
        <img
          className="user-profile__picture"
          src={avatar ? avatar : "../images/no-avatar.webp"}
          alt="profile picture"
        />
        <figcaption className="user-profile__user-name">{name}</figcaption>
      </figure>
      <section className="user-profile__options-container">
        {configOptions.map((option, index) => {
          return (
            <article
              key={index}
              className="user-profile__option"
              onClick={() => handleConfigOptions(option.type)}
            >
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
