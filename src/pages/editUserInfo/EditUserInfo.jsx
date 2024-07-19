import React, { useState } from "react";
import { goBack } from "../../services/goBack";
import "./editUserInfo.scss";
const EditUserInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
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
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
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
            value="Mariana Castañeda Bedoya"
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
            value="mariana.c.bedoya.8@gmail.com"
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
            value="12345678"
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
            value="1990-01-01"
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
            value="Carrera 28#40a 9"
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
