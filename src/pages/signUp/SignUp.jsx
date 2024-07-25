import React, { useEffect, useState } from "react";
import "./signUp.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpWithEmailAndPassword } from "../../store/slides/user/thunk";
import titleCase from "../../services/titleCase";
const SignUp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validateInputs = (data) => {
    if (!data.name.length || !data.email.length || !data.password.length || data.password.length < 8) {
      showErrorMessage(data);
      setError(true);
      return false
    } else {
      setError(false);
      return true
    }
  };

  const showErrorMessage = (data) => {
    let message = "";
    const inputs = ["name", "email", "password"];
    inputs.forEach((item) => {
      if (!data[item].length) {
        message = `${message} ${titleCase(item)}`;
      }
    });
    if(data.password.length < 8 && data.password.length > 0) {
      message = `${message} Password`;
    }
    setErrorMessage(message);
  };

  const onSubmit = async (data) => {
    let infoIsValid = validateInputs(data);
    if (infoIsValid) {
      const resp = await dispatch(signUpWithEmailAndPassword(...data));
    }
  };

  return (
    <main className="sign-up">
      <h1 className="sign-up__title">Create account</h1>
      <form className="sign-up__form" onSubmit={handleSubmit(onSubmit)}>
        <section className="sign-up__inputs-container">
          <label className="sign-up__label">
            <span>Name</span>
            <input
              type="text"
              className="sign-up__name"
              placeholder="John Foxy"
              {...register("name")}
            />
          </label>
          <label className="sign-up__label">
            <span>Email</span>
            <input
              type="email"
              className="sign-up__email"
              placeholder="email@example.com"
              {...register("email")}
            />
          </label>
          <label className="sign-up__label">
            <span>Password</span>
            <input
              type="password"
              className="sign-up__password"
              placeholder="min 8 characters"
              {...register("password")}
            />
          </label>
          {error && (
            <p className="sign-up__error-message">
              The following fields are empty or incomplete: {errorMessage}
            </p>
          )}
        </section>
        <button type="submit" className="sign-up__sign-up-button">
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default SignUp;
