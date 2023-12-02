import React from 'react';
import css from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.reducer';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';
import { selectAuthIsLoading } from 'redux/auth/auth.selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectAuthIsLoading);

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
    dispatch(registerThunk(formData))
      .unwrap()
      .then(() => e.target.reset())
      .catch(() => {
        Notiflix.Notify.failure('Error, please try again');
      });
  };

  return (
    <>
      <h1 className={css.title}>Register Page</h1>

      <form onSubmit={onSubmit} className={css.form}>
        <label className={css.label}>
          <p>Name:</p>
          <input
            className={css.input}
            type="text"
            placeholder="Your name"
            required
            name="userName"
          />
        </label>
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
          Sign Up
        </button>
      </form>
      <p>
        If you have an account, please <Link to="/login">login</Link>
      </p>
      {isLoading && (
        <div className={css.loaderWrapper}>
          <Loader />
        </div>
      )}
    </>
  );
};
export default RegisterPage;
