import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";

import CheckoutCartItem from "../checkout-cart-item/checkout-cart-item.component";

import "./checkout.styles.scss";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartDropdownContext);
  /*
  function findCartItem(id) {
    return cartItems.find((item) => item.id === id);
  }

  function Quantity(id) {
    const clicked = findCartItem(id);
    addItemToCart(clicked);
  }

  function QuantityLess(id) {
    const clicked = findCartItem(id);
    subtractItemToCart(clicked);
  }

  function removeItem(id) {
    const clicked = findCartItem(id);
    removeItemToCart(clicked);
  }
*/
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutCartItem cartItem={cartItem} key={cartItem.id} />
      ))}
      {cartItems.length > 0 ? (
        <span className="total">Total : ${cartTotal}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Checkout;
