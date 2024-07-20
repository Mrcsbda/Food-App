import React from "react";
import "./signUp.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpWithEmailAndPassword } from "../../store/slides/user/thunk";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const dispatch = useDispatch()
  const onSubmit = async (data) => {
    // do validation empty inputs
    const resp = await dispatch(signUpWithEmailAndPassword(data))
    console.log(data);

  };

  return (
    <main className="sign-up">
      <h1 className="sign-up__title">Create account</h1>
      <form className="sign-up__form" onSubmit={handleSubmit(onSubmit)}>
        <section className="sign-up__inputs-container">
          <label className="sign-up__label">
            <span>Name</span>
            <input type="text" className="sign-up__name" placeholder="John Foxy" {...register("name")}/>
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
        </section>
        <button type="submit" className="sign-up__sign-up-button">Sign Up</button>
      </form>
    </main>
  );
};

export default SignUp;
