import React, { useState } from "react";
import { goBack } from "../../services/goBack";
import "./editUserInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editInfoUser } from "../../services/firebase/users";
import { updateInfoUser } from "../../store/slides/user/user";
import { setAlerts } from "../../services/alerts";
import Loader from "../../components/loader/Loader";
import EditImageForm from "../../components/editInfoUser/editImageForm/EditImageForm";
const EditUserInfo = () => {
  const initialState = {
    name: false,
    email: false,
    phone: false,
    birthday: false,
    address: false,
  };
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputsIsAvailable, setInputsIsAvailable] = useState(initialState);
  const { name, avatar, email, loginMethod, phone, address, birthday, id } =
    useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();
  const distpatch = useDispatch();
  const propsToEditImageForm = {
    setIsEditing,
    setLoading,
    id,
    setError,
  };
  const getTime = (userBirthday) => {
    const date = new Date(userBirthday);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 1).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const editInfo = (type) => {
    if (type === "email" && loginMethod === "GOOGLE") {
      return;
    }
    setInputsIsAvailable((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const saveInfo = async (data) => {
    const formData = data;
    if (formData.birthday) {
      formData.birthday = new Date(formData.birthday).getTime();
    }

    !formData.name && delete formData.name;
    !formData.email && delete formData.email;
    !formData.phone && delete formData.phone;
    !formData.birthday && delete formData.birthday;
    !formData.address && delete formData.address;

    if (Object.keys(formData).length) {
      setLoading(true);
      const resp = await editInfoUser({ formData, id });
      setLoading(false);
      if (resp) {
        setError(false);
        distpatch(updateInfoUser(formData));
        setAlerts("edit");
        setInputsIsAvailable(initialState);
      } else {
        setInputsIsAvailable(initialState);
        setError(true);
      }
    }
  };

  return (
    <main className="edit-user-profile">
      {loading && <Loader />}
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
        <EditImageForm propsToEditImageForm={propsToEditImageForm} />
      )}
      <form
        className="edit-user-profile__form-update-info"
        onSubmit={handleSubmit(saveInfo)}
      >
        <div
          className={`edit-user-profile__input-container ${
            inputsIsAvailable.name
              ? ""
              : "edit-user-profile__input-container--disabled"
          }`}
        >
          <input
            type="text"
            className="edit-user-profile__input"
            defaultValue={name}
            disabled={!inputsIsAvailable.name}
            {...register("name")}
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
            onClick={() => editInfo("name")}
          />
        </div>
        <div
          className={`edit-user-profile__input-container ${
            inputsIsAvailable.email
              ? ""
              : "edit-user-profile__input-container--disabled"
          }`}
        >
          <input
            type="email"
            className="edit-user-profile__input"
            defaultValue={email}
            disabled={!inputsIsAvailable.email}
            {...register("email")}
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
            onClick={() => editInfo("email")}
          />
          {loginMethod === "GOOGLE" && (
            <p className="edit-user-profile__warning">
              when your login method is with google you cannot edit your email
            </p>
          )}
        </div>
        <div
          className={`edit-user-profile__input-container ${
            inputsIsAvailable.phone
              ? ""
              : "edit-user-profile__input-container--disabled"
          }`}
        >
          <input
            type="number"
            className="edit-user-profile__input"
            defaultValue={phone ? phone : ""}
            placeholder="Please enter a number"
            disabled={!inputsIsAvailable.phone}
            {...register("phone")}
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
            onClick={() => editInfo("phone")}
          />
        </div>
        <div
          className={`edit-user-profile__input-container ${
            inputsIsAvailable.birthday
              ? ""
              : "edit-user-profile__input-container--disabled"
          }`}
        >
          <input
            type="date"
            className="edit-user-profile__input"
            defaultValue={birthday ? getTime(birthday) : ""}
            placeholder="Please enter your birth date"
            disabled={!inputsIsAvailable.birthday}
            {...register("birthday")}
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
            onClick={() => editInfo("birthday")}
          />
        </div>
        <div
          className={`edit-user-profile__input-container ${
            inputsIsAvailable.address
              ? ""
              : "edit-user-profile__input-container--disabled"
          }`}
        >
          <input
            type="text"
            className="edit-user-profile__input"
            defaultValue={address ? address : ""}
            placeholder="Please enter your address"
            disabled={!inputsIsAvailable.address}
            {...register("address")}
          />
          <img
            className="edit-user-profile__edit-icon"
            src="../images/edit.svg"
            alt="edit icon"
            onClick={() => editInfo("address")}
          />
        </div>
        <button type="submit" className="edit-user-profile__btn-save">
          Save
        </button>
      </form>
      {error && (
        <p className="edit-user-profile__error">
          Oops! Something went wrong. Please try again
        </p>
      )}
    </main>
  );
};

export default EditUserInfo;
