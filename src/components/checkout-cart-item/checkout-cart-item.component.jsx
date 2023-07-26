import { useContext } from "react";

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import "./checkout-cart-item.styles.scss";

function CheckoutCartItem({ cartItem }) {
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartDropdownContext);

  const { price, quantity, name, imageUrl } = cartItem;

  function clearItemHandler() {
    clearItemFromCart(cartItem);
  }

  function addItemHandler() {
    addItemToCart(cartItem);
  }

  function removeItemHandler() {
    removeItemToCart(cartItem);
  }

  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </div>
    </>
  );
}

export default CheckoutCartItem;
