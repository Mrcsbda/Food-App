import React, { useEffect, useState } from "react";
import "./signUp.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpWithEmailAndPassword } from "../../store/slides/user/thunk";
import titleCase from "../../services/titleCase";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setAlerts } from "../../services/alerts";
import { sendEmailVerification } from "firebase/auth";
const SignUp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = (data) => {
    if (
      !data.name.length ||
      !data.email.length ||
      !data.password.length ||
      data.password.length < 8
    ) {
      showErrorMessage(data);
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const showErrorMessage = (data) => {
    let message = "";
    let emptyInputs = "";
    const inputs = ["name", "email", "password"];
    inputs.forEach((item) => {
      if (!data[item].length) {
        emptyInputs = `${emptyInputs} ${titleCase(item)}`;
      }
    });
    if (data.password.length < 8 && data.password.length > 0) {
      emptyInputs = `${emptyInputs} Password`;
    }
    message = `The following fields are empty or incomplete: ${emptyInputs}`;
    setErrorMessage(message);
  };

  const onSubmit = async (data) => {
    let infoIsValid = validateInputs(data);
    if (infoIsValid) {
      setLoading(true);
      const resp = await dispatch(signUpWithEmailAndPassword(data));
      setLoading(false);
      switch (resp) {
        case "ok":
          reset();
          setAlerts("register");
          navigate("/");
          break;
        case "Firebase: Error (auth/email-already-in-use).":
          setError(true);
          setErrorMessage("Email already in use");
          break;
        default:
          setError(true);
          setErrorMessage("Something went wrong, try again later");
          break;
      }
    }
  };

  return (
    <main className="sign-up">
      {loading && <Loader />}
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
          {error && <p className="sign-up__error-message">{errorMessage}</p>}
        </section>
        <button type="submit" className="sign-up__sign-up-button">
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default SignUp;
