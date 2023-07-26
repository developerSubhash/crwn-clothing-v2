import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";

function CartDropdown() {
  const { cartItems, isCartOpen, setIsCartOpen } =
    useContext(CartDropdownContext);
  const navigate = useNavigate();

  function goToCheckoutHandler() {
    navigate("/checkout");
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
