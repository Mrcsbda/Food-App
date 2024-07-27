import React, { useState } from "react";
import { goBack } from "../../services/goBack";
import "./editUserInfo.scss";
import { useSelector } from "react-redux";
const EditUserInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { name, avatar, email, loginMethod, phone, address, birthday } =
    useSelector((state) => state.user);
  return (
    <main className="edit-user-profile">
      <img
        className="edit-user-profile__arrow-prev"
        src="..//images/arrow-prev.svg"
        alt="arrow icon"
        onClick={goBack}
      />
      <h1 className="edit-user-profile__title">Profile</h1>
      <figure className="edit-user-profile__profile-picture-container">
        <img
          className="edit-user-profile__profile-picture"
          src={avatar ? avatar : "../images/no-avatar.webp"}
          alt={`${name} profile picture`}
        />
        <img
          className="edit-user-profile__edit-picture-icon"
          src="../images/camera.svg"
          alt="edit picture icon"
          onClick={() => setIsEditing(!isEditing)}
        />
      </figure>
      {isEditing && (
        <form className="edit-user-profile__form-update-image">
          <input type="file" className="edit-user-profile__input-file" />
          <button type="submit" className="edit-user-profile__update-image-btn">
            Update image
          </button>
        </form>
      )}
      <form className="edit-user-profile__form-update-info">
        <div className="edit-user-profile__input-container">
          <input
            type="text"
            className="edit-user-profile__input"
            defaultValue={name}
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
          />
        </div>
        <div className="edit-user-profile__input-container">
          <input
            type="email"
            className="edit-user-profile__input"
            defaultValue={email}
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
          />
        </div>
        <div className="edit-user-profile__input-container">
          <input
            type="number"
            className="edit-user-profile__input"
            defaultValue={phone ? phone : ""}
            placeholder="Please enter a number"
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
          />
        </div>
        <div className="edit-user-profile__input-container">
          <input
            type="date"
            className="edit-user-profile__input"
            defaultValue={birthday ? birthday : ""}
            placeholder="Please enter your birth date"
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
          />
        </div>
        <div className="edit-user-profile__input-container">
          <input
            type="text"
            className="edit-user-profile__input"
            defaultValue={address ? address : ""}
            placeholder="Please enter your address"
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
          />
        </div>
        <button type="submit" className="edit-user-profile__btn-save">
          Save
        </button>
      </form>
    </main>
  );
};

export default EditUserInfo;
