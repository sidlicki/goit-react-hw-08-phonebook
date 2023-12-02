import React from 'react';
import css from './styles.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1 className={css.homeTitle}>
        Hello, this is your phone book, please <Link to="/login">log in</Link>{' '}
        or <Link to="/register">register</Link>
      </h1>
    </>
  );
};
export default HomePage;
