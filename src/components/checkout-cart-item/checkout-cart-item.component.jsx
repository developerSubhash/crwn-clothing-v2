import { useContext } from "react";

import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

// import "./checkout-cart-item.styles.scss";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  ItemDetails,
  Arrow,
} from "./checkout-cart-item.styles";

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
      <CheckoutItemContainer>
        <ImageContainer>
          <Image src={imageUrl} alt={name} />
        </ImageContainer>
        <ItemDetails>{name}</ItemDetails>
        <ItemDetails>
          <div className="arrow" onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </ItemDetails>
        <ItemDetails>{price}</ItemDetails>
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </CheckoutItemContainer>
    </>
  );
}

export default CheckoutCartItem;
