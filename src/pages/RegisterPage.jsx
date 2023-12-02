import React from 'react';
import css from './styles.module.css';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.reducer';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
  };

  return (
    <>
      <h1 className={css.title}>Register Page</h1>

      <form onSubmit={onSubmit}>
        <label>
          <p>Name:</p>
          <input type="text" placeholder="Your name" required name="userName" />
        </label>
        <label>
          <p>Email:</p>
          <input
            type="email"
            placeholder="example@mail.com"
            required
            name="userEmail"
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            placeholder="******"
            required
            name="userPassword"
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
export default RegisterPage;
