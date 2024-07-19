import React from "react";
import "./signUp.scss";
const SignUp = () => {
  return (
    <main class="sign-up">
      <h1 class="sign-up__title">Create account</h1>
      <form class="sign-up__form">
        <section class="sign-up__inputs-container">
          <label class="sign-up__label">
            <span>Name</span>
            <input type="text" class="sign-up__name" placeholder="John Foxy" />
          </label>
          <label class="sign-up__label">
            <span>Email</span>
            <input
              type="email"
              class="sign-up__email"
              placeholder="email@example.com"
            />
          </label>
          <label class="sign-up__label">
            <span>Password</span>
            <input
              type="password"
              class="sign-up__password"
              placeholder="min 8 characters"
            />
          </label>
        </section>
        <button class="sign-up__sign-up-button">Sign Up</button>
      </form>
    </main>
  );
};

export default SignUp;
