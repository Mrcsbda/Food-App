import React, { useState } from "react";
import "./signIn.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginWithEmail } from "../../store/slides/user/thunk";
import Loader from "../../components/loader/Loader";
import Swal from "sweetalert2";
import { setAlerts } from "../../services/alerts";

const SignIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleRoutes = (path) => {
    navigate(`/${path}`);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const resp = await dispatch(loginWithEmail(data));
    setLoading(false);
    switch (resp) {
      case "ok":
        setAlerts("login")
        reset();
        navigate("/");
        break;
      case "Firebase: Error (auth/invalid-credential).":
        setError(true);
        setErrorMessage("Incorrect information, try again.");
        break;
      default:
        setError(true);
        setErrorMessage("Something went wrong, try again later");
        break;
    }
  };

  return (
    <main className="sign-in">
      {loading && <Loader />}
      <figure className="sign-in__delivery-logo-container">
        <img src="../images/logo.svg" alt="logo icon" />
      </figure>
      <form className="sign-in__form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="sign-in__title">Login</h1>
        <label className="sign-in__label">
          <span>Email</span>
          <input
            type="email"
            className="sign-in__email"
            {...register("email")}
          />
        </label>
        <label className="sign-in__label">
          <span>Password</span>
          <input
            type="password"
            className="sign-in__password"
            {...register("password")}
          />
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
      {error && <p className="sign-in__error-message">{errorMessage}</p>}
    </main>
  );
};

export default SignIn;
