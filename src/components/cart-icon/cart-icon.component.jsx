// import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

// import "./cart-icon.styles.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } =
    useContext(CartDropdownContext);

  return (
    <CartIconContainer onClick={() => setIsCartOpen(() => !isCartOpen)}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
