import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/"></Link>
          </li>
          <li>
            <Link className="nav-link" to="/sign-in">
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
