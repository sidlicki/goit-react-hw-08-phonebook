import React from 'react';
import css from './styles.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData))
      .unwrap()
      .then(() => e.target.reset())
      .catch(() => {
        Notiflix.Notify.failure(
          'Login or password incorrectly, please try again'
        );
      });
  };

  return (
    <>
      <h1 className={css.title}>Login</h1>
      <form onSubmit={onSubmit} className={css.form}>
        <label className={css.label}>
          <p>Email:</p>
          <input
            className={css.input}
            type="email"
            placeholder="example@mail.com"
            required
            name="userEmail"
          />
        </label>
        <label className={css.label}>
          <p>Password:</p>
          <input
            className={css.input}
            type="password"
            placeholder="******"
            required
            name="userPassword"
          />
        </label>
        <br />
        <button className={css.button} type="submit">
          Sign In
        </button>
      </form>
      <p>
        If you do not have an account, please{' '}
        <Link to="/register">register</Link>
      </p>
    </>
  );
};
export default LoginPage;
