import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

// import "./cart-dropdown.styles.scss";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

import { useNavigate } from "react-router-dom";

function CartDropdown() {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  function goToCheckoutHandler() {
    navigate("/checkout");
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
          ))
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
