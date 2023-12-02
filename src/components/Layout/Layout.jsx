import { NavLink } from 'react-router-dom';
import React from 'react';
import css from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/auth.reducer';
import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selectors';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div>
      <header className={css.header}>
        {!authenticated ? (
          <>
            <NavLink
              className={({ isActive }) =>
                `${css.navlink} ${isActive ? css.active : ''}`
              }
              to="/"
            >
              Start
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${css.navlink} ${isActive ? css.active : ''}`
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${css.navlink} ${isActive ? css.active : ''}`
              }
              to="/register"
            >
              Register
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                `${css.navlink} ${isActive ? css.active : ''}`
              }
              to="/contacts"
            >
              Contacts
            </NavLink>{' '}
            <div>
              <span>Hello, {userData.name}!</span>{' '}
              <button onClick={onLogOut}>Log Out</button>
            </div>
          </>
        )}
      </header>
      <main className={css.wrapper}>{children}</main>
    </div>
  );
};

export default Layout;
