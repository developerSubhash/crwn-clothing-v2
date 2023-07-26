import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";

function CartDropdown() {
  const { cartItems, isCartOpen, setIsCartOpen } =
    useContext(CartDropdownContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={() => setIsCartOpen(() => !isCartOpen)}>
          GO TO CHECKOUT
        </Button>
      </Link>
    </div>
  );
}

export default CartDropdown;
