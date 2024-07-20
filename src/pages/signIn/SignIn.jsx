import React from "react";
import "./signIn.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const navigate = useNavigate();
  const handleRoutes = (path) => {
    navigate(`/${path}`);
  };





  return (
    <main className="sign-in">
      <figure className="sign-in__delivery-logo-container">
        <img src="../images/logo.svg" alt="logo icon" />
      </figure>
      <form className="sign-in__form" >
        <h1 className="sign-in__title">Login</h1>
        <label className="sign-in__label">
          <span>Email</span>
          <input type="email" className="sign-in__email" />
        </label>
        <label className="sign-in__label">
          <span>Password</span>
          <input type="password" className="sign-in__password" />
        </label>
        <section className="sign-in__buttons-container">
          <button className="sign-in__sign-in-button">
            <span> Sign In </span>
          </button>
          <button className="sign-in__google-button">
            <img
              src="../images/google.svg"
              alt="google icon"
              className="sign-in__google-icon"
            />
            <span> Google </span>
          </button>
        </section>
        <p
          className="sign-in__create-account"
          onClick={() => handleRoutes("sign-up")}
        >
          Create account
        </p>
      </form>
    </main>
  );
};

export default SignIn;
