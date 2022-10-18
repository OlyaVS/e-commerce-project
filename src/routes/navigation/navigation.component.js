import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
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
            {currentUser ? (
              <Link className="nav-link" to="/" onClick={signOutHandler}>
                Sign out
              </Link>
            ) : (
              <Link className="nav-link" to="/auth">
                Sign in
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
