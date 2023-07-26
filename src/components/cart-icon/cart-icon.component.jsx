import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import "./cart-icon.styles.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } =
    useContext(CartDropdownContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(() => !isCartOpen)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
