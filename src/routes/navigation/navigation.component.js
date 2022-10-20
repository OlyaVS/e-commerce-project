import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
