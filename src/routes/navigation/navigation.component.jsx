import { Outlet } from "react-router-dom";
import { useContext } from "react";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

// import "./navigation.styles.jsx";
import {
  NavigationContainer,
  LogoContainer,
  CrwnLogo,
  NavLinks,
  NavLink,
} from "./navigation.styles";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartDropdownContext);

  //? TODO: need to fix the styling of => CrwnLogo
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo onClick={() => setIsCartOpen(false)} />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
