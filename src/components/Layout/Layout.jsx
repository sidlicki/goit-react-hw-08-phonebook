import { NavLink } from 'react-router-dom';
import React from 'react';
import css from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/auth.reducer';
import {
  selectAuthIsLoading,
  selectAuthenticated,
  selectUserData,
} from 'redux/auth/auth.selectors';
import Loader from 'components/Loader/Loader';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div>
      <header className={css.header}>
        <nav className={css.container}>
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
                  `${css.navlink} ${css.navlinkLogin} ${
                    isActive ? css.active : ''
                  }`
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
              <div className={css.userSection}>
                <span className={css.userInfo}>
                  Hello, <b>{userData.name}</b>!
                </span>{' '}
                <button className={css.logoutButton} onClick={onLogOut}>
                  Log Out
                </button>
              </div>
            </>
          )}
        </nav>
      </header>
      <main className={css.wrapper}> {isLoading ? <Loader /> : children}</main>
    </div>
  );
};

export default Layout;
