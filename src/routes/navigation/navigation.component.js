import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinksContainer>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            {currentUser ? (
              <NavLink to="/" onClick={signOutUser}>
                Sign out
              </NavLink>
            ) : (
              <NavLink to="/auth">Sign in</NavLink>
            )}
          </li>
          <li>
            <CartIcon />
          </li>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
