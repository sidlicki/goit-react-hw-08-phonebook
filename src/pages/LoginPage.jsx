import React from 'react';
import css from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import { selectAuthIsLoading } from 'redux/auth/auth.selectors';
import Loader from 'components/Loader/Loader';

const LoginPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectAuthIsLoading);

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
      .then(() => Notiflix.Notify.success('Login Success'))
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
          Sign in
        </button>
      </form>
      <p>
        If you do not have an account, please{' '}
        <Link to="/register">register</Link>
      </p>
      {isLoading && (
        <div className={css.loaderWrapper}>
          <Loader />
        </div>
      )}
    </>
  );
};
export default LoginPage;
